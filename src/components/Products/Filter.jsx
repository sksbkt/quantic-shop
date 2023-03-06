import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import style from "./Products.module.scss"

function Filter({ click }) {
    const [ascending, setAscending] = useState(true);



    return (
        <a className={style.smBtn} role="button"
            onClick={() => {
                setAscending(!ascending)
                click(`_sort=productName&_order=${ascending ? 'asc' : 'desc'}`)
                // click(ascending ? 'asc' : 'desc')
            }
            } >
            <div className={style.az}>
                <p>A</p>
                <p>Z</p>
            </div>
            <FontAwesomeIcon icon={ascending ? faArrowUp : faArrowDown} className={style.icon} />
        </a>
    )

}

export default Filter;