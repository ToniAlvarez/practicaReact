// src/store/gamesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGames } from "../services/gamesService";

export const fetchGamesThunk = createAsyncThunk(
  "games/fetchGames",
  async () => {
    const response = await fetchGames();
    return response;
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    gamesList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
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

export default gamesSlice.reducer;
