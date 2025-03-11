import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../services/api"; 
import AllGamesGrid from "../AllGamesGrid"; 

const GenreGames = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenreGames = async () => {
        setLoading(true);
        
        console.log("Fetching games for genre:", id);  // 🔍 Depuración
      
        const data = await fetchFromApi("/games", { genres: id });
      
        setGames(data?.results || []);
        setLoading(false);
      };
      

    fetchGenreGames();
  }, [id]);

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-indigo-400 mb-6">Juegos del Género</h1>
      {loading ? <p>Cargando juegos...</p> : <AllGamesGrid games={games} />}
    </div>
  );
};

export default GenreGames;
