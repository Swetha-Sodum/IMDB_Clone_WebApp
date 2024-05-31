import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.push(action.payload);
    },
    removeFromWishlist(state, action) {
      return state.filter((movie) => movie.id !== action.payload?.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = WatchlistSlice.actions;
export default WatchlistSlice.reducer;
