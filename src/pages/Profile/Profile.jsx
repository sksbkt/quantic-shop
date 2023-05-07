import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectUser } from "../../Redux/Slices/UserSlice";
import Login from "../Auth/Login";

function Profile() {
    const user = useSelector(selectUser);
    useEffect(() => {
        console.log(user);
        return () => {
        };
    }, [user]);

    return (
        <>
            {user ?
                <h1>profile</h1> :
                // <Outlet />
                <Login />
            }
        </>
    );
}

export default Profile;
