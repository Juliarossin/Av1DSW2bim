import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionarOuRemoverFavorito(item) {
    const existe = favoritos.find(f => f.key === item.key);
    if (existe) {
      setFavoritos(favoritos.filter(f => f.key !== item.key));
    } else {
      setFavoritos([...favoritos, item]);
    }
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarOuRemoverFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}
