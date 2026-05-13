import "./Recetas.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { obtenerRecetas } from "../../services/recetasService";

function Recetas() {

    const [recetas, setRecetas] = useState([]);

    useEffect(() => {

        cargarRecetas();

    }, []);

    const cargarRecetas = async () => {

        try {

            const data = await obtenerRecetas();

            setRecetas(data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="recetas-page">

            <nav className="recetas-navbar">

                <h1>FastDishesAI</h1>

                <div>

                    <Link to="/inicio">Inicio</Link>

                    <Link to="/detalle">Detalles</Link>

                    <Link to="/">Cerrar sesión</Link>

                </div>

            </nav>

            <section className="hero-recetas">

                <div>

                    <span className="hero-badge">
                        Recetas Inteligentes
                    </span>

                    <h2>
                        Encuentra recetas deliciosas con IA
                    </h2>

                    <p>
                        Explora recetas rápidas, modernas y personalizadas
                        usando los ingredientes disponibles en casa.
                    </p>

                </div>

            </section>

            <section className="buscador-section">

                <input
                    type="text"
                    placeholder="Buscar recetas..."
                />

            </section>

            <section className="cards-section">

                {recetas.map((receta) => (

                    <div className="receta-card" key={receta.id}>

                        <img
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
                            alt=""
                        />

                        <div className="card-content">

                            <h3>{receta.titulo}</h3>

                            <p>{receta.descripcion}</p>

                            <div className="card-footer">

                                <span>⏱ 30 min</span>

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

        </div>
    );
}

export default Recetas;