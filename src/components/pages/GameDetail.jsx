// src/pages/GameDetail.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamesThunk } from '../../store/gamesSlice';

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gamesList, status } = useSelector((state) => state.games);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGamesThunk());
    }
  }, [status, dispatch]);

  const game = gamesList.find((game) => game.id === parseInt(id));
  if (!game) return <div>Cargando...</div>;

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-indigo-950 mb-6">{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="w-full h-[400px] object-cover rounded-lg mb-4 shadow-lg" />
      <p className="text-gray-200 mb-4">{game.description_raw}</p>
    </div>
  );
};

export default GameDetail;
