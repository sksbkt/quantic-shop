import React, { useState } from "react";
import style from './Products.module.scss'
function Pagination({ paginationPage, paginationPageLimit, paginationNumberOfItems, paginationSelectedPage }) {
    const [page, setPage] = useState(paginationSelectedPage);
    const numberOfPages = (paginationNumberOfItems / paginationPageLimit).toFixed();

    const pages = [];
    console.log(paginationSelectedPage);
    for (let index = 0; index < numberOfPages; index++) {
        const value = index + 1;
        pages.push(
            value == page ?
                <a
                    className={style.selectPageTab}
                    key={value}
                    onClick={() => { paginationPage(value); setPage(value) }}
                >{value}</a> :
                <a
                    className={style.pageTab}
                    key={value}
                    onClick={() => { paginationPage(value); setPage(value) }}
                >{value}</a>)
    }
    return <>
        <div className={style.pagesList}>
            {pages}
        </div>
    </>
}

export default Pagination;
