import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

    return (

        <div className="login-container">

            <div className="background-overlay"></div>

            <div className="login-box">

                <div className="logo-section">

                    <h1>FastDishesAI</h1>

                    <p>
                        Descubre recetas inteligentes con los ingredientes que tienes en casa
                    </p>

                </div>

                <form className="login-form">

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                    />

                    <button type="submit">
                        Ingresar
                    </button>

                </form>

                <div className="extra-options">

                    <span>
                        ¿No tienes cuenta?
                        <Link to="/registro"> Crear cuenta</Link>
                    </span>

                </div>

            </div>

        </div>
    );
}

export default Login;