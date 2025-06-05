import { useFavoritos } from "../../context/FavoritosContext";
import { Link } from "react-router-dom";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Países Favoritos</h1>
      {favoritos.length === 0 ? (
        <p className="text-gray-500">Nenhum país foi favoritado ainda.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
          {favoritos.map((nome, index) => (
            <li key={index} className="bg-white p-4 rounded shadow text-center">
              <Link to={`/detalhes/${nome}`} className="text-blue-600 font-semibold hover:underline">
                {nome}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
