import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const {nome} = useParams()

  console.log(nome)
  const [pais, setPais] = useState([]);

  console.log(pais)

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${nome}`)
      .then((res) => {
        setPais(res.data[0]);
      })
      
  }, [nome]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Atividade sugerida:</h1>
      <p className="text-lg">{pais.name.common}</p>
      <p className="text-lg">{pais.capital}</p>

    </div>
  );
}
