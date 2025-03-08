// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">GameApp</Link>
      <div className="flex items-center space-x-4">
        <Link to="/videojuegos" className="text-white">Videojuegos</Link>
        <Link to="/favoritos" className="text-white">Mis Favoritos</Link>
        <Link to="/eventos" className="text-white">Mis Eventos</Link>
        <Link to="/perfil" className="text-white text-3xl">
          <FaUserCircle />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
