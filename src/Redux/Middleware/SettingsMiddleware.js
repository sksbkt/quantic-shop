import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

const SettingsListenMiddleWare = createListenerMiddleware()
SettingsListenMiddleWare.startListening(
    {
        matcher: isAnyOf(
            // themeChange,
        )
        , effect: (action, listenApi) => {
            listenApi.cancelActiveListeners();
            console.log(action.type);
        }
    }
);
export default SettingsListenMiddleWare.middleware;