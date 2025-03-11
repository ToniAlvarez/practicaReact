import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import eventsReducer from "./eventsSlice";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    events: eventsReducer,
  },
});

export default store;