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

    let filter = searchParams.toString();

    const itemPerPage = searchParams.get('_limit') ?? 16;
    page = isNaN(page) ? 1 : page;
    const start = searchParams.get('_start') ?? (page - 1) * itemPerPage;

    console.log('start', start);

    useEffect(() => {
        if (!filter) {
            navigate(`/products/${page}?_start=${start}&_limit=${itemPerPage}`, { replace: true })
        } else {
            // console.log('slice', filter.toLowerCase().slice(filter.indexOf('_start')))
            filter = filter.toLowerCase().slice(0, filter.indexOf('_start'));
            navigate(`/products/${page}?${filter}_start=${start}&_limit=${itemPerPage}`, { replace: true })
        }
        // }
        return () => {
        };
    }, [
    ]);



    // console.log('page', page);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!page) {
    //         navigate('/products/1')
    //     }
    //     return () => {
    //     };
    // }, []);
    return (<ProductsList page={page} filter={filter} />);
}

export default Products;
