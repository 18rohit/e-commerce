import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      var isThere = false;
      state.map((item) => {
        if (item.id == action.payload.id) isThere = true;
      });
      if (!isThere) state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
