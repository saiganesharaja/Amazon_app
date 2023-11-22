import { configureStore } from "@reduxjs/toolkit"
    
import  ProductReducer from "./Component/Home";
export const Store = configureStore({
  reducer: {
    Amazon:ProductReducer,
  },
});