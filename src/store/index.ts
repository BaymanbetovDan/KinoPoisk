import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FilmSlice from "./FilmSlice/FilmSlice";


const rootReducer = combineReducers({
    films:  FilmSlice
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type addDispatch = typeof store.dispatch

export default store