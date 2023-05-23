import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectUser } from "../../Redux/Slices/UserSlice";
import Login from "../Auth/Login";

function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const location = useLocation();



    function content() {
        if (location.pathname.includes('/shoppingcard')) {
            return <Outlet />
        } else {
            return <h1>profile</h1>
        }
    }
    return (
        <>
            {content()}
        </>
        // <>
        //     {
        //         user ?
        //             <>
        //                 <h1>profile</h1>
        //                 <Outlet />
        //             </>
        //             :
        //             <Login />
        //     }
        // </>
    );
}

export default Profile;
