package com.proyintegrador.recetasbackend.model;

import jakarta.persistence.*;

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

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setImagenLink(String imagenLink) {
        this.imagenLink = imagenLink;
    }
}
