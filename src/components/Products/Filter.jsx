import React, { useState } from "react";


import { ReactComponent as ArrowUpIcon } from '../../../public/arrow-up-long-solid.svg'
import { ReactComponent as ArrowDownIcon } from '../../../public/arrow-down-long-solid.svg'

// import { TEXT_STRINGS_EN } from '../../Localization/Language'



import style from "./Products.module.scss"
//! weird bug with react extension in vscode correct path but error happened
import FilterList from './productsComponents/FilterList'

function Filter({ click }) {
    const [ascending, setAscending] = useState(true);



    return <>
        <div className={style.row}>
            <FilterList />
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