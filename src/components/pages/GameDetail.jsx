import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchGamesThunk } from "../../store/gamesSlice";
import { addFavorite, removeFavorite } from "../../store/gamesSlice";

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gamesList, status, favoritos } = useSelector((state) => state.games);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGamesThunk());
    }
  }, [status, dispatch]);

  const game = gamesList.find((game) => game.id === parseInt(id));
  if (!game) return <div className="text-center text-gray-200">Cargando...</div>;

  const isFavorite = favoritos.some((fav) => fav.id === game.id);

  const handleToggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      dispatch(removeFavorite(game.id));
      updatedFavorites = favoritos.filter((fav) => fav.id !== game.id);
    } else {
      dispatch(addFavorite(game));
      updatedFavorites = [...favoritos, game];
    }
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-indigo-400 mb-6">{game.name}</h1>
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-[400px] object-cover rounded-lg mb-4 shadow-lg"
      />

      <button
        onClick={handleToggleFavorite}
        className={`mt-4 px-4 py-2 rounded ${
          isFavorite ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isFavorite ? "Quitar de Favoritos" : "Añadir a Favoritos"}
      </button>

      {/* Descripción */}
      <p className="text-gray-300 mb-4">{game.description_raw}</p>

      {/* Géneros */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-indigo-400">Géneros:</h2>
        <div className="flex gap-2 mt-2">
          {game.genres?.map((genre) => (
            <Link
              key={genre.id}
              to={`/genre/${genre.id}`}
              className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Publisher */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-indigo-400">Publisher:</h2>
        {game.publishers?.length > 0 ? (
          <Link
            to={`/publisher/${game.publishers[0].id}`}
            className="text-lg text-indigo-300 hover:underline"
          >
            {game.publishers[0].name}
          </Link>
        ) : (
          <p className="text-gray-400">No disponible</p>
        )}
      </div>

      {/* Plataformas */}
      <div>
        <h2 className="text-2xl font-semibold text-indigo-400">Plataformas:</h2>
        <ul className="list-disc pl-6 mt-2">
          {game.platforms?.map((platform) => (
            <li key={platform.platform.id} className="text-gray-300">
              {platform.platform.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameDetail;
