import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artsReducer from "./reducers/ArtSlice";
import favoritesReducer from "./reducers/FavoriteSlice";

const rootReducer = combineReducers({
    artsReducer: artsReducer,
    favoritesReducer: favoritesReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']