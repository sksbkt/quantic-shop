import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./Slices/FilterSlice";
import userSliceReducer from './Slices/UserSlice';
import shoppingCardReducer from './Slices/CardSlice'
import AuthListenMiddleWare from "./Middleware/AuthMiddleware";
import SettingsMiddleware from "./Middleware/SettingsMiddleware";
import CardMiddleware from "./Middleware/CardMiddleware";
export const store =
    configureStore({
        reducer: {
            productFilter: filterSliceReducer,
            userReducer: userSliceReducer,
            shoppingCard: shoppingCardReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .prepend(
                [
                    AuthListenMiddleWare,
                    SettingsMiddleware,
                    CardMiddleware
                ])
    });