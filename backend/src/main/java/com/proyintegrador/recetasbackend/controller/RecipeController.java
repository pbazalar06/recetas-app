package com.proyintegrador.recetasbackend.controller;

import com.proyintegrador.recetasbackend.model.Recipe;
import com.proyintegrador.recetasbackend.repository.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }
}