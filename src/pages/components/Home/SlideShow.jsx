import React from "react";
import Style from "./HomeCmp.module.scss";
import PropTypes from "prop-types";
function SlideShow({ slides }) {
    return <React.Fragment>
        {
            slides.map((slide, index) =>
                <div key={index} className={Style.mainSlideBackGroundImg} >
                    <div>
                        <img src={slide.bg} />
                    </div>
                    <div>
                        <img src={slide.fore} />
                    </div>
                </div>
            )}
    </React.Fragment>;
}

SlideShow.propTypes = {};

export default SlideShow;
