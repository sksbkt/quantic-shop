import React, { useEffect, useState } from "react";

import Style from "./SlideShow.module.scss";

import { ReactComponent as Nike } from '/public/nike.svg'
import { ReactComponent as Jordan } from '/public/jordan.svg'


import { getRandomNumberInRange } from "../../../Helper/HelperFunctions";
import SlideShow from "./SlideShow";
import SliderNavigation from "./SliderNavigation";

function MainSlide({ imgList }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {

        return () => {
        };
    }, []);

    const slides = [
        {
            bg: "/public/main_slide_bg_1.png",
            fore: "/public/main_slide_1.png",
            brand: "nike"
        },
        {
            bg: "/public/main_slide_bg_1.png",
            fore: "/public/main_slide_2.png",
            brand: "nike"
        },
        {
            bg: "/public/main_slide_bg_1.png",
            fore: "/public/main_slide_2.png",
            brand: "nike"
        },
    ];

    return <div className={Style.mainSliderContainer}>

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
                        src={`/public/shoe_${getRandomNumberInRange(1, 4)}.png`}
                    />
                </a>
                <a
                    className={Style.mainSlidePreviewCircle}
                >
                    <img
                        src={`/public/shoe_${getRandomNumberInRange(1, 4)}.png`}
                    />
                </a>
                <a
                    className={Style.mainSlidePreviewCircle}
                >
                    <img
                        src={`/public/shoe_${getRandomNumberInRange(1, 4)}.png`}
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