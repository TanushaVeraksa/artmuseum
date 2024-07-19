import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artsReducer from "./reducers/ArtSlice";

const rootReducer = combineReducers({
    artsReducer: artsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']