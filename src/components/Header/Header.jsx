import React from "react";
import SvgBackground from "../../Public/SvgBackgroud";

import Style from './Header.module.scss'

function Header() {
    return <div className={Style.container}>
        <div className={Style.content}>
            <div className={Style.headerText}>
                <h2>Store</h2>
                <div className={Style.navigation}>
                    <a>Tehran</a>
                    <a>Tehran</a>
                    <a>Tehran</a>
                    <a>Tehran</a>
                    <a>Tehran</a>
                </div>
            </div>
        </div>
        <SvgBackground style={Style.svgBackground} />
    </div>;
}

export default Header;
