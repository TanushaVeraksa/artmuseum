import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artsReducer from "./reducers/ArtsSlice";
import favoritesReducer from "./reducers/FavoriteSlice";
import artReducer from "./reducers/ArtSlice";

const rootReducer = combineReducers({
    artsReducer: artsReducer,
    favoritesReducer: favoritesReducer,
    artReducer: artReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']