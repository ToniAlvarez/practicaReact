// src/components/AllGamesGrid.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesThunk } from '../store/gamesSlice';

const AllGamesGrid = () => {
  const dispatch = useDispatch();
  const { gamesList, status } = useSelector((state) => state.games);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGamesThunk());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Cargando...</div>;
  if (status === 'failed') return <div>Error al cargar los juegos.</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {gamesList.map((game) => (
        <div key={game.id} className="p-4 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-bold">{game.name}</h2>
          <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default AllGamesGrid;
