import React from "react";

import Style from "./Home.module.scss";
import MainSlide from "../components/slideshow/MainSlide";

function Home() {
    return <div className={Style.mainContainer}>
        <MainSlide />
    </div>;
}

export default Home;
