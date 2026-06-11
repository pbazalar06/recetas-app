import "./Recetas.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { obtenerRecetas } from "../../services/recetasService";
import { obtenerIngredientes } from "../../services/ingredientesService";
import { detectarIngredientes } from "../../services/iaService";

function Recetas() {
    const [recetas, setRecetas] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
    const [busquedaIngrediente, setBusquedaIngrediente] = useState("");

    const [imagen, setImagen] = useState(null);
    const [cargandoIA, setCargandoIA] = useState(false);

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

    useEffect(() => {
        cargarRecetas();
        cargarIngredientes();
    }, []);

    const manejarImagen = (event) => {
        const archivo = event.target.files[0];

        if (archivo) {
            setImagen(archivo);
        }
    };

    const analizarImagen = async () => {
        if (!imagen) {
            alert("Selecciona una imagen");
            return;
        }

        try {
            setCargandoIA(true);

            const ingredientesDetectados = await detectarIngredientes(imagen);

            const encontrados = ingredientes.filter((ingrediente) =>
                ingredientesDetectados.some(
                    (nombreDetectado) =>
                        nombreDetectado.toLowerCase().trim() ===
                        ingrediente.nombre.toLowerCase().trim()
                )
            );

            setIngredientesSeleccionados(encontrados);

        } catch (error) {
            console.error(error);
        } finally {
            setCargandoIA(false);
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

    const ingredientesFiltrados = ingredientes.filter((ingrediente) =>
        ingrediente.nombre
            .toLowerCase()
            .includes(busquedaIngrediente.toLowerCase())
    );

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
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/">Cerrar sesión</Link>
                </div>
            </nav>

            <div className="contenido-principal">
                <aside className="ingredientes-panel">
                    <h2>Ingredientes</h2>

                    <div className="upload-card">
                        <h3>IA Detecta Ingredientes</h3>

                        <p>
                            Sube una imagen de los ingredientes que tienes disponibles.
                            La inteligencia artificial identificará los ingredientes
                            encontrados y los seleccionará por ti.
                        </p>

                        <div className="file-upload">
                            <label
                                htmlFor="imagen-ingredientes"
                                className="custom-file-btn"
                            >
                                Seleccionar imagen
                            </label>

                            <input
                                id="imagen-ingredientes"
                                type="file"
                                accept="image/*"
                                onChange={manejarImagen}
                            />

                            <span className="nombre-archivo">
                                {imagen ? imagen.name : "Ninguna imagen seleccionada"}
                            </span>
                        </div>

                        <button
                            className="btn-analizar"
                            onClick={analizarImagen}
                            disabled={cargandoIA}
                        >
                            {cargandoIA ? "Analizando..." : "Analizar imagen"}
                        </button>
                    </div>

                    <div className="buscador-ingredientes">
                        <input
                            type="text"
                            placeholder="Buscar ingrediente..."
                            value={busquedaIngrediente}
                            onChange={(e) => setBusquedaIngrediente(e.target.value)}
                        />
                    </div>

                    <div className="ingredientes-info">
                        <span>
                            Ingredientes seleccionados: {ingredientesSeleccionados.length}
                        </span>
                    </div>

                    <h3 className="subtitulo-ingredientes">
                        Ingredientes disponibles
                    </h3>

                    <p>
                        Selecciona los ingredientes que tienes disponibles
                    </p>

                    <div className="ingredientes-lista">
                        {ingredientesFiltrados.map((ingrediente) => (
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

                <main className="recetas-container">
                    <section className="hero-recetas">
                        <h2>Recetas encontradas</h2>

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
                                    <h3>{receta.titulo}</h3>

                                    <p>{receta.descripcion}</p>

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
                                            Coincidencias: {receta.coincidencias}
                                        </span>

                                        <Link to={`/detalle/${receta.id}`}>
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