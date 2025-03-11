const API_URL = "https://api.rawg.io/api/games";  
const API_KEY = "abedc4b6103648bda6daaafceef2d414";  

export const fetchFromApi = async (endpoint, params = {}) => {
  const url = new URL(endpoint, API_URL); 
  
  url.searchParams.append("key", API_KEY); 

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data from API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;  
  }
};

// Función para obtener los juegos populares
export const fetchPopularGames = async () => {
  const params = {
    ordering: "-added", 
    page_size: 10,      
  };
  const data = await fetchFromApi("/games", params);
  return data ? data.results : []; 
};

export const fetchAllGames = async () => {
  try {
    const url = `${API_URL}?key=${API_KEY}&ordering=-rating&page_size=10`;
    console.log("Fetching games from URL:", url); 

    const response = await fetch(url);
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

// Obtener detalles de un juego específico
export const fetchGameDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Error al obtener detalles del juego");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};