import { createSlice } from "@reduxjs/toolkit";

export const filmsSlice = createSlice({
    name: "movies",
    initialState: {
        moviesDatas: null,
    },
    reducers: {
        setPopulateFilmsData: (state, { payload }) => {
            state.moviesDatas = payload;
        },
        setActualFilmsData: (state, { payload }) => {
            state.moviesDatas = payload;
        },
        getSearchedFilmsData: (state, { payload }) => {
            state.moviesDatas = payload;
        },
    },
});

export const { setPopulateFilmsData, setActualFilmsData, getSearchedFilmsData } = filmsSlice.actions;
export default filmsSlice.reducer;
