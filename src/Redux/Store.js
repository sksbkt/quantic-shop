import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./Slices/FilterSlice";
import userSliceReducer from './Slices/UserSlice'
import listenMiddleware from "./Middleware/AuthMiddleware";
export const store = configureStore({
    reducer: {
        productFilter: filterSliceReducer,
        userReducer: userSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenMiddleware.middleware)
})