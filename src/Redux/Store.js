import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./Slices/FilterSlice";

export const store = configureStore({
    reducer: {
        productFilter: filterSliceReducer
    }
})