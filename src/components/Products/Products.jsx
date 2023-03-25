import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import ProductsList from "./ProductsList";
import Filter from "./Filter";
import Pagination from "./Pagination";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();
    const [paginationPage, setPaginationPage] = useState(1);

    const [filter, setFilter] = useState('');
    const [numberOfItems, setNumberOfItems] = useState(0);

    const [searchParams] = useSearchParams();

    // const abort = new AbortController();

    let itemPerPage = searchParams.get('_limit') ?? 16;
    let start = searchParams.get('_start') ?? 0;
    function pageFilter() {
        let url;

        if (itemPerPage <= 0 || isNaN(itemPerPage) || itemPerPage == undefined) {
            itemPerPage = 16;
        }
        if (page <= 0 || isNaN(page) || page == undefined) {
            page = 1;
        } else {
            page = paginationPage
        }
        start = (page - 1) * itemPerPage;
        // if (searchParams.toString() = '')
        if (searchParams.toString() == '' || filter != '')
            url = `/products/${page}?${filter}&_start=${start}&_limit=${itemPerPage}`;
        else {
            searchParams.set('_start', start)
            searchParams.set('_limit', itemPerPage)
            url = `/products/${page}?&${searchParams.toString()}`;
        }

        return url;
    }


    useEffect(() => {
        navigate(pageFilter())
        return () => {
        };
    }, [filter, paginationPage]);
    return (
        <>
            <Filter click={(filterOut) => {
                setFilter(filterOut)
            }} />
            <ProductsList
                ProductsListNumberOfItems={(itemsNo) => {
                    setNumberOfItems(itemsNo)
                }}
            // abortController={abort}
            />
            <Pagination
                paginationPage={(pageNumber) => setPaginationPage(pageNumber)}
                paginationPageLimit={itemPerPage}
                paginationNumberOfItems={numberOfItems}
            />
        </>
    );
}

export default Products;
