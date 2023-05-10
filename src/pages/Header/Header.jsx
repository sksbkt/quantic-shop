import React, { useEffect, useRef, useState } from "react";
import SvgBackground from "../../Public/SvgBackgroud";
import { ReactComponent as Location } from "../../../public/location.svg";
import { ReactComponent as Search } from "../../../public/Search.svg";
import { ReactComponent as Cart } from "../../../public/Cart.svg";
import { ReactComponent as Hamburger } from "../../../public/Hamburger.svg";
import { ReactComponent as ArrowDown } from "../../../public/arrow-down-rounded.svg";

import Style from './Header.module.scss'
import OutsideAlerter from "../../hooks/useOutSideAlerter";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../Redux/Slices/UserSlice";
import useInput from "../../hooks/useInput";

function Header() {
    const [menu, setMenu] = useState(false);
    const hamburgerButton = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const [storeUser, setStoreUser, resetUser, userAttr] = useInput('userName', '');

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


                <a className={Style.iconBtnTransparent}>
                    <Search />
                </a>
                <div className={Style.row}>
                    {!user ? <>

                        <Link
                            className={Style.btnMd}
                            to='/login'
                            state={{ from: location.pathname }}
                        >Sign in</Link>
                    </>
                        : <>
                            <a className={Style.iconBtnTransparent}>
                                <Cart className={Style.iconBtnTransparent} />
                            </a>
                            <Link className={Style.btnIconTxt}
                                onClick={() => {
                                    resetUser();
                                    dispatch(logout());
                                }
                                }>
                                <p>{user.userName}</p>

                                <ArrowDown className={Style.icon} />
                            </Link>
                        </>

                    }
                </div>

            </div>
        </div>
        <SvgBackground style={Style.svgBackground} />
    </div >;
}

export default Header;
