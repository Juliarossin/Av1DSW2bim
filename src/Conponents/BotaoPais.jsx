import { useFavoritos } from '../FavoritosContext';

function BotaoPais({ nome }) {
  const { adicionarFavorito, removerFavorito, estaFavoritado } = useFavoritos();

  const favorito = estaFavoritado(nome);

  const alternarFavorito = () => {
    if (favorito) {
      removerFavorito(nome);
    } else {
      adicionarFavorito(nome);
    }
  };

  return (
    <button onClick={alternarFavorito} className="p-2 border rounded">
      {nome} {favorito ? '❤️' : '🤍'}
    </button>
  );
}

export default BotaoPais;
