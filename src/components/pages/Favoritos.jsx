// src/pages/Favoritos.jsx
import { useSelector } from 'react-redux';

const Favoritos = () => {
  const favoritos = useSelector((state) => state.games.favoritos);

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-indigo-950 mb-6">Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes juegos favoritos.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favoritos.map((game) => (
            <div key={game.id} className="p-4 bg-gray-800 rounded-lg">
              <h2 className="text-lg font-bold">{game.name}</h2>
              <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
