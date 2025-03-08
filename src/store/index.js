// src/store/reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import gamesReducer from './gamesSlice';
import eventsReducer from './eventsSlice';

const rootReducer = combineReducers({
  games: gamesReducer,
  events: eventsReducer,
});

export default rootReducer;
