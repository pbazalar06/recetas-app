package com.proyintegrador.recetasbackend.controller;

import com.proyintegrador.recetasbackend.model.Ingredient;
import com.proyintegrador.recetasbackend.repository.IngredientRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredientes")
@CrossOrigin(origins = "http://localhost:5173")
public class IngredientController {

    private final IngredientRepository ingredientRepository;

    public IngredientController(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    @GetMapping
    public List<Ingredient> obtenerIngredientes() {
        return ingredientRepository.findAll();
    }
}