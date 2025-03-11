
const API_KEY = "abedc4b6103648bda6daaafceef2d414";
const BASE_URL = "https://api.rawg.io/api";

export const fetchPopularGames = async () => {
  try {

    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=10`
    );

    if (!response.ok) {
      throw new Error("Error fetching popular games");
    }

    const data = await response.json();

    console.log("API Response Data:", data);

    if (!data.results || data.results.length === 0) {
      throw new Error("No games found");
    }

    return data.results;

  } catch (error) {
    console.error("Error fetching popular games:", error);
    return [];
  }
};

export const searchGames = async (query) => {
  const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${query}`)
  const data = await response.json()
  return data.results
}

export const fetchGameDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
  const data = await response.json()
  return data
}

export const fetchGamesWithPagination = async (page = 1) => {
    try {
      const response = await fetch(
        `${BASE_URL}/games?ordering=-added&page_size=10&page=${page}&key=${API_KEY}`
      );
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error("Error fetching games:", error);
      return [];
    }
  };
