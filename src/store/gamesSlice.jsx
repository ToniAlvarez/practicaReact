import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllGames } from "../services/api";  

export const fetchGamesThunk = createAsyncThunk(
  "games/fetchGames",
  async () => {
    return await fetchAllGames();  
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    gamesList: [],
    favoritos: JSON.parse(localStorage.getItem("favoritos")) || [], // Cargar favoritos desde localStorage
    status: "idle",
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      const game = action.payload;
      if (!state.favoritos.some((fav) => fav.id === game.id)) {
        state.favoritos.push(game);
        localStorage.setItem("favoritos", JSON.stringify(state.favoritos)); 
      }
    },
    removeFavorite: (state, action) => {
      state.favoritos = state.favoritos.filter((game) => game.id !== action.payload);
      localStorage.setItem("favoritos", JSON.stringify(state.favoritos)); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGamesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.gamesList = action.payload;  
      })
      .addCase(fetchGamesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// 🔹 Exporta las acciones correctamente
export const { addFavorite, removeFavorite } = gamesSlice.actions;
export default gamesSlice.reducer;
