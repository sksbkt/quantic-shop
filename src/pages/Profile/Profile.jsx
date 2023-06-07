import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectUser } from "../../Redux/Slices/UserSlice";
import Login from "../Auth/Login";
import Style from './Profile.module.scss';
function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const location = useLocation();



    function content() {
        if (location.pathname.includes('/shoppingcard')) {
            return <Outlet />
        } else {
            return <Link to="/" className={Style.profileBtn}>hello</Link>
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
