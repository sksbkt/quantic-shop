import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import style from './Products.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    paginate,
    productsEndpoint as cacheKey
} from "../../api/ProductsApi";
import ProductItem from "./ProductItem";
import { sortByName } from "../../utils/SortHelper";

function ProductsList({ page, filter }) {


    const navigate = useNavigate();
    useEffect(() => {
        if (!page) {
            navigate('/products/1')
        }
        return () => {
        };
    }, []);

    const end = page * 16;
    const start = end - 16;
    //? SWR
    const {
        isLoading,
        error,
        data: products,
        mutate
    } = useSwr(
        // cacheKey, getProducts, { onSuccess: data => data.sort((a, b) => { return a.productIndex - b.productIndex }) }
        cacheKey, getProducts, paginate(start, end), { onSuccess: data => data.sort((a, b) => sortByName(a.productName, b.productName)) }
    )


    let content = 'loading...';

    if (isLoading) {
        content = <p>{content}</p>
    } else if (error) {
        content = <p>{error}</p>
    }
    else {
        console.log('here', products)
        content = (<div className={style.container}>
            {products.length > 0 ? products.map(prod => <ProductItem key={prod.productIndex} product={prod} />) : <p className={style.noProduct}>No products in this page</p>}
        </div>);
    }
    return content;
}

export default ProductsList;
