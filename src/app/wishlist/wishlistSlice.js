import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      var isThere = false;
      state.map((item) => {
        if (item.id == action.payload.id) isThere = true;
      });
      if (!isThere) state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      console.log("remove wishlist is working");
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
