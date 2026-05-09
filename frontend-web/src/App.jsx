import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Recetas from "./pages/Recetas/Recetas";
import DetallesRecetas from "./pages/DetallesRecetas/DetallesRecetas";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/recetas/:id" element={<DetallesRecetas />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;