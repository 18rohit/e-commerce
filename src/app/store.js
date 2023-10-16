import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/cart/cartSlice";
import wishlistReducer from "../app/wishlist/wishlistSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
