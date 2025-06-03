import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavoritos } from "../../context/FavoritosContext"; // ajuste o caminho se necessário

export default function Home() {
  const [paises, setPaises] = useState([]);
  const { adicionarFavorito, removerFavorito, estaFavoritado } = useFavoritos();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setPaises(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Lista de Países
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {paises.map((pais) => {
          const nome = pais.name.common;
          return (
            <li
              key={pais.cca3}
              className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-xl transition"
            >
              <div className="flex justify-center items-center gap-2">
                <Link
                  to={`/detalhes/${nome}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {nome}
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // impede de abrir o link
                    estaFavoritado(nome)
                      ? removerFavorito(nome)
                      : adicionarFavorito(nome);
                  }}
                  className="text-xl"
                  title="Favoritar"
                >
                  {estaFavoritado(nome) ? "❤️" : "🤍"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
