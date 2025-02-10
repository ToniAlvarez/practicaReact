const API_URL = "https://api.rawg.io/api/games";  // URL base de la API de RAWG
const API_KEY = "b52f494888cc42fb87e0ce2efc3dc482";  // Reemplaza esto con tu clave API, si es necesario

// Función genérica para hacer solicitudes a la API
const fetchFromApi = async (endpoint, params = {}) => {
  const url = new URL(endpoint, API_URL);  // Crea la URL completa
  url.searchParams.append("key", API_KEY);  // Si necesitas una clave API, la añadimos a la URL

  // Añadir parámetros adicionales a la URL
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
    return null;  // Si hay un error, retornamos null
  }
};

// Función para obtener los juegos populares
export const fetchPopularGames = async () => {
  const params = {
    ordering: "-added", // Ordenar por los más populares
    page_size: 10,      // Limitar a 10 juegos populares
  };
  const data = await fetchFromApi("/games", params);
  return data ? data.results : [];  // Si la respuesta tiene resultados, retornamos los juegos, si no, retornamos un array vacío
};

export const fetchAllGames = async () => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Error al obtener los juegos");
    }
    const data = await response.json();
    return data.results; // Devolvemos solo la lista de juegos
  } catch (error) {
    console.error("Error:", error);
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