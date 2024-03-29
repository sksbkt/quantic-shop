import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as Location } from "/src/public/location.svg";
import { ReactComponent as Search } from "/src/public/Search.svg";
import { ReactComponent as Card } from "/src/public/Card.svg";
import { ReactComponent as Hamburger } from "/src/public/Hamburger.svg";
import { ReactComponent as ArrowDown } from "/src/public/arrow-down-rounded.svg";
import { ReactComponent as Avatar } from "/src/public/avatar.svg";

import Style from './Header.module.scss'
import OutsideAlerter from "../../hooks/useOutSideAlerter";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../Redux/Slices/UserSlice";
import { selectCard } from "../../Redux/Slices/CardSlice";

import useInput from "../../hooks/useInput";
import Notification from "../components/notification/notifications";
import Notifications from "../components/notification/notifications";
import LinkCustom from "../../class/LinkCustom";
import SvgBackground from "../components/svgBackground/SvgBackgroud";

function Header() {
    const [navMenu, setNavMenu] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const hamburgerButton = useRef(null);
    const profileMenuButton = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector(selectUser);
    const shoppingCard = useSelector(selectCard);
    const dispatch = useDispatch();

    const [storeUser, setStoreUser, resetUser, userAttr] = useInput('userName', '');


    return <div
        className={Style.headerContainer}
    >
        <div className={Style.content}>
            <OutsideAlerter onClickOutSide={() => setNavMenu(false)} excludeRef={hamburgerButton}>
                <div className={`${Style.hamburgerMenu} ${navMenu ? Style.hamburgerMenuVisible : Style.hamburgerMenuInvisible}`}>
                    <Link to={'./'}>Home</Link>
                    <Link to={'./products'}>Products</Link>
                    <a>Blog</a>
                    <a>Features</a>
                    <a>Contact</a>
                </div>
            </OutsideAlerter>
            <div className={Style.headerText}>
                <div className={Style.rowResponsive}>
                    <a
                        className={Style.hamburgerButton}
                        ref={hamburgerButton}
                        onClick={() => {
                            setNavMenu(!navMenu);
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
                    <LinkCustom
                        to={'/'}
                        location={location.pathname}
                    >Home</LinkCustom>
                    <LinkCustom
                        to={'/products'}
                        location={location.pathname}
                    >Products</LinkCustom>
                    <LinkCustom
                        to={'/blog'}
                        location={location.pathname}
                    >Blog</LinkCustom>
                    <LinkCustom
                        to={'/features'}
                        location={location.pathname}
                    >Features</LinkCustom>
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
                            <Link
                                to='/profile/shoppingcard'
                                className={Style.iconBtnTransparent}>
                                <Card className={Style.iconBtnTransparent} />
                                {
                                    shoppingCard.totalCount > 0 ?
                                        <Notifications Number={shoppingCard.totalCount} /> : <></>
                                }
                            </Link>
                            <div className={Style.profileMenuContainer}>
                                <OutsideAlerter onClickOutSide={() => {
                                    setProfileMenuOpen(false);
                                }} excludeRef={profileMenuButton}>
                                    <div
                                        className={`${profileMenuOpen ? Style.profileMenuVisible : Style.profileMenuInvisible}`}
                                        ref={profileMenuButton}
                                    >
                                        <a
                                            onClick={() => {
                                                if (!profileMenuOpen) {
                                                    setProfileMenuOpen(true);
                                                }
                                            }}
                                            className={Style.userHeader}
                                        >
                                            <div>

                                                <p>{user.userName}</p>
                                                {profileMenuOpen ? <p className={Style.headerSm}>profile</p> : <></>}

                                            </div>
                                            <Avatar className={Style.avatar} />
                                            <ArrowDown className={Style.downIcon} />
                                        </a>
                                        {profileMenuOpen ? <>

                                            <ul className={Style.profileMenuList}>
                                                <li className={Style.profileMenuItem}>
                                                    <Link to={'/profile/shoppingcard'} >Shopping Card
                                                        {shoppingCard.totalCount > 0 ?
                                                            <Notification Number={shoppingCard.totalCount} />
                                                            : <></>}
                                                    </Link>
                                                </li>
                                                <li className={Style.profileMenuItem}>
                                                    <Link>Purchase history</Link>
                                                </li>
                                                <li className={Style.profileMenuItem}>
                                                    <Link>Profile</Link>
                                                </li>
                                                <li className={Style.profileMenuItem}>
                                                    <Link
                                                        className={Style.cautionText}
                                                        onClick={() => {
                                                            resetUser();
                                                            dispatch(logout());
                                                        }
                                                        }>
                                                        Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </> : <></>
                                        }
                                    </div>
                                </OutsideAlerter>
                            </div>
                        </>

                    }
                </div>

            </div>
        </div>
        <SvgBackground style={Style.svgBackground} />
    </div >;
}

export default Header;
