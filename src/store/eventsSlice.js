// src/store/eventsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { events } from "../services/eventsService";

const initialState = {
  eventsList: events,
  userEvents: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    joinEvent: (state, action) => {
      if (!state.userEvents.includes(action.payload)) {
        state.userEvents.push(action.payload);
      }
    },
    leaveEvent: (state, action) => {
      state.userEvents = state.userEvents.filter(id => id !== action.payload);
    },
  },
});

export const { joinEvent, leaveEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
