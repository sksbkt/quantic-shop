import React, { useEffect, useState } from "react";
import Style from './SlideShow.module.scss';

function SliderNavigation({ slides, currentSlide }) {
    const [selectedSlide, setSelectedSlide] = useState(0);
    useEffect(() => {
        currentSlide(selectedSlide);
        return () => {
        };
    }, [selectedSlide]);
    return <div
        className={Style.sliderNavigationContainer}

    >
        <div
            className={Style.sliderNavigationBtnContainer}
        >

            <a
                onClick={() => {
                    if (selectedSlide <= 0) {
                        setSelectedSlide(slides.length - 1);
                    }
                    else {
                        setSelectedSlide(prev => prev - 1);
                    }
                }
                }
            >&lt;</a>
            <a
                onClick={() => {
                    if (selectedSlide >= slides.length - 1) {
                        setSelectedSlide(0);
                    }
                    else {

                        setSelectedSlide(prev => prev + 1);
                    }
                }
                }
            >&gt;</a>
        </div>
        <div className={Style.circlesContainer}>
            {slides.map((item, index) => {
                if (selectedSlide == index) {
                    return (<div key={index} className={Style.circleSelected}></div>)
                }
                else {
                    return (<div key={index} className={Style.circle}></div>)
                }
            }
            )}
        </div>
    </div>;
}

export default SliderNavigation;
