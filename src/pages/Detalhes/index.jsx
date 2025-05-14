import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Detalhes() {
  const { nome } = useParams();
  const [pais, setPais] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${nome}`)
      .then((res) => {
        setPais(res.data[0]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-8 border border-indigo-200">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Detalhes do País
        </h1>

        <div className="flex flex-col items-center">
          <img
            src={pais.flags?.svg}
            alt={pais.flags?.alt || `Bandeira de ${pais.name?.common}`}
            className="w-60 h-auto rounded-lg shadow-md mb-4 border border-gray-200"
          />

          <div className="w-full text-center space-y-2">
            <p className="text-xl font-semibold text-gray-700">
              Nome do país:{" "}
              <span className="text-indigo-600">
                {pais.name?.common || "Não encontrei o país"}
              </span>
            </p>
            <p className="text-lg text-gray-600">
              Capital:{" "}
              <span className="text-indigo-500 font-medium">
                {pais.capital || "Não encontrei a capital"}
              </span>
            </p>
            <p className="text-lg text-gray-600">
              População:{" "}
              <span className="text-indigo-500 font-medium">
                {pais.population?.toLocaleString("pt-BR") || "Não encontrada"}
              </span>
            </p>
            <p className="text-lg text-gray-600">
              Continente:{" "}
              <span className="text-indigo-500 font-medium">
                {pais.continents?.[0] || "Não encontrado"}
              </span>
            </p>
          </div>

          {/* BOTÃO VOLTAR */}
          <Link to="/">
            <button className="mt-6 px-6 py-2 bg-blue-500 text-black rounded-full shadow hover:bg-indigo-600 transition">
              Voltar 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
