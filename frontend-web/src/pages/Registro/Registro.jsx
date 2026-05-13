import "./Registro.css";
import { Link } from "react-router-dom";

function Registro() {

    return (

        <div className="registro-container">

            <div className="registro-overlay"></div>

            <div className="registro-box">

                <div className="registro-left">

                    <span className="registro-badge">
                        Bienvenido a FastDishesAI
                    </span>

                    <h1>
                        Crea tu cuenta y descubre recetas inteligentes
                    </h1>

                    <p>
                        Encuentra platos increíbles usando ingredientes disponibles
                        y tecnología de inteligencia artificial.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop"
                        alt=""
                    />

                </div>

                <div className="registro-right">

                    <h2>Crear Cuenta</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Nombre completo"
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                        />

                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                        />

                        <button type="submit">
                            Registrarse
                        </button>

                    </form>

                    <span className="login-link">

                        ¿Ya tienes cuenta?
                        <Link to="/"> Iniciar sesión</Link>

                    </span>

                </div>

            </div>

        </div>
    );
}

export default Registro;