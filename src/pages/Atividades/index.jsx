// src/pages/Atividade/index.jsx
import { useEffect, useState } from "react";

const Atividade = () => {
  const [atividade, setAtividade] = useState("");

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((data) => setAtividade(data.activity))
      .catch((err) => console.error("Erro ao buscar atividade:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Atividade aleatória:</h1>
      <p className="text-lg">{atividade || "Carregando..."}</p>
    </div>
  );
};

export default Atividade;
