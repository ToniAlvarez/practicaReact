const API_KEY = "abedc4b6103648bda6daaafceef2d414";
const API_URL = "https://api.rawg.io/api/games";

export const fetchGames = async () => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&ordering=-rating&page_size=10`);
    if (!response.ok) {
      throw new Error(`Error al obtener juegos: ${response.status}`);
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error al obtener juegos:", error);
    return []; 
  }
};
