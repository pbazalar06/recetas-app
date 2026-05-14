import "./DetallesRecetas.css";
import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { obtenerRecetas } from "../../services/recetasService";

function DetallesRecetas() {

    const { id } = useParams();

    const [receta, setReceta] = useState(null);

    useEffect(() => {

        cargarReceta();

    }, []);

    const cargarReceta = async () => {

        const data = await obtenerRecetas();

        const recetaEncontrada = data.find(r => r.id == id);

        setReceta(recetaEncontrada);

    };


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
                        src={receta?.imagenLink}
                        alt=""
                    />

                </div>

                <div className="detalle-info">

                    <span className="detalle-badge">
                        Receta destacada
                    </span>

                    <h2>{receta?.titulo}</h2>

                    <p className="detalle-descripcion">

                        {receta?.descripcion}

                    </p>

                    <div className="detalle-datos">

                        <div className="dato-card">

                            <h3>Disponibilidad</h3>

                            <p>todo el dia</p>

                        </div>

                        <div className="dato-card">



                        </div>

                        <div className="dato-card">

                            <h3>Presentación</h3>

                            <p>individual</p>

                        </div>

                    </div>

                </div>

            </section>

           <section className="contenido-receta">

               <div className="ingredientes">

                   <h3>Ingredientes</h3>

                   <ul>

                       {receta?.ingredientes.map((ingrediente) => (

                           <li key={ingrediente.id}>
                               {ingrediente.nombre}
                           </li>

                       ))}

                   </ul>

               </div>

               <div className="preparacion">
                   <h3>Preparación</h3>
                   {receta?.preparacion.split("\n").map((parrafo, index) => (
                       <p key={index} style={{ marginBottom: "15px", lineHeight: "1.6" }}>
                           {parrafo}
                       </p>
                   ))}
               </div>

           </section>

        </div>
    );
}

export default DetallesRecetas;