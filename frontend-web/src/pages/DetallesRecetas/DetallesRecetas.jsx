import "./DetallesRecetas.css";
import { Link } from "react-router-dom";

function DetallesRecetas() {

    return (

        <div className="detalle-container">

            <nav className="detalle-navbar">

                <h1>FastDishesAI</h1>

                <div>

                    <Link to="/inicio">Inicio</Link>

                    <Link to="/recetas">Recetas</Link>

                </div>

            </nav>

            <section className="detalle-hero">

                <div className="detalle-imagen">

                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
                        alt=""
                    />

                </div>

                <div className="detalle-info">

                    <span className="detalle-badge">
                        Receta destacada
                    </span>

                    <h2>Pizza Italiana</h2>

                    <p className="detalle-descripcion">

                        Una deliciosa pizza italiana preparada con ingredientes frescos,
                        salsa artesanal y queso derretido.

                    </p>

                    <div className="detalle-datos">

                        <div className="dato-card">

                            <h3>⏱ Tiempo</h3>

                            <p>30 min</p>

                        </div>

                        <div className="dato-card">

                            <h3>🔥 Calorías</h3>

                            <p>520 kcal</p>

                        </div>

                        <div className="dato-card">

                            <h3>🍽 Porciones</h3>

                            <p>2 personas</p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="contenido-receta">

                <div className="ingredientes">

                    <h3>Ingredientes</h3>

                    <ul>

                        <li>🍅 Salsa de tomate</li>

                        <li>🧀 Queso mozzarella</li>

                        <li>🍞 Masa para pizza</li>

                        <li>🌿 Orégano</li>

                        <li>🥓 Pepperoni</li>

                    </ul>

                </div>

                <div className="preparacion">

                    <h3>Preparación</h3>

                    <ol>

                        <li>
                            Extender la masa sobre una bandeja para horno.
                        </li>

                        <li>
                            Agregar salsa de tomate y distribuir uniformemente.
                        </li>

                        <li>
                            Añadir queso mozzarella y pepperoni.
                        </li>

                        <li>
                            Hornear durante 20 minutos a temperatura media.
                        </li>

                        <li>
                            Servir caliente y decorar con orégano.
                        </li>

                    </ol>

                </div>

            </section>

        </div>
    );
}

export default DetallesRecetas;