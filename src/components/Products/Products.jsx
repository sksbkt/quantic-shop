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
    const { page } = useParams();
    const [searchParams] = useSearchParams();

    const rating = searchParams.get('rating') ?? '';
    const alphabeticalOrder = searchParams.get('AZ') ?? '';
    const brand = searchParams.get('brand') ?? '';
    const gender = searchParams.get('gender') ?? '';

    console.log('page', page);

    const navigate = useNavigate();
    useEffect(() => {
        if (!page) {
            navigate('/products/1')
        }
        return () => {
        };
    }, []);
    return (<ProductsList page={page} />);
}

export default Products;
