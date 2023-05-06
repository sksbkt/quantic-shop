import React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import Style from '../Auth.module.scss'

import { ReactComponent as Reset } from '../../../../public/Reset.svg'

function Login() {
    return <>
        <BreadCrumbs />
        <form className={Style.authForm}>
            <div className={Style.formInputRow}>
                <label htmlFor="userName">User name:</label>
                <input
                    id="userName"
                    autoComplete="false"
                    alt="user name"
                    placeholder="Enter user name!"
                />
            </div>
            <div className={Style.formInputRow}>
                <label htmlFor="passWord">Password:</label>
                <input
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
                <a className={Style.btnMd}>Log in</a>
            </div>
        </form>
    </>
}

export default Login;