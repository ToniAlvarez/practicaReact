// src/components/Searchbar.jsx
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    console.log("Buscando:", query);
  };

  return (
    <form className="flex items-center bg-gray-800 px-4 py-2 rounded-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar juegos..."
        value={query}
        onChange={handleChange}
        className="bg-transparent text-white placeholder-gray-400 outline-none w-48"
      />
      <button
        type="submit"
        className="ml-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
