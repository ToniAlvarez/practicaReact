
import SearchBar from "./Searchbar"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-400">GameHub</h1>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-8">
          <Link to="/videojuegos" className="text-white hover:text-yellow-400 transition">Videojuegos</Link>
        </div>

        {/* Barra de Búsqueda */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
