import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Videojuegos from "./components/pages/Videojuegos";
import GameDetail from "./components/pages/GameDetail";
import Navbar from "./components/Navbar";
import PopularGamesSlider from "./components/Slider";

const AppContent = () => {
  const location = useLocation(); 

  return (
    <div className="min-h-screen bg-slate-400 text-white">
      <Navbar />

      {location.pathname === "/" && <PopularGamesSlider />}

      <Routes>
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
