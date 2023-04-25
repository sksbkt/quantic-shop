import React from "react";
import { Outlet, useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();

    return (
        <>
            <h1>{username} profile</h1>
            <Outlet />
        </>
    );
}

export default Profile;
