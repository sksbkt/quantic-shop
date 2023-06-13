import React, { useState } from "react";

import Style from "./Home.module.scss";
import MainSlide from "../components/slideshow/MainSlide";
import ParallaxView from "../components/Home/ParallaxView";
import { Parallax } from "react-scroll-parallax";
import GenderCateGory from "../components/Home/GenderCateGory";
import UsageCategory from "../components/Home/UsageCategory";
import TopSellers from "../components/Home/TopSellers";

function Home() {
    const [visible, setVisible] = useState(false);

    return <div className={Style.mainContainer}>
        <MainSlide />
        <ParallaxView height={150}>
            <div className={Style.justDoItContainer}>
                <img src="/just_do_it.png" />
            </div>
        </ParallaxView>
        <GenderCateGory />
        {/* <UsageCategory /> */}
        <TopSellers />
        {/* <div className={Style.testDiv}></div> */}
    </div>;
}

export default Home;
