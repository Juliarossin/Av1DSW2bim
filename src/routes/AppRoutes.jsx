import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favoritos from "../pages/Favorito/Favorito";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
