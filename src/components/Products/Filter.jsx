import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import style from "./Products.module.scss"

function Filter() {
    const [ascending, setAscending] = useState(null);



    return <a onClick={() => { }}>
        <a className={style.smBtn} role="button" >
            <div className={style.az}>
                <p>A</p>
                <p>Z</p>
            </div>
            <FontAwesomeIcon icon={faSortUp} className={style.icon} />
        </a>
    </a>;
}

export default Filter;
