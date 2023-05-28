import React from "react";
import Style from './Footer.module.scss';
import { ReactComponent as Fcb } from '../../Public/fcb.svg'
import { ReactComponent as Mlb } from '../../Public/MLB.svg'
import { ReactComponent as Nba } from '../../Public/NBA.svg'
import { ReactComponent as Nfl } from '../../Public/NFL.svg'
import { ReactComponent as T1 } from '../../Public/T1.svg'

import { ReactComponent as Nike } from '../../Public/nike.svg'
import { ReactComponent as Location } from "../../Public/location.svg";


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
                    <th>Sports</th>
                    <li>Football</li>
                    <li>Baseball</li>
                    <li>Basketball</li>
                    <li>E-sports</li>
                    <li>Motor sports</li>
                </ul>
                <ul>
                    <th>Everyday</th>
                    <li>Running</li>
                    <li>Sneakers</li>
                    <li>Allstars</li>
                    <li>Fashion</li>
                </ul>
                <ul>
                    <th>Kids</th>
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
