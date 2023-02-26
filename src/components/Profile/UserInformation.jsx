import React from "react";
import { useParams } from "react-router-dom";

function UserInformation() {
    const { username } = useParams();
    return <div>Username: {username}</div>;
}

export default UserInformation;
