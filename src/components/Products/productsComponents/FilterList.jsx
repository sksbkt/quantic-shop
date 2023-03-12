import React, { useEffect, useRef, useState } from "react";
import style from "../Products.module.scss"
import { ReactComponent as FilterIcon } from '../../../../public/filter-solid.svg'
import OutsideAlerter from "../../../hooks/useOutSideAlerter";

function FilterList({ filter }) {
    const [listOpen, setListOpen] = useState(false);
    const [byPrice, setbyPrice] = useState();
    const [ascending, setAscending] = useState();


    return (
        <OutsideAlerter onClickOutSide={() => {
            setListOpen(false)
        }}>

            <a className={!listOpen ? `${style.btnMd} ${style.btn}` : style.listHeader} onClick={() => {

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
                        <div className={style.filterList}>
                            <ul>
                                <li>
                                    <label htmlFor="priceCb">Sort by price:</label>
                                    <input id="priceCb" type="checkbox" />
                                </li>
                                <li>
                                    <label htmlFor="priceCb">Sort by price:</label>
                                    <input id="priceCb" type="checkbox" />
                                </li>
                                <li>
                                    <label htmlFor="priceCb">Sort by price:</label>
                                    <input id="priceCb" type="checkbox" />
                                </li>
                            </ul>
                        </div>
                    )}

            </a>
        </OutsideAlerter>
    )
}

export default FilterList;
