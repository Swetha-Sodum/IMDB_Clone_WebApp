import { configureStore } from "@reduxjs/toolkit";
import WatchlistSlice from "../slices/WatchlistSlice";

export const store = configureStore({
    reducer: {
        watchlist: WatchlistSlice
    }
})