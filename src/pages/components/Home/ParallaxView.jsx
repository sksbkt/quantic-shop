import React, { useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import Style from './HomeCmp.module.scss';
function ParallaxView(props, { height, parentSpeed, speed }) {
    const { ref: parent } = useParallax({ speed: parentSpeed ?? 0 });
    const { ref: child } = useParallax({ speed: speed ? speed * -1 : -20 });
    const [visible, setVisible] = useState(false);

    return (
        <Parallax
            onProgressChange={(progress) => {
                (progress >= 0.2 && progress <= 0.6) ? setVisible(true) : setVisible(false)
            }}
            // onEnter={() => console.log('ENTERED')}
            // onExit={() => console.log('EXITED')}
            style={{ width: '100%' }}
        >
            <div
                style={{ height: height }}
                ref={parent}
                className={`
                ${Style.parallaxWdw} 
                ${visible ? Style.visible : Style.partiallyUnsaturated}
                ${visible ? '' : Style.blurry}
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
