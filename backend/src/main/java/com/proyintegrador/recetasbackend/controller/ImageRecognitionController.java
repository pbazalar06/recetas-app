package com.proyintegrador.recetasbackend.controller;

import com.proyintegrador.recetasbackend.service.OpenAIService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/ia")
@CrossOrigin(origins = "http://localhost:5173")
public class ImageRecognitionController {

    private final OpenAIService openAIService;

    public ImageRecognitionController(
            OpenAIService openAIService
    ) {
        this.openAIService = openAIService;
    }

    @PostMapping("/ingredientes")
    public List<String> analizarImagen(
            @RequestParam("imagen")
            MultipartFile imagen
    ) throws Exception {

        return openAIService.detectarIngredientes(
                imagen
        );

    }
}
