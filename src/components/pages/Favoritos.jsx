import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeFavorite } from '../../store/gamesSlice';

const Favoritos = () => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.games.favoritos);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoritos")) || [];
    savedFavorites.forEach(game => dispatch({ type: "games/addFavorite", payload: game }));
  }, [dispatch]);

  // Función para eliminar un favorito y actualizar localStorage
  const handleRemoveFavorite = (gameId) => {
    dispatch(removeFavorite(gameId));
    const updatedFavorites = favoritos.filter(game => game.id !== gameId);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-white mb-6">Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes juegos favoritos.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favoritos.map((game) => (
            <div key={game.id} className="p-4 bg-gray-800 rounded-lg">
              <h2 className="text-lg font-bold">{game.name}</h2>
              <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover rounded-lg" />
              <button onClick={() => handleRemoveFavorite(game.id)} className="mt-2 bg-red-500 px-4 py-2 rounded">
                Quitar de Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
