import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (pais) => {
    setFavoritos((prev) => [...prev, pais]);
  };

  const removerFavorito = (pais) => {
    setFavoritos((prev) => prev.filter((item) => item !== pais));
  };

  const estaFavoritado = (pais) => favoritos.includes(pais);


  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito, estaFavoritado }}>
      {children}
    </FavoritosContext.Provider>
  );
}


export function useFavoritos() {
  return useContext(FavoritosContext);
}
