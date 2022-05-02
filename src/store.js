import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/films/index";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});
