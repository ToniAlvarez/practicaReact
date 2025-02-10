// src/pages/GameDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../../services/api";

const GameDetail = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGameDetails = async () => {
      const gameData = await fetchGameDetails(id);
      setGame(gameData);
      setLoading(false);
    };

    loadGameDetails();
  }, [id]);

  if (loading) return <div className="text-gray-100 text-center py-8">Cargando...</div>;

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-indigo-950 mb-6">{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="w-full h-[400px] object-cover rounded-lg mb-4 shadow-lg" />
      
      <p className="text-gray-200 mb-4">{game.description_raw}</p>

      <div className="mt-4 space-y-2">
        <p className="text-gray-300"><strong>Géneros:</strong> {game.genres.map(g => g.name).join(", ")}</p>
        <p className="text-gray-300"><strong>Fecha de lanzamiento:</strong> {game.released}</p>
        <p className="text-gray-300"><strong>Plataformas:</strong> {game.platforms.map(p => p.platform.name).join(", ")}</p>
        <p className="text-gray-300"><strong>Rating:</strong> ⭐ {game.rating} / 5</p>
      </div>
    </div>
  );
};

export default GameDetail;
