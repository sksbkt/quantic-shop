import React from "react";

function SvgBackground({ style, children }) {
    return <div className={style}>
        <div >
            <svg viewBox="0 0 1599 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M760.5 282C295.04 246.655 58 440.167 -1.5 530V0H1599V164C1514 196.167 1228 317.5 760.5 282Z" fill="#E7F8FF" />
            </svg>
        </div>
        <div >
            <svg viewBox="0 0 1602 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M776.5 197C356.946 147.578 78.3333 313.167 -2 371.5V-3H1601.5V102.5C1499.33 132 1167 243 776.5 197Z" fill="#FFEAEA" />
            </svg>
        </div>
        {children}
    </div>;
}

export default SvgBackground;
