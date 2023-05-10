import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { login, logout } from '../Slices/UserSlice'

//? /////////////////////////////////////////
//? Middleware
//? we observe triggered events here
//? /////////////////////////////////////////

const listenMiddleware = createListenerMiddleware();
listenMiddleware.startListening({
    matcher: isAnyOf(login, logout),
    // actionCreator: login,
    effect: (action, listenApi) => {

        //? can cancel other active lister instances
        listenApi.cancelActiveListeners();

        //? we can run async logic here
        //* dummy fetch call getUser()
        //* const data = getUser(action.payload.userId);

        //? do something according to type of action
        switch (action.type) {
            case login.type:
                localStorage.setItem('userName', JSON.stringify(action.payload.userName));
                console.log('User has logged in');
                break;
            case logout.type:
                localStorage.removeItem('userName');
                // localStorage.setItem('userName', action.payload.userName);
                console.log('User has logged out');
                break

            default:
                console.log('ACTION TYPE', action.type);
                break;
        }
    }

})
export default listenMiddleware;