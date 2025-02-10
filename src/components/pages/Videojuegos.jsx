// src/pages/Videojuegos.jsx
import AllGamesGrid from "../AllGamesGrid";

const Videojuegos = () => {
  return (
    <div className="min-h-screen bg-slate-400 text-white flex flex-col items-center py-8">
      <h1 className="text-5xl font-extrabold text-indigo-950 mb-8 text-center">Videojuegos</h1>
      <div className="w-full max-w-screen-xl px-6">
        <AllGamesGrid />
      </div>
    </div>
  );
};

export default Videojuegos;
