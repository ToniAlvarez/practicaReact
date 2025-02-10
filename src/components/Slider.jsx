import { useEffect, useState } from "react";
import { fetchPopularGames } from "../services/api-peliculas"; // Esta es la función adaptada

const PopularGamesSlider = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen visible

  useEffect(() => {
    const loadPopularGames = async () => {
      try {
        const popularGames = await fetchPopularGames();
        setGames(popularGames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular games:", error);
        setLoading(false);
      }
    };

    loadPopularGames();

    // Iniciar autoplay cuando el componente se monta
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 5000); // Cambia cada 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(id);
    };
  }, [games.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Juegos Populares</h2>

      {/* Contenedor del Slider */}
      <div className="relative w-full" style={{ height: "60vh" }}>
        {/* Imagen visible */}
        <div className="relative w-full h-full">
          <img
            src={games[currentIndex].background_image || "/placeholder.svg"}  // Usamos la propiedad `background_image` de RAWG
            alt={games[currentIndex].name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white text-2xl font-bold">{games[currentIndex].name}</h3>
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          Anterior
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          Siguiente
        </button>

        {/* Paginación */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {games.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularGamesSlider;
