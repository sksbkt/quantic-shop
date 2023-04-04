import React, { useState } from "react";
import SvgBackground from "../../Public/SvgBackgroud";
import { ReactComponent as Location } from "../../../public/location.svg";
import { ReactComponent as Search } from "../../../public/Search.svg";
import { ReactComponent as Cart } from "../../../public/Cart.svg";
import { ReactComponent as Hamburger } from "../../../public/Hamburger.svg";

import Style from './Header.module.scss'

function Header() {
    const [menu, setMenu] = useState('');

    return <div className={Style.container}>
        <div className={Style.content}>
            <div className={Style.headerText}>
                <div className={Style.rowResponsive}>
                    <a onClick={() => {
                        console.log('CLICK');
                        setMenu(Style.navigationVisible);
                    }}>
                        <Hamburger className={Style.hamburgerIcon} />
                    </a>
                    <h2>Store</h2>
                    <div className={Style.navigationElement}>
                        <Location className={Style.navIcon} />
                        <p>
                            Tehran
                        </p>
                    </div>
                </div>
                <div className={Style.hamburgerMenu}>
                    <div className={`${Style.navigation} ${menu}`}>
                        <a>Products</a>
                        <a>Blog</a>
                        <a>Features</a>
                        <a>Contact</a>
                    </div>
                </div>
                <div className={Style.row}>

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
        </div>
        <SvgBackground style={Style.svgBackground} />
    </div>;
}

export default Header;
