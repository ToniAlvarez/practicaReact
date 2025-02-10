import { useEffect, useState } from "react";
import { fetchAllGames } from "../services/api";
import { Link } from "react-router-dom";

const AllGamesGrid = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      const allGames = await fetchAllGames();
      setGames(allGames);
      setLoading(false);
    };
    loadGames();
  }, []);

  if (loading) return <div className="text-white text-center py-8">Cargando...</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Todos los Juegos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <img src={game.background_image || "/placeholder.svg"} alt={game.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl text-white font-semibold mt-2">{game.name}</h3>
            <p className="text-gray-400">⭐ {game.rating}</p>
            <p className="text-gray-500">{game.genres.map(g => g.name).join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGamesGrid;
