import "./Inicio.css";
import { Link } from "react-router-dom";

function Inicio() {

    return (

        <div className="inicio-container">

            <nav className="navbar">

                <h1>FastDishesAI</h1>

                <div className="nav-links">

                    <Link to="/inicio">Inicio</Link>

                    <Link to="/recetas">Recetas</Link>

                    <Link to="/">Cerrar sesión</Link>

                </div>

            </nav>

            <section className="hero">

                <div className="hero-content">

                    <span className="badge">
                        Usa Inteligencia Artificial para ayudarte a cocinar
                    </span>

                    <h2>
                        Descubre recetas increíbles con los ingredientes que tienes
                    </h2>

                    <p>
                        FastDishesAI encuentra recetas rápidas y deliciosas según los ingredientes que tengas.
                        Además, usa IA para reconocer ingredientes automáticamente desde imágenes y recomendarte las mejores recetas al instante.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/recetas">
                            <button className="primary-btn">
                                Explorar recetas
                            </button>
                        </Link>

                    </div>

                </div>

                <div className="hero-image">

                    <img
                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop"
                        alt=""
                    />

                </div>

            </section>

            <section className="features">

                <div className="feature-card">

                    <h3>Recetas Inteligentes</h3>

                    <p>
                        Encuentra recetas basadas en los ingredientes disponibles.
                    </p>

                </div>

                <div className="feature-card">

                    <h3>Reconocimiento IA</h3>

                    <p>
                        Sube una imágen para detectar ingredientes automáticamente.
                    </p>

                </div>

                <div className="feature-card">

                    <h3>Resultados rápidos</h3>

                    <p>
                        Obtén recomendaciones instantáneas y fáciles de preparar.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Inicio;