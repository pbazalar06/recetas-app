package com.proyintegrador.recetasbackend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "\"Receta\"")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_receta")
    private Long id;

    private String titulo;

    private String descripcion;

    @Column(name = "imagenlink")
    private String imagenLink;

    @ManyToMany
    @JoinTable(
            name = "\"Receta_Ingredientes\"",
            joinColumns = @JoinColumn(name = "receta_id"),
            inverseJoinColumns = @JoinColumn(name = "ingrediente_id")
    )
    private List<Ingredient> ingredientes;

    private String preparacion;

    public Recipe() {
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getImagenLink() {
        return imagenLink;
    }

    public List<Ingredient> getIngredientes() {
        return ingredientes;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setImagenLink(String imagenLink) {
        this.imagenLink = imagenLink;
    }

    public void setIngredientes(List<Ingredient> ingredientes) {
        this.ingredientes = ingredientes;
    }

    public String getPreparacion() {
        return preparacion;
    }

    public void setPreparacion(String preparacion) {
        this.preparacion = preparacion;
    }

}
