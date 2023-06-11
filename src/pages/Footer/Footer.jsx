import React from "react";
import Style from './Footer.module.scss';
import { ReactComponent as Fcb } from '/public/fcb.svg'
import { ReactComponent as Mlb } from '/public/MLB.svg'
import { ReactComponent as Nba } from '/public/NBA.svg'
import { ReactComponent as Nfl } from '/public/NFL.svg'
import { ReactComponent as T1 } from '/public/T1.svg'

import { ReactComponent as Nike } from '/public/nike.svg'
import { ReactComponent as Location } from "/public/location.svg";


function Footer() {
    return <React.Fragment>
        <div className={Style.footerContainer}>
            <h3>Some of our partners</h3>
            <div className={Style.brandsContainer}>
                <Fcb />
                <Mlb />
                <Nba />
                <Nfl />
                <T1 />
            </div>
            <div className={Style.titlesListContainer}>

                <ul>
                    <li>Sports</li>
                    <li>Football</li>
                    <li>Baseball</li>
                    <li>Basketball</li>
                    <li>E-sports</li>
                    <li>Motor sports</li>
                </ul>
                <ul>
                    <li>Everyday</li>
                    <li>Running</li>
                    <li>Sneakers</li>
                    <li>Allstars</li>
                    <li>Fashion</li>
                </ul>
                <ul>
                    <li>Kids</li>
                    <li>Slippers</li>
                    <li>Playground</li>
                </ul>
            </div>
        </div>
        <div className={Style.footerTail}>
            <Nike />
            <div className={Style.smGroup}>
                <Location />
                Tehran
            </div>
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
            <div className={Style.smGroup}>
                <p>Guides</p>
                <p>Terms of use</p>
                <p>Company Details</p>
                <p>Privacy & Cookie Policy</p>
                <p>Cookies settings</p>
            </div>
        </div>

    </React.Fragment>
}

export default Footer;
