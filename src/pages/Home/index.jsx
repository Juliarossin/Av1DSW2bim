import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [paises, setPaises] = useState([]);

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
        {paises.map((pais) => (
          <li
            key={pais.cca3}
            className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-xl transition"
          >
            <Link
              to={`/detalhes/${pais.name.common}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {pais.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
