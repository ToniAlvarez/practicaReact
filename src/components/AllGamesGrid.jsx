import { Link } from "react-router-dom";

const AllGamesGrid = ({ games }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game.id} className="p-4 bg-gray-800 rounded-lg">
            <Link to={`/game/${game.id}`} className="block">
              <h2 className="text-lg font-bold text-indigo-400 hover:underline">{game.name}</h2>
              <img 
                src={game.background_image} 
                alt={game.name} 
                className="w-full h-48 object-cover rounded-lg mt-2" 
              />
            </Link>
          </div>
        ))
      ) : (
        <p>No hay juegos disponibles.</p>
      )}
    </div>
  );
};

export default AllGamesGrid;
