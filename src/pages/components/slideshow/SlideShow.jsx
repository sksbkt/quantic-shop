import React from "react";
import Style from "./SlideShow.module.scss";
import PropTypes from "prop-types";
function SlideShow({ slides, slideIndex }) {
    return <React.Fragment>
        {
            <div className={Style.slideShowContainer}>
                {/* <div className={Style.mask}> */}
                <div
                    className={Style.sliderShowMovingBgContainer}
                    style={{ width: slides.length * 1000, left: -slideIndex * 1000 - 500 }}
                >

                    {slides.map((slide, index) =>
                        <div key={index} className={Style.mainSlideBackGroundImg} >
                            <img src={slide.bg} className={Style.imgBg} />
                        </div>
                    )}
                </div>
                <div
                    className={Style.sliderShowMovingContainer}
                    style={{ width: slides.length * 1000, left: -slideIndex * 1000 - 500 }}
                >

                    {slides.map((slide, index) =>
                        <div key={index} className={Style.mainSlideBackGroundImg} >
                            <img src={slide.fore} className={Style.imgFore} />
                        </div>
                    )}
                </div>
                {/* </div> */}
            </div>
        }
    </React.Fragment>;
}

SlideShow.propTypes = {};

export default SlideShow;
