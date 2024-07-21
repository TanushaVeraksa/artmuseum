import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArt } from "../../models/IArt";

interface FavoriteState {
  favorites: IArt[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    getFavorite(state, action: PayloadAction<IArt[]>) {
      state.favorites = action.payload;
    },
    addFavorite(state, action: PayloadAction<IArt>) {
      const findFavorite = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findFavorite < 0) {
        state.favorites.push(action.payload);
      }
      localStorage.setItem("favoriteItems", JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<IArt>) {
      state.favorites = state.favorites.filter(
        (f) => f.id !== action.payload.id
      );
      localStorage.setItem("favoriteItems", JSON.stringify(state.favorites));
    },
    alphabetSortDes(state) {
      state.favorites = state.favorites.sort((a, b) =>
        a.title > b.title ? -1 : 1
      );
    },
    alphabetSortAsc(state) {
      state.favorites = state.favorites.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
    },
    dateSortDes(state) {
      state.favorites = state.favorites.sort((a, b) =>
        a.date_start > b.date_start ? -1 : 1
      );
    },
    dateSortAsc(state) {
      state.favorites = state.favorites.sort((a, b) =>
        a.date_start > b.date_start ? 1 : -1
      );
    },
  },
});

export default favoriteSlice.reducer;
