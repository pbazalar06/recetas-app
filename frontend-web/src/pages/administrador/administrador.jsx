import "./Admin.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
    const [nombreIngrediente, setNombreIngrediente] = useState("");
    const [mostrarReceta, setMostrarReceta] = useState(false);
    const [mostrarIngrediente, setMostrarIngrediente] = useState(false);
    const [ingredientes, setIngredientes] = useState([]);
    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
    const [titulo, setTitulo] = useState("");

    const [descripcion, setDescripcion] = useState("");

    const [imagenLink, setImagenLink] = useState("");

    const [preparacion, setPreparacion] = useState("");
    const [recetas,setRecetas]=useState([]);

    const [recetaEditar,setRecetaEditar]=useState(null);
    const obtenerRecetas=async()=>{

        try{

            const response=await axios.get(
                "http://localhost:8080/recetas"
            );

            setRecetas(response.data);

        }

        catch(error){

            console.log(error);

        }

    }
    const guardarIngrediente = async () => {

         if(nombreIngrediente.trim() === ""){
                alert("Ingrese un ingrediente");
                return;
            }

         console.log("Botón presionado");

        try{

            await axios.post(
                "http://localhost:8080/ingredientes",
                {
                    nombre:nombreIngrediente
                }
            );

            alert("Ingrediente agregado");

            setNombreIngrediente("");

            setMostrarIngrediente(false);

        }

        catch(error){

            console.log(error);

            alert("El ingrediente ya existe.");

        }

    }
const guardarReceta = async () => {

    if(titulo.trim()==""){
        alert("Ingrese un título");
        return;
    }

    if(descripcion.trim()==""){
        alert("Ingrese una descripción");
        return;
    }

    if(imagenLink.trim()==""){
        alert("Ingrese una imagen");
        return;
    }

    if(preparacion.trim()==""){
        alert("Ingrese la preparación");
        return;
    }

    if(ingredientesSeleccionados.length==0){
        alert("Seleccione al menos un ingrediente");
        return;
    }

    const receta = {

        titulo,

        descripcion,

        imagenLink,

        preparacion,

        ingredientes: ingredientesSeleccionados.map(id => ({
            id: id
        }))

    };

    try{

        await axios.post(
            "http://localhost:8080/recetas",
            receta
        );

        alert("Receta agregada");

        setTitulo("");
        setDescripcion("");
        setImagenLink("");
        setPreparacion("");
        setIngredientesSeleccionados([]);

        setMostrarReceta(false);

    }

    catch(error){

        console.log(error);

        if(error.response){

            alert("La receta ya existe");

        }

        else{

            alert("Error al agregar receta");

        }

    }

}
const actualizarReceta = async () => {

    const receta = {

        titulo,

        descripcion,

        imagenLink,

        preparacion,

        ingredientes: ingredientesSeleccionados.map(id => ({
            id: id
        }))

    };

    try{

        await axios.put(

            "http://localhost:8080/recetas/" + recetaEditar.id,

            receta

        );

        alert("Receta actualizada");

        obtenerRecetas();

        setMostrarReceta(false);

        setRecetaEditar(null);

    }

    catch(error){

        console.log(error);

        alert("Error al actualizar");

    }

}

useEffect(()=>{

    obtenerIngredientes();

    obtenerRecetas();

},[]);
const obtenerIngredientes = async () => {

    try{

        const response = await axios.get(
            "http://localhost:8080/ingredientes"
        );

        setIngredientes(response.data);

    }

    catch(error){

        console.log(error);

    }

}

const manejarIngrediente = (id) => {

    if (ingredientesSeleccionados.includes(id)) {

        setIngredientesSeleccionados(
            ingredientesSeleccionados.filter(
                ingredienteId => ingredienteId !== id
            )
        );

    } else {

        setIngredientesSeleccionados([
            ...ingredientesSeleccionados,
            id
        ]);

    }
console.log(ingredientesSeleccionados);
}
    return (
        <div className="admin-container">

            <nav className="admin-navbar">

                <h1 className="admin-logo">
                    FastDishesAI
                </h1>

                <div className="admin-nav-links">

                    <Link to="/inicio">
                        Inicio
                    </Link>

                    <Link to="/recetas">
                        Recetas
                    </Link>



                    <Link to="/">
                        Cerrar sesión
                    </Link>

                </div>

            </nav>

            <section className="admin-hero">

                <div className="admin-hero-content">

                    <span className="admin-badge">
                        Panel de Administración
                    </span>

                    <h2>
                        Gestiona las recetas e ingredientes
                    </h2>

                    <p>
                        Administra la información de FastDishesAI.
                        Agrega recetas, ingredientes y mantén
                        actualizada la base de datos.
                    </p>

                    <div className="admin-buttons">

                        <button
                            className="admin-btn-primary"
                            onClick={() => {

                                setRecetaEditar(null);

                                setTitulo("");

                                setDescripcion("");

                                setImagenLink("");

                                setPreparacion("");

                                setIngredientesSeleccionados([]);

                                setMostrarReceta(true);

                            }}
                        >
                            Agregar Receta
                        </button>

                        <button
                            className="admin-btn-secondary"
                            onClick={() => setMostrarIngrediente(true)}
                        >
                            Agregar Ingrediente
                        </button>

                    </div>

                </div>

                <div className="admin-image">

                    <img
                        src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop"
                        alt="Administrador"
                    />

                </div>

            </section>

            {
            mostrarIngrediente && (

            <div className="modal-fondo">

                <div className="modal-admin">

                    <h2>Agregar Ingrediente</h2>

                    <input
                    type="text"
                    placeholder="Nombre del ingrediente"
                    value={nombreIngrediente}
                    onChange={(e)=>setNombreIngrediente(e.target.value)}
                    />

                    <div className="modal-botones">

                        <button
                            onClick={() => setMostrarIngrediente(false)}
                        >
                            Cancelar
                        </button>

                        <button
                        onClick={guardarIngrediente}>
                        Guardar
                        </button>

                    </div>

                </div>

            </div>

            )
            }

            {
            mostrarReceta && (

            <div className="modal-fondo">

                <div className="modal-admin modal-grande">

                    <h2>

                    {
                    recetaEditar
                    ?
                    "Editar Receta"
                    :
                    "Agregar Receta"
                    }

                    </h2>

                    <input
                        type="text"
                        placeholder="Título"
                        value={titulo}
                        onChange={(e)=>setTitulo(e.target.value)}
                    />

                    <textarea
                        placeholder="Descripción"
                        value={descripcion}
                        onChange={(e)=>setDescripcion(e.target.value)}
                    ></textarea>

                    <input
                        type="text"
                        placeholder="URL de la imagen"
                        value={imagenLink}
                        onChange={(e)=>setImagenLink(e.target.value)}
                    />

                    <textarea
                        placeholder="Preparación"
                        value={preparacion}
                        onChange={(e)=>setPreparacion(e.target.value)}
                    ></textarea>

                    <h3>Ingredientes</h3>

                    <div className="ingredientes-check">

                       <div className="ingredientes-check">

                       {
                       ingredientes.map((ingrediente)=>(

                       <label key={ingrediente.id}>

                       <input
                           type="checkbox"
                           checked={ingredientesSeleccionados.includes(ingrediente.id)}
                           onChange={() => manejarIngrediente(ingrediente.id)}
                       />

                       {ingrediente.nombre}

                       </label>

                       ))
                       }

                       </div>

                    </div>

                    <div className="modal-botones">

                        <button
                            onClick={() => setMostrarReceta(false)}
                        >
                            Cancelar
                        </button>

                        <button
                        onClick={
                            recetaEditar
                            ?
                            actualizarReceta
                            :
                            guardarReceta
                        }
                        >

                        {
                            recetaEditar
                            ?
                            "Actualizar"
                            :
                            "Guardar"
                        }

                        </button>

                    </div>

                </div>

            </div>

            )
            }

            <section className="admin-cards">

                <div className="admin-card">

                    <h3>"Recetas"</h3>

                    <p>
                        Crear, editar y eliminar recetas.
                    </p>

                </div>

                <div className="admin-card">

                    <h3> "Ingredientes"</h3>

                    <p>
                        Gestiona todos los ingredientes.
                    </p>

                </div>

                <div className="admin-card">

                    <h3> "Control"</h3>

                    <p>
                        Mantén organizada la base de datos.
                    </p>

                </div>

            </section>



            <section className="admin-actions">


            <section className="admin-lista">

            <h2>

            Recetas Registradas

            </h2>

            <div className="admin-cards">

            {

            recetas.map((receta)=>(

            <div
            className="admin-card"
            key={receta.id}
            >

            <h3>

            {receta.titulo}

            </h3>

            <p>

            {receta.descripcion}

            </p>

           <button
           onClick={()=>{

               setRecetaEditar(receta);

               setTitulo(receta.titulo);

               setDescripcion(receta.descripcion);

               setImagenLink(receta.imagenLink);

               setPreparacion(receta.preparacion);

               setIngredientesSeleccionados(
                   receta.ingredientes.map(i=>i.id)
               );

               setMostrarReceta(true);

           }}
           >
           Editar
           </button>

            </div>

            ))

            }

            </div>

            </section>
                <div className="admin-cards">


                </div>

            </section>

        </div>
    );
}

export default Admin;