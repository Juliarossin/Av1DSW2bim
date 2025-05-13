import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Atividades from "../pages/Atividades";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/Atividades">Atividades</Link>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Atividades" element={<Atividades />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
