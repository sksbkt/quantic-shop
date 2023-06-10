import React, { useState } from "react";

import Style from "./Home.module.scss";
import MainSlide from "../components/slideshow/MainSlide";
import ParallaxView from "../components/Home/ParallaxView";
import { Parallax } from "react-scroll-parallax";

function Home() {
    const [visible, setVisible] = useState(false);

    return <div className={Style.mainContainer}>
        <MainSlide />
        <ParallaxView height={100} >
            <div className={Style.justDoItContainer}>
                <img src="/public/just_do_it.png" />
            </div>
        </ParallaxView>
        <Parallax
            onProgressChange={(progress) => {
                (progress >= 0.3 && progress <= 0.77) ? setVisible(true) : setVisible(false)
            }}
            style={{ width: '100%', marginTop: 40 }}
        >
            <div className={`
            ${Style.cataGroups}
            ${visible ? Style.visible : Style.partiallyVisible}
            ${Style.transition4}
             `}>
                <div className={`${Style.cataImageContainer} ${visible ? Style.saturated : Style.partiallyUnsaturated}`}>
                    <p className={Style.titles}>Men</p>
                    <div className={Style.shade} />
                    <img src="/public/main_cata_1.png" />
                </div>
                <div className={`${Style.cataImageContainer} ${visible ? Style.saturated : Style.partiallyUnsaturated}`}>
                    <p className={Style.titles}>Women</p>
                    <div className={Style.shade} />
                    <img src="/public/main_cata_2.png" />
                </div>
                <div className={`${Style.cataImageContainer} ${visible ? Style.saturated : Style.partiallyUnsaturated}`}>
                    <p className={Style.titles}>Kids</p>
                    <div className={Style.shade} />
                    <img src="/public/main_cata_3.png" />
                </div>
            </div>
        </Parallax>
        <div className={Style.testDiv}></div>
    </div>;
}

export default Home;
