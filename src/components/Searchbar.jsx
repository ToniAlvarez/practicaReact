// src/components/SearchBar.js
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => setSearchQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    console.log("Buscando:", searchQuery);
  };

  return (
    <form className="flex items-center bg-gray-800 px-4 py-2 rounded-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={searchQuery}
        onChange={handleChange}
        className="bg-transparent text-white placeholder-gray-400 outline-none w-48"
      />
      <button type="submit" className="ml-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
