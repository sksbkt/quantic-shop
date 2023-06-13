import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Style from './HomeCmp.module.scss';
import cata1 from '/main_cata_1.png';
import cata2 from '/main_cata_3.png';
import cata3 from '/main_cata_2.png';

function GenderCateGory() {
    const [visible, setVisible] = useState(false);
    return <Parallax
        onProgressChange={(progress) => {
            (progress >= 0.3 && progress <= 0.77) ? setVisible(true) : setVisible(false)
        }}
        style={{ width: '100%' }}
    >
        <div className={`
    ${Style.cataGroups}
    ${visible ? Style.visible : Style.partiallyVisible}
    ${Style.transition4}
     `}>
            <div className={`
            ${Style.cataImageContainer}
             ${visible ? Style.saturated : Style.partiallyUnsaturated}
             `}>
                <p className={Style.titles}>Men</p>
                <div className={Style.shade} />
                <img src={cata1} />
            </div>
            <div className={`
            ${Style.cataImageContainer} 
            ${visible ? Style.saturated : Style.partiallyUnsaturated}
            `}>
                <p className={Style.titles}>Women</p>
                <div className={Style.shade} />
                <img src={cata2} />
            </div>
            <div className={`
            ${Style.cataImageContainer}
             ${visible ? Style.saturated : Style.partiallyUnsaturated}
             `}>
                <p className={Style.titles}>Kids</p>
                <div className={Style.shade} />
                <img src={cata3} />
            </div>
        </div>
    </Parallax>
}

export default GenderCateGory;
