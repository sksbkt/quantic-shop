import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import ProductsList from "./ProductsList";
import Filter from "./Filter";
import Pagination from "./Pagination";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();
    const [paginationPage, setPaginationPage] = useState();

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

        // console.log({ 'Page': page <= 0, 'NaN': isNaN(page), 'pageNo:': page <= 0 });
        if (page == undefined || isNaN(page) || page <= 0) {
            page = 1;
        }
        else if (!isNaN(paginationPage)) {
            page = paginationPage
        }

        start = (page - 1) * itemPerPage;
        // if (searchParams.toString() = '')
        if (searchParams.toString() == '' || filter != '')
            url = `/products/${page}?${filter.length > 0 ? filter + '&' : ''}_start=${start}&_limit=${itemPerPage}`;
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
                paginationSelectedPage={page ?? 1}
            />
        </>
    );
}

export default Products;
