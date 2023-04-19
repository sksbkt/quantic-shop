import React, { useEffect, useRef, useState } from "react";
import SvgBackground from "../../Public/SvgBackgroud";
import { ReactComponent as Location } from "../../../public/location.svg";
import { ReactComponent as Search } from "../../../public/Search.svg";
import { ReactComponent as Cart } from "../../../public/Cart.svg";
import { ReactComponent as Hamburger } from "../../../public/Hamburger.svg";

import Style from './Header.module.scss'
import OutsideAlerter from "../../hooks/useOutSideAlerter";
import { Link } from "react-router-dom";

function Header() {
    const [menu, setMenu] = useState(false);
    const hamburgerButton = useRef(null);


    useEffect(() => {


        return () => {
        };
    }, [menu]);


    return <div className={Style.headerContainer}>
        <div className={Style.content}>
            <OutsideAlerter onClickOutSide={() => setMenu(false)} excludeRef={hamburgerButton}>
                <div className={`${Style.hamburgerMenu} ${menu ? Style.hamburgerMenuVisible : Style.hamburgerMenuInvisible}`}>
                    <Link to={'./'}>Home</Link>
                    <Link to={'./products'}>Products</Link>
                    <a>Blog</a>
                    <a>Features</a>
                    <a>Contact</a>
                </div>
            </OutsideAlerter>
            <div className={Style.headerText}>
                <div className={Style.rowResponsive}>
                    <a ref={hamburgerButton} onClick={() => {
                        console.log('CLICK');
                        setMenu(!menu);
                    }}>
                        <Hamburger className={Style.hamburgerIcon} />
                    </a>
                    <h2 className={Style.logo}>Store
                        <div className={Style.navigationElement}>
                            <Location className={Style.navIcon} />
                            <p>
                                Tehran
                            </p>
                        </div>
                    </h2>
                </div>

                <div className={Style.navigation}>
                    <Link to={'./'}>Home</Link>
                    <Link to={'./products'}>Products</Link>
                    <a>Blog</a>
                    <a>Features</a>
                    <a>Contact</a>
                </div>

                <div className={Style.row}>

                    <a className={Style.iconBtn}>
                        <Search />
                    </a>
                    <a className={Style.iconBtn}>
                        <Cart className={Style.iconBtn} />
                    </a>
                    <a className={Style.txtBtnMd}>Log in</a>
                    <div>

                        <a className={Style.btnMd}>Sign up</a>
                    </div>
                </div>

            </div>
        </div>
        <SvgBackground style={Style.svgBackground} />
    </div >;
}

export default Header;
