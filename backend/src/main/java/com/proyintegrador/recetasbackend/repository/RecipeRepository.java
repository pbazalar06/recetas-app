package com.proyintegrador.recetasbackend.repository;

import com.proyintegrador.recetasbackend.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    boolean existsByTituloIgnoreCase(String titulo);

}