import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import style from './Products.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    productsEndpoint as cacheKey
} from "../../api/ProductsApi";
import ProductItem from "./ProductItem";
import ProductsList from "./ProductsList";

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
        // if (!filter || filter == '') {
        // } else {
        //     // console.log('slice', filter.toLowerCase().slice(filter.indexOf('_start')))
        //     filter = filter.toLowerCase().slice(0, filter.indexOf('_start'));
        //     navigate(`/products/${page}?${filter}_start=${start}&_limit=${itemPerPage}`, { replace: true })
        // }
        // }
        return () => {
        };
    }, []);



    // console.log('page', page);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!page) {
    //         navigate('/products/1')
    //     }
    //     return () => {
    //     };
    // }, []);
    return (<ProductsList />);
}

export default Products;
