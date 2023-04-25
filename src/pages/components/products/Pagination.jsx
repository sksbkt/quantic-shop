import React, { useEffect, useState } from "react";
import style from './ProductsComponents.module.scss'
function Pagination({ paginationPage, paginationPageLimit, paginationNumberOfItems, paginationSelectedPage }) {
    const [page, setPage] = useState(paginationSelectedPage);
    const numberOfPages = (paginationNumberOfItems / paginationPageLimit).toFixed();

    const pages = [];

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
    useEffect(() => {
        //? if we have enough items to make a page but not enough for the current page we will navigate to page one
        if (paginationNumberOfItems < paginationSelectedPage * paginationPageLimit) {
            // setPage(1)
            paginationPage(1)
        }

        return () => {
        };
    }, [paginationNumberOfItems]);

    return <>
        <div className={style.pagesList}>
            {pages}
        </div>
    </>
}

export default Pagination;
