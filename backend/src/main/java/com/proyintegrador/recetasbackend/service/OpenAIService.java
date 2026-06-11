package com.proyintegrador.recetasbackend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.proyintegrador.recetasbackend.model.Ingredient;
import com.proyintegrador.recetasbackend.repository.IngredientRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Base64;
import java.util.List;

@Service
public class OpenAIService {

    @Value("${openai.api.key}")
    private String apiKey;

    private final IngredientRepository ingredientRepository;

    public OpenAIService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<String> detectarIngredientes(MultipartFile imagen) throws Exception {

        String imagenBase64 = Base64.getEncoder()
                .encodeToString(imagen.getBytes());

        List<String> ingredientesBD = ingredientRepository.findAll()
                .stream()
                .map(Ingredient::getNombre)
                .toList();

        String listaIngredientes = String.join(", ", ingredientesBD);

        String prompt = """
                Analiza la imagen e identifica ingredientes visibles.

                Solo puedes responder ingredientes que estén en esta lista:
                %s

                Reglas:
                - Responde únicamente ingredientes de la lista.
                - Usa exactamente los mismos nombres de la lista.
                - No inventes ingredientes.
                - Si un ingrediente no está claro, no lo incluyas.
                - Responde solo una lista separada por comas.
                - No agregues explicaciones.

                Ejemplo de respuesta:
                tomate, queso, harina
                """.formatted(listaIngredientes);

        String body = """
        {
          "model": "gpt-4.1-mini",
          "input": [
            {
              "role": "user",
              "content": [
                {
                  "type": "input_text",
                  "text": "%s"
                },
                {
                  "type": "input_image",
                  "image_url": "data:image/jpeg;base64,%s"
                }
              ]
            }
          ]
        }
        """.formatted(prompt.replace("\"", "\\\"").replace("\n", "\\n"), imagenBase64);

        WebClient webClient = WebClient.builder()
                .baseUrl("https://api.openai.com")
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .build();

        String respuesta = webClient.post()
                .uri("/v1/responses")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(body)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(respuesta);

        String texto = root
                .path("output")
                .get(0)
                .path("content")
                .get(0)
                .path("text")
                .asText();

        return List.of(texto.split(","))
                .stream()
                .map(String::trim)
                .map(String::toLowerCase)
                .filter(nombre -> !nombre.isBlank())
                .toList();
    }
}
