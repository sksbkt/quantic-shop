import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import Style from '../Auth.module.scss'

import { ReactComponent as Reset } from '/Public/Reset.svg'
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../../Redux/Slices/UserSlice";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(selectUser);
    const location = useLocation();
    const state = location.state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [storeUser, setStoreUser, resetUser, userAttr] = useInput('userName', '');


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(login({
            userName: username,
            loggedIn: true
        }));
        if (state) {
            navigate(state.from);
        }
        else if (user !== null) {
            navigate('/profile');
        }
        return () => {
        };
        // setStoreUser(username);

    }


    useEffect(() => {
        //? Validations:WIP
        //? username
        if (username.length > 6)
            console.log('username is too big');
        return () => {
        };
    }, [username, password]);

    // useEffect(() => {
    //     console.log('FROM', from);
    //     if (from) {
    //         navigate(from);
    //     }
    //     else if (user !== null) {
    //         navigate('/profile');
    //     }
    //     return () => {
    //     };
    // }, [user]);

    return <>
        <BreadCrumbs />
        <form className={Style.authForm} onSubmit={(e) => handleSubmit(e)}>
            <div className={Style.formInputRow}>
                <label htmlFor="userName">User name:</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="userName"
                    autoComplete="false"
                    alt="user name"
                    placeholder="Enter user name!"
                />
            </div>
            <div className={Style.formInputRow}>
                <label htmlFor="passWord">Password:</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="passWord"
                    autoComplete="false"
                    alt="password"
                    placeholder="Enter password!"
                    type="password"
                />
            </div>
            <div className={Style.row}>
                <a className={Style.iconBtn}>
                    <Reset className={Style.icon} /></a>
                <button
                    className={Style.btnMd}
                    type="submit"
                // onClick={(e) => handleSubmit(e)}
                >Log in</button>
            </div>
        </form>
    </>
}

export default Login;