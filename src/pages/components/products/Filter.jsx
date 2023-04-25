import React, { useEffect, useState } from "react";

import OutsideAlerter from "../../../hooks/useOutSideAlerter";
import { ReactComponent as ArrowUpIcon } from '../../../../public/arrow-up-long-solid.svg'
import { ReactComponent as ArrowDownIcon } from '../../../../public/arrow-down-long-solid.svg'
import { ReactComponent as FilterIcon } from '../../../../public/filter-solid.svg'

// import { TEXT_STRINGS_EN } from '../../Localization/Language'

import Style from "./ProductsComponents.module.scss"
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setAscending } from "../../../redux/Slices/filterSlice";



function Filter(
    // { click }
) {
    //? redux tool kit
    //? getting filter from store
    const filter = useSelector((state) => state.productFilter.filter);
    //? getting ascending from store
    const ascending = useSelector((state) => state.productFilter.ascending);
    //? we use dispatch for setting filter to store
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const [listOpen, setListOpen] = useState(false);
    const [sortBy, setSortBy] = useState(searchParams.get('_sort') ?? '');
    const [availability, setAvailability] = useState(searchParams.get('availability') == 'true' ? true : false);

    useEffect(() => {
        let link = `${sortBy.length > 0 ? `_sort=${sortBy}&_order=${ascending ? 'asc' : 'desc'}` : ''}${availability ? `${'&availability=true'}` : ''}`;
        // click(link)
        //? setting filter to store while using dispatch and use setFilter action
        dispatch(setFilter(link));
        return () => {
        };
    }, [sortBy, ascending, availability]);

    return <>
        <OutsideAlerter onClickOutSide={() => {
            setListOpen(false)
        }}>

            <a className={!listOpen ? `${Style.btnMd} ${Style.btn}` : Style.listHeader} onClick={() => {

                if (!listOpen) {
                    setListOpen(!listOpen);
                }
            }}>
                <>
                    <div className={Style.filterList}>
                        {
                            !listOpen ?
                                (
                                    <>
                                        Filter
                                        <FilterIcon className={Style.icon} />
                                    </>
                                ) : (
                                    <ul>
                                        <li>
                                            <label htmlFor="SortSe">Sort by:</label>
                                            <select id="SortSe" value={sortBy} onChange={(e) => {
                                                setSortBy(e.currentTarget.value)
                                                console.log(sortBy);
                                            }}>
                                                <option value={0}>Select one</option>
                                                <option value={'name'}>Name</option>
                                                <option value={'price'}>Price</option>
                                                <option value={'rating'}>Rating</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label htmlFor="availabilityCb">Availability:</label>
                                            <input id="availabilityCb" type="checkbox" checked={availability} onChange={(e) => setAvailability(!availability)} />
                                        </li>
                                    </ul>
                                )}
                    </div>
                </>
            </a>
        </OutsideAlerter>
        <a className={`${Style.btnSm} ${Style.btn}`} role="button"
            onClick={() => {
                // setAscending(!ascending)
                dispatch(setAscending(!ascending))
            }
            } >
            {/* <div className={Style.az}>
                    <p>A</p>
                    <p>Z</p>
                </div> */}
            {
                ascending ?
                    (<ArrowUpIcon className={Style.icon} />) :
                    (<ArrowDownIcon className={Style.icon} />)
            }
            {/* <FontAwesomeIcon icon={ascending ? faArrowUp : faArrowDown} className={Style.icon} /> */}
        </a>
    </>
}

export default Filter;