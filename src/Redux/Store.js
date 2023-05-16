import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./Slices/FilterSlice";
import userSliceReducer from './Slices/UserSlice'
import AuthListenMiddleWare from "./Middleware/AuthMiddleware";
import SettingsMiddleware from "./Middleware/SettingsMiddleware";
export const store =
    configureStore({
        reducer: {
            productFilter: filterSliceReducer,
            userReducer: userSliceReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend([AuthListenMiddleWare, SettingsMiddleware])
    });