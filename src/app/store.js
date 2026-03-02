import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../Slices/loaderSlice.js";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
