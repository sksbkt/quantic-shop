import React, { useEffect, useState } from "react";

import OutsideAlerter from "../../hooks/useOutSideAlerter";
import { ReactComponent as ArrowUpIcon } from '../../../public/arrow-up-long-solid.svg'
import { ReactComponent as ArrowDownIcon } from '../../../public/arrow-down-long-solid.svg'
import { ReactComponent as FilterIcon } from '../../../public/filter-solid.svg'

// import { TEXT_STRINGS_EN } from '../../Localization/Language'

import style from "./Products.module.scss"
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/Slices/filterSlice";



function Filter(
    // { click }
) {
    //? redux tool kit
    //? getting filter from store
    const filter = useSelector((state) => state.productFilter.filter);
    //? we use dispatch for setting filter to store
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const [ascending, setAscending] = useState(false);
    const [listOpen, setListOpen] = useState(false);
    const [sortBy, setSortBy] = useState(searchParams.get('_sort') ?? '');
    const [availability, setAvailability] = useState(searchParams.get('productIsAvailable') == 'true' ? true : false);

    useEffect(() => {
        let link = `${sortBy.length > 0 ? `_sort=${sortBy}&_order=${ascending ? 'asc' : 'desc'}` : ''}${availability ? `${'&productIsAvailable=true'}` : ''}`;
        // click(link)
        //? setting filter to store while using dispatch and use setFilter action
        dispatch(setFilter(link));
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