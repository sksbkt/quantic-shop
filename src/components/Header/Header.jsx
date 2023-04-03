import React from "react";
import SvgBackground from "../../Public/SvgBackgroud";
import { ReactComponent as Location } from "../../../public/location.svg";
import { ReactComponent as Search } from "../../../public/Search.svg";
import { ReactComponent as Cart } from "../../../public/Cart.svg";

import Style from './Header.module.scss'

function Header() {
    return <div className={Style.container}>
        <div className={Style.content}>
            <div className={Style.headerText}>
                <h2>Store</h2>
                <div className={Style.navigationElement}><Location className={Style.navIcon} />Tehran</div>
                <div className={Style.navigation}>
                    <a>Products</a>
                    <a>Blog</a>
                    <a>Features</a>
                    <a>Contact</a>
                </div>
                <a className={Style.iconBtn}>
                    <Search />
                </a>
                <a className={Style.iconBtn}>
                    <Cart className={Style.iconBtn} />
                </a>
                <div>
                    <a className={Style.btnMd}>Sign up</a>
                </div>
            </div>
        </div>
        <SvgBackground style={Style.svgBackground} />
    </div>;
}

export default Header;
