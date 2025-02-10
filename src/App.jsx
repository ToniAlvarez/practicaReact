import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Videojuegos from "./components/pages/Videojuegos";
import GameDetail from "./components/pages/GameDetail";
import Navbar from "./components/Navbar";
import PopularGamesSlider from "./components/Slider";

const AppContent = () => {
  const location = useLocation(); // Detecta la ruta actual

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Muestra el slider solo en la página de inicio */}
      {location.pathname === "/" && <PopularGamesSlider />}

      <Routes>
        <Route path="/" element={<PopularGamesSlider />} />
        <Route path="/videojuegos" element={<Videojuegos />} />
        <Route path="/game/:id" element={<GameDetail />} />
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
