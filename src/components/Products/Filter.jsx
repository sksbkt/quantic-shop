import React, { useState } from "react";

import OutsideAlerter from "../../hooks/useOutSideAlerter";
import { ReactComponent as ArrowUpIcon } from '../../../public/arrow-up-long-solid.svg'
import { ReactComponent as ArrowDownIcon } from '../../../public/arrow-down-long-solid.svg'
import { ReactComponent as FilterIcon } from '../../../public/filter-solid.svg'

// import { TEXT_STRINGS_EN } from '../../Localization/Language'

import style from "./Products.module.scss"



function Filter({ click }) {
    const [ascending, setAscending] = useState(true);
    const [listOpen, setListOpen] = useState(false);
    const [name, setName] = useState(false);
    const [price, setPrice] = useState(false);
    const [availability, setAvailability] = useState(false);
    const [rating, setRating] = useState(false);


    return <>
        <div className={style.row}>
            <OutsideAlerter onClickOutSide={() => {
                setListOpen(false)
            }}>

                <a className={!listOpen ? `${style.btnMd} ${style.btn}` : style.listHeader} onClick={() => {

                    if (!listOpen) {
                        setListOpen(!listOpen);
                    }
                }}>
                    <>
                        <div className={style.filterList}>
                            {
                                !listOpen ?
                                    (
                                        <>
                                            Filter
                                            <FilterIcon className={style.icon} />
                                        </>
                                    ) : (
                                        <div >
                                            <ul>
                                                <li>
                                                    <label htmlFor="nameCb">Name:</label>
                                                    <input id="nameCb" type="checkbox" checked={name} onChange={(e) => setName(!name)} />
                                                </li>
                                                <li>
                                                    <label htmlFor="priceCb">Price:</label>
                                                    <input id="priceCb" type="checkbox" checked={price} onChange={(e) => setPrice(!price)} />
                                                </li>
                                                <li>
                                                    <label htmlFor="availabilityCb">Availability:</label>
                                                    <input id="availabilityCb" type="checkbox" checked={availability} onChange={(e) => setAvailability(!availability)} />
                                                </li>
                                                <li>
                                                    <label htmlFor="RatingCb">Rating:</label>
                                                    <input id="RatingCb" type="checkbox" checked={rating} onChange={(e) => setRating(!rating)} />
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                        </div>
                    </>
                </a>
            </OutsideAlerter>
            <a className={`${style.btnSm} ${style.btn}`} role="button"
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
                {ascending ?
                    (<ArrowUpIcon className={style.icon} />) :
                    (<ArrowDownIcon className={style.icon} />)}
                {/* <FontAwesomeIcon icon={ascending ? faArrowUp : faArrowDown} className={style.icon} /> */}
            </a>
        </div>


    </>
}

export default Filter;