import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectUser } from "../../Redux/Slices/UserSlice";
import Login from "../Auth/Login";

function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(user === null);
        if (user === null)
            navigate('/login');

        return () => {
        };
    }, []);

    return (
        <h1>profile</h1>
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
