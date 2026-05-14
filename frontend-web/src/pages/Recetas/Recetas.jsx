import "./Recetas.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { obtenerRecetas } from "../../services/recetasService";
import { obtenerIngredientes } from "../../services/ingredientesService";

function Recetas() {

    const [recetas, setRecetas] = useState([]);

    const [ingredientes, setIngredientes] = useState([]);

    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);

    useEffect(() => {

        cargarRecetas();
        cargarIngredientes();

    }, []);

    const cargarRecetas = async () => {

        try {

            const data = await obtenerRecetas();

            setRecetas(data);

        } catch (error) {

            console.log(error);

        }

    };

    const cargarIngredientes = async () => {

        try {

            const data = await obtenerIngredientes();

            setIngredientes(data);

        } catch (error) {

            console.log(error);

        }

    };

    const toggleIngrediente = (ingrediente) => {

        const existe = ingredientesSeleccionados.find(
            (i) => i.id === ingrediente.id
        );

        if (existe) {

            setIngredientesSeleccionados(

                ingredientesSeleccionados.filter(
                    (i) => i.id !== ingrediente.id
                )

            );

        } else {

            setIngredientesSeleccionados([
                ...ingredientesSeleccionados,
                ingrediente
            ]);

        }

    };

    const recetasFiltradas = recetas
        .map((receta) => {

            const coincidencias = receta.ingredientes.filter(

                (ingredienteReceta) =>

                    ingredientesSeleccionados.some(

                        (ingredienteSeleccionado) =>
                            ingredienteSeleccionado.id === ingredienteReceta.id

                    )

            ).length;

            return {
                ...receta,
                coincidencias
            };

        })

        .sort((a, b) => b.coincidencias - a.coincidencias);

    return (

        <div className="recetas-page">

            <nav className="recetas-navbar">

                <h1>FastDishesAI</h1>

                <div className="navbar-links">

                    <Link to="/inicio">
                        Inicio
                    </Link>

                    <Link to="/">
                        Cerrar sesión
                    </Link>

                </div>

            </nav>

            <div className="contenido-principal">

                {/* PANEL IZQUIERDO */}

                <aside className="ingredientes-panel">

                    <h2>Ingredientes</h2>

                    <div className="upload-box">

                        <p className="upload-text">

                            Sube una imagen de tus ingredientes y
                            nuestra IA podrá reconocerlos automáticamente.

                        </p>

                        <input
                            type="file"
                            accept="image/*"
                            id="input-imagen"
                            hidden
                        />

                        <label
                            htmlFor="input-imagen"
                            className="upload-btn"
                        >

                            Subir imagen

                        </label>

                    </div>

                    <p>
                        Selecciona los ingredientes que tienes disponibles
                    </p>

                    <div className="ingredientes-lista">

                        {ingredientes.map((ingrediente) => (

                            <button
                                key={ingrediente.id}
                                onClick={() => toggleIngrediente(ingrediente)}
                                className={
                                    ingredientesSeleccionados.some(
                                        (i) => i.id === ingrediente.id
                                    )
                                        ? "ingrediente-btn activo"
                                        : "ingrediente-btn"
                                }
                            >

                                {ingrediente.nombre}

                            </button>

                        ))}

                    </div>

                </aside>

                {/* PANEL DERECHO */}

                <main className="recetas-container">

                    <section className="hero-recetas">

                        <h2>
                            Recetas encontradas
                        </h2>

                        <p>
                            Las recetas con más coincidencias aparecerán primero
                        </p>

                    </section>

                    <section className="cards-section">

                        {recetasFiltradas.map((receta) => (

                            <div
                                className="receta-card"
                                key={receta.id}
                            >

                                <img
                                    src={receta.imagenLink}
                                    alt={receta.titulo}
                                />

                                <div className="card-content">

                                    <h3>
                                        {receta.titulo}
                                    </h3>

                                    <p>
                                        {receta.descripcion}
                                    </p>

                                    <div className="ingredientes-receta">

                                        {receta.ingredientes.map((ingrediente) => (

                                            <span
                                                key={ingrediente.id}
                                                className={
                                                    ingredientesSeleccionados.some(
                                                        (i) => i.id === ingrediente.id
                                                    )
                                                        ? "ingrediente-chip match"
                                                        : "ingrediente-chip"
                                                }
                                            >

                                                {ingrediente.nombre}

                                            </span>

                                        ))}

                                    </div>

                                    <div className="card-footer">

                                        <span>

                                            Coincidencias:
                                            {" "}
                                            {receta.coincidencias}

                                        </span>

                                        <Link to="/detalle">

                                            <button>
                                                Ver receta
                                            </button>

                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </section>

                </main>

            </div>

        </div>

    );
}

export default Recetas;