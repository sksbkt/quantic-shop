import React, { useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import Style from './HomeCmp.module.scss';
function ParallaxView(props) {
    const { ref: parent } = useParallax({ speed: props.parentSpeed ?? 0 });
    const { ref: child } = useParallax({ speed: props.speed ? props.speed * -1 : -20 });
    const [visible, setVisible] = useState(false);

    return (
        <Parallax
            onProgressChange={(progress) => {
                (progress >= 0.2 && progress <= 0.6) ? setVisible(true) : setVisible(false)
            }}
            onEnter={() => console.log('ENTERED')}
            style={{ width: '100%' }}
        >
            <div
                style={{ height: props.height }}
                ref={parent}
                className={`
                ${Style.parallaxWdw} 
                ${visible ? Style.visible : Style.invisible}
                ${Style.transition4}
                `}
            >

                <div
                    ref={child}
                >
                    {props.children}
                </div>
            </div>
        </Parallax>
    );
}

export default ParallaxView;
