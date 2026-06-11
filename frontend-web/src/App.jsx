import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Inicio from "./pages/Inicio/Inicio";
import Recetas from "./pages/Recetas/Recetas";
import DetallesRecetas from "./pages/DetallesRecetas/DetallesRecetas";
import Admin from "./pages/administrador/administrador"
function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/registro" element={<Registro />} />

                <Route path="/inicio" element={<Inicio />} />

                <Route path="/recetas" element={<Recetas />} />

                <Route path="/detalle/:id" element={<DetallesRecetas />} />

                <Route path="/administrador" element={<Admin />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;