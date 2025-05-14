import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const {nome} = useParams()
  const [pais, setPais] = useState([]);


  useEffect(() => {
    

    axios.get(`https://restcountries.com/v3.1/name/${nome}`)
      .then((res) => {
        setPais(res.data[0]);
      })

  }, []);



  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Atividade sugerida:</h1>
      <p className="text-lg">{pais.name?.common || 'Não encontrei o país'}</p>
      <p className="text-lg">{pais.capital || 'Não encontrei a capital'}</p>
      <img src={`${pais.flags?.svg}`} alt={`${pais.flags?.alt}`} className="w-96" /> 
    </div>
  );
}
