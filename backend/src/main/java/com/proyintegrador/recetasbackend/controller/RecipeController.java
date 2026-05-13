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
}