import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Atividades from "../pages/Detalhes";
import Detalhes from "../pages/Detalhes";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:nome" element={<Detalhes />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
