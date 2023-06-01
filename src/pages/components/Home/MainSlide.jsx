import React from "react";

import Style from "./HomeCmp.module.scss";

import { ReactComponent as Nike } from '/public/nike.svg'
import { ReactComponent as Jordan } from '/public/jordan.svg'


import { getRandomNumberInRange } from "../../../Helper/HelperFunctions";
import SlideShow from "./SlideShow";

function MainSlide({ imgList }) {
    return <div className={Style.mainSlide}>
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
        <SlideShow slides={[
            {
                bg: "/public/main_slide_bg_1.png",
                fore: "/public/main_slide_1.png"
            },
            {
                bg: "/public/main_slide_bg_1.png",
                fore: "/public/main_slide_2.png"
            },
        ]} />
    </div>;
}


export default MainSlide;