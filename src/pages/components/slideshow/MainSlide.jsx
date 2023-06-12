import React, { useEffect, useState } from "react";

import Style from "./SlideShow.module.scss";

import { ReactComponent as Nike } from '/src/public/nike.svg'
import { ReactComponent as Jordan } from '/src/public/Jordan.svg'


import { getRandomNumberInRange } from "../../../Helper/HelperFunctions";
import SlideShow from "./SlideShow";
import SliderNavigation from "./SliderNavigation";
import AnimateComponent from "../inputComponents/AnimateComponent";

function MainSlide({ imgList }) {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            bg: "/src/public/main_slide_bg_1.png",
            fore: "/src/public/main_slide_1.png",
            brand: "nike",
            name: "Jordan Air 1 MID",
        },
        {
            bg: "/src/public/main_slide_bg_1.png",
            fore: "/src/public/main_slide_2.png",
            brand: "nike",
            name: "Stun master",
        },
        {
            bg: "/src/public/main_slide_bg_1.png",
            fore: "/src/public/main_slide_2.png",
            brand: "nike",
            name: "Sprinter",
        },
    ];

    return <div className={Style.mainSliderContainer}>
        <div className={Style.brandNameContainer}>
            <AnimateComponent animationDuration={500} trigger={slides[current].name}>
                <h3 className={Style.modelName}>
                    {slides[current].name}
                </h3>
            </AnimateComponent>
            <h4
                className={Style.brandName}
            >by {slides[current].brand}</h4>
        </div>

        <div className={Style.mainSlide}>
            <div
                className={Style.mainSlideBrandContainer}
            >
                <Nike />
                <Jordan />
            </div>


            <div className={Style.mainSlidePreviewContainer}>
                <a
                    className={Style.mainSlidePreviewCircle}
                >
                    <img
                        src={`/src/public/shoe_${getRandomNumberInRange(1, 4)}.png`}
                    />
                </a>
                <a
                    className={Style.mainSlidePreviewCircle}
                >
                    <img
                        src={`/src/public/shoe_${getRandomNumberInRange(1, 4)}.png`}
                    />
                </a>
                <a
                    className={Style.mainSlidePreviewCircle}
                >
                    <img
                        src={`/src/public/shoe_${getRandomNumberInRange(1, 4)}.png`}
                    />
                </a>

            </div>
            <SlideShow
                slides={slides}
                slideIndex={current}
            />
            <SliderNavigation
                slides={slides}
                currentSlide={(i) => {
                    setCurrent(i);
                }} />
        </div >
    </div>
}


export default MainSlide;