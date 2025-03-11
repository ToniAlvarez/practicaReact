// src/components/PopularGamesSlider.jsx
import { useEffect, useState } from "react";
import { fetchPopularGames } from "../services/api-peliculas";

const PopularGamesSlider = () => {
  const [gameList, setGameList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadPopularGames = async () => {
      try {
        const popularGames = await fetchPopularGames();
        setGameList(popularGames);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching popular games:", error);
        setIsLoading(false);
      }
    };

    loadPopularGames();

    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % gameList.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [gameList.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % gameList.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + gameList.length) % gameList.length);
  };

  if (isLoading) {
    return <div className="text-white text-center py-8">Cargando...</div>;
  }

  return (
    <div className="relative container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Los juegos más vendidos</h1>

      <div className="relative w-full" style={{ height: "60vh" }}>
        <div className="relative w-full h-full">
          <img
            src={gameList[activeIndex].background_image || "/placeholder.svg"}
            alt={gameList[activeIndex].name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white text-2xl font-bold">{gameList[activeIndex].name}</h3>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        >
          Anterior
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        >
          Siguiente
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {gameList.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularGamesSlider;
