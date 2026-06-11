package com.proyintegrador.recetasbackend.controller;

import com.proyintegrador.recetasbackend.model.Recipe;
import com.proyintegrador.recetasbackend.repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recetas")
@CrossOrigin(origins = "*")
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping
    public List<Recipe> obtenerRecetas() {
        return recipeRepository.findAll();
    }
    @PostMapping
    public Recipe guardarReceta(@RequestBody Recipe recipe){

        if(recipeRepository.existsByTituloIgnoreCase(recipe.getTitulo())){

            throw new RuntimeException("La receta ya existe");

        }

        return recipeRepository.save(recipe);

    }
    @PutMapping("/{id}")
    public Recipe actualizarReceta(
            @PathVariable Long id,
            @RequestBody Recipe recetaNueva){

        Recipe receta = recipeRepository
                .findById(id)
                .orElseThrow();

        receta.setTitulo(recetaNueva.getTitulo());

        receta.setDescripcion(recetaNueva.getDescripcion());

        receta.setImagenLink(recetaNueva.getImagenLink());

        receta.setPreparacion(recetaNueva.getPreparacion());

        receta.setIngredientes(recetaNueva.getIngredientes());

        return recipeRepository.save(receta);

    }
}
