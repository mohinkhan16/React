import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Feature/ProductSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;