import { useFavoritos } from "../context/FavoritosContext";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Países Favoritados</h2>
      {favoritos.length === 0 ? (
        <p>Nenhum país favoritado.</p>
      ) : (
        <ul className="list-disc pl-6">
          {favoritos.map((pais) => (
            <li key={pais}>{pais}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
