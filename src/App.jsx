// src/App.jsx
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Videojuegos from "./components/pages/Videojuegos";
import GameDetail from "./components/pages/GameDetail";
import Navbar from "./components/Navbar";
import PopularGamesSlider from "./components/Slider";
import GenreGames from "./components/pages/GenreGames";
import Favoritos from "./components/pages/Favoritos";
import Eventos from "./components/pages/Eventos"; 

const AppContent = () => {
  const location = useLocation(); // Detecta la ruta actual

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<PopularGamesSlider />} />
        <Route path="/videojuegos" element={<Videojuegos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/genre/:id" element={<GenreGames />} />
        <Route path="/eventos" element={<Eventos />} />

      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
