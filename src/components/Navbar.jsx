// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-start items-center py-4 px-8">
        <h1 className="text-3xl font-bold text-gray-300 mr-10">TiendaJuegos</h1>

        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-gray-300 hover:text-teal-400 transition duration-300">Inicio</Link>
          <Link to="/videojuegos" className="text-gray-300 hover:text-teal-400 transition duration-300">Videojuegos</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
