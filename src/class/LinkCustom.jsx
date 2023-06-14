import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";


function LinkCustom(props) {
    const location = props.location;
    const to = props.to;
    function linkContent() {
        if (location.includes(to)) {
            if (location == '/' || to != '/') {
                return <p>
                    {props.children}
                </p>;
            }
        }
        return <Link
            to={to}
        >
            {props.children}
        </Link>

    }
    return linkContent
        (
            location?.indexOf(to) > -1 && to != "/" ?
                // location == to ?
                <p>
                    {props.children}
                </p>
                : <Link
                    to={to}
                >
                    {props.children}
                </Link>
            // : <Link
            //     to={to}
            // >
            //     {props.children}
            // </Link>
        );
}

export default LinkCustom;
