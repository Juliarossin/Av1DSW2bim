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

  // console.log(paises);
  return (
    <>
      <div>
        <h1>Lista de Países</h1>
        <ul>
          {paises.map((pais) => (
            <li key={pais.cca3}>
              <Link to={`/detalhes/${pais.name.common}`}>{pais.name.common}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
