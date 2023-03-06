import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { searchParams as params } from '../../Helper/SearchParamsParser'

import ProductsList from "./ProductsList";
import Filter from "./Filter";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();
    const [filter, setFilter] = useState('');

    const [searchParams] = useSearchParams();

    // const abort = new AbortController();

    function pageFilter() {
        let itemPerPage = searchParams.get('_limit') ?? 16;
        let start = searchParams.get('_start') ?? 0;
        let url;

        if (itemPerPage <= 0 || isNaN(itemPerPage) || itemPerPage == undefined) {
            itemPerPage = 16;
        }
        if (page <= 0 || isNaN(page) || page == undefined) {
            page = 1;
        }
        start = (page - 1) * itemPerPage;
        // if (searchParams.toString() = '')
        if (searchParams.toString() == '' || filter != '')
            url = `/products/${page}?${filter}&_start=${start}&_limit=${itemPerPage}`;
        else {
            console.log(searchParams.toString());
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
    }, [filter]);
    return (
        <>
            <Filter click={(filterOut) => {
                setFilter(filterOut)
            }} />
            <ProductsList
            // abortController={abort}
            />
        </>
    );
}

export default Products;
