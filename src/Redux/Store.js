import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./Slices/FilterSlice";
import userSliceReducer from './Slices/UserSlice'
export const store = configureStore({
    reducer: {
        productFilter: filterSliceReducer,
        userReducer: userSliceReducer
    }
})