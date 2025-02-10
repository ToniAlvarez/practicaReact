// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-yellow-400">GameHub</h1>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-yellow-400 transition">Inicio</Link>
          <Link to="/videojuegos" className="text-white hover:text-yellow-400 transition">Videojuegos</Link>
        </div>
        
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;