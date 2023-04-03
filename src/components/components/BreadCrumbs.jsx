import React from "react";
import { useLocation } from "react-router-dom";

function BreadCrumbs() {
    const location = useLocation();
    console.log(location);
    return <div>BreadCrumbs</div>;
}

export default BreadCrumbs;
