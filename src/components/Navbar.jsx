import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center relative">
      <Link to="/" className="text-white text-2xl font-bold">
        GameApp
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/videojuegos" className="text-white">Videojuegos</Link>

        <div className="relative">
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="text-white text-3xl focus:outline-none"
      >
        <MdAccountCircle />
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg py-2 z-50">
          <Link 
            to="/favoritos" 
            className="block px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Mis Favoritos
          </Link>
          <Link 
            to="/eventos" 
            className="block px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Mis Eventos
          </Link>
        </div>
      )}
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
