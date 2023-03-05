import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import style from './Products.module.scss'

import ProductsList from "./ProductsList";
import Filter from "./Filter";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();
    const [searchParams] = useSearchParams();

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

        url = `/products/${page}?_start=${start}&_limit=${itemPerPage}`;
        return url;
    }

    useEffect(() => {
        navigate(pageFilter())
        return () => {
        };
    }, []);
    return (
        <>
            <Filter />
            <ProductsList />
        </>
    );
}

export default Products;
