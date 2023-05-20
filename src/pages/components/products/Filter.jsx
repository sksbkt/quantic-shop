import React, { useEffect, useState } from "react";

import OutsideAlerter from "../../../hooks/useOutSideAlerter";
import { ReactComponent as ArrowUpIcon } from '../../../public/arrow-up-long-solid.svg'
import { ReactComponent as ArrowDownIcon } from '../../../public/arrow-down-long-solid.svg'
import { ReactComponent as FilterIcon } from '../../../public/filter-solid.svg'


import Style from "./ProductsComponents.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../../Redux/Slices/FilterSlice";




function Filter() {

    //? we use dispatch for setting filter to store
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);


    const [sortBy, setSortBy] = useState('');
    const [ascending, setAscending] = useState(false);
    const [availability, setAvailability] = useState(false);
    const [listOpen, setListOpen] = useState(false);

    useEffect(() => {
        setSortBy(filter.sortBy);
        setAscending(filter.ascending);
        setAvailability(filter.availability);
        return () => {
        };
    }, [filter]);

    useEffect(() => {
        dispatch(setFilter({ sortBy, ascending, availability }));
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
                                                setSortBy(e.target.value);
                                            }}>
                                                <option value={0}>Select one</option>
                                                <option value={'name'}>Name</option>
                                                <option value={'price'}>Price</option>
                                                <option value={'rating'}>Rating</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label htmlFor="availabilityCb">Availability:</label>
                                            <input
                                                id="availabilityCb"
                                                type="checkbox"
                                                checked={availability}
                                                onChange={() => setAvailability(!availability)}
                                            />
                                        </li>
                                    </ul>
                                )}
                    </div>
                </>
            </a>
        </OutsideAlerter>
        <a className={`${Style.btnSm} ${Style.btn}`} role="button"
            onClick={() => {
                setAscending(!ascending)
            }
            } >

            {
                ascending ?
                    (<ArrowUpIcon className={Style.icon} />) :
                    (<ArrowDownIcon className={Style.icon} />)
            }
        </a>
    </>
}

export default Filter;