import React, { useEffect, useState } from "react";

import OutsideAlerter from "../../hooks/useOutSideAlerter";
import { ReactComponent as ArrowUpIcon } from '../../../public/arrow-up-long-solid.svg'
import { ReactComponent as ArrowDownIcon } from '../../../public/arrow-down-long-solid.svg'
import { ReactComponent as FilterIcon } from '../../../public/filter-solid.svg'

// import { TEXT_STRINGS_EN } from '../../Localization/Language'

import style from "./Products.module.scss"



function Filter({ click }) {
    const [ascending, setAscending] = useState(false);
    const [listOpen, setListOpen] = useState(false);
    const [sortBy, setSortBy] = useState(0);
    const [availability, setAvailability] = useState(false);

    useEffect(() => {
        let link = `_sort=${sortBy}&_order=${ascending ? 'asc' : 'desc'}${availability ? `${'&productIsAvailable=true'}` : ''}`;
        click(link)
        return () => {
        };
    }, [sortBy, ascending, availability]);

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
                                                    <label htmlFor="SortSe">Sort by:</label>
                                                    <select id="SortSe" value={sortBy} onChange={(e) => {
                                                        setSortBy(e.currentTarget.value)
                                                    }}>
                                                        <option value={0}>Select one</option>
                                                        <option value={'productName'}>Name</option>
                                                        <option value={'productPrice'}>Price</option>
                                                        <option value={'productRating'}>Rating</option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <label htmlFor="availabilityCb">Availability:</label>
                                                    <input id="availabilityCb" type="checkbox" checked={availability} onChange={(e) => setAvailability(!availability)} />
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
                }
                } >
                {/* <div className={style.az}>
                    <p>A</p>
                    <p>Z</p>
                </div> */}
                {
                    ascending ?
                        (<ArrowUpIcon className={style.icon} />) :
                        (<ArrowDownIcon className={style.icon} />)
                }
                {/* <FontAwesomeIcon icon={ascending ? faArrowUp : faArrowDown} className={style.icon} /> */}
            </a>
        </div>


    </>
}

export default Filter;