package com.proyintegrador.recetasbackend.repository;

import com.proyintegrador.recetasbackend.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    boolean existsByNombre(String nombre);
}