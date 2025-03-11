import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesThunk } from "../../store/gamesSlice";
import AllGamesGrid from "../../components/AllGamesGrid";

const Videojuegos = () => {
  const dispatch = useDispatch();
  const { gamesList, status } = useSelector((state) => state.games);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGamesThunk());  
    }
  }, [status, dispatch]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      <h1 className="text-5xl font-extrabold text-white mb-8 text-center">Videojuegos</h1>
      <div className="w-full max-w-screen-xl px-6">
        {/* Muestra mensajes de carga o error */}
        {status === "loading" && <p>Cargando juegos...</p>}
        {status === "failed" && <p>Error al cargar juegos.</p>}
        
        {/* Solo renderiza AllGamesGrid si los juegos están cargados */}
        {status === "succeeded" && <AllGamesGrid games={gamesList} />}
      </div>
    </div>
  );
};

export default Videojuegos;
