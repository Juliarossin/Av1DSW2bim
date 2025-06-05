import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favoritos from "../pages/Favorito/Favorito";
import Detalhes from "../pages/Detalhes"; // Corrigido para o caminho correto

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalhes/:nome" element={<Detalhes />} /> {/* Rota adicionada */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
