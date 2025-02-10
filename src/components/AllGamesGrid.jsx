// src/components/AllGamesGrid.jsx
import { useEffect, useState } from "react";
import { fetchAllGames } from "../services/api";
import { Link } from "react-router-dom";

const AllGamesGrid = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const allGames = await fetchAllGames();
        setGames(allGames);
      } catch (err) {
        setError("Error al cargar los juegos");
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  if (loading) return <div className="text-teal-300 text-center py-8">Cargando...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <img 
              src={game.background_image || "/placeholder.svg"} 
              alt={game.name} 
              className="w-full h-40 object-cover rounded-lg" 
              loading="lazy"
            />
            <h3 className="text-xl text-teal-300 font-semibold mt-2">{game.name}</h3>
            <p className="text-gray-400">⭐ {game.rating}</p>
            <p className="text-gray-500">{game.genres.map(g => g.name).join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGamesGrid;
