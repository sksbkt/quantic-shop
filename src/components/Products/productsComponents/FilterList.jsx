import React, { useEffect, useRef, useState } from "react";
import style from "../Products.module.scss"
import { ReactComponent as FilterIcon } from '../../../../public/filter-solid.svg'
import OutsideAlerter from "../../../hooks/useOutSideAlerter";

function FilterList() {
    const [listOpen, setListOpen] = useState(false);
    return (
        <OutsideAlerter onClickOutSide={() => { setListOpen(!listOpen) }}>

            <a className={`${style.btnSm} ${!listOpen ? style.btn : ''}`} onClick={() => {

                if (!listOpen) {
                    setListOpen(!listOpen);
                }
            }}>
                {!listOpen ?
                    (
                        <>
                            <p>
                                Filter
                            </p>
                            <FilterIcon className={style.icon} />
                        </>
                    ) : (
                        <>
                            <p>Sort by price:</p> <input type="checkbox" />
                        </>
                    )}

            </a>
        </OutsideAlerter>
    )
}

export default FilterList;
