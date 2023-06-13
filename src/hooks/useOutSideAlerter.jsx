import React, { useRef, useEffect } from "react";

/**
 *? Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(onClickOutSide, ref, excludeRef) {
    useEffect(() => {
        /**
         *? Alert if clicked on outside of element
        */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (excludeRef == undefined)
                    onClickOutSide();
                else if (!excludeRef.current.contains(event.target))
                    onClickOutSide();
                // alert("You clicked outside of me!");
            }
        }
        //? Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 *? Component that alerts if you click outside of it
 * @param onClickOutSide is a function that will be triggered if an event of click happens outside the component
 * @param excludeRef is the reference that must not be counted as outside area
 */

export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(props.onClickOutSide, wrapperRef, props.excludeRef);

    return <div ref={wrapperRef}>{props.children}</div>;
}