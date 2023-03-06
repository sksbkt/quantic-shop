import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import style from './Products.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    // paginate,
    // applyFilter,
    productsEndpoint as cacheKey
} from "../../api/ProductsApi";
import ProductItem from "./ProductItem";
// import { applyFilter, sortByName } from "../../utils/SortHelper";

function ProductsList({ abortController }) {
    const [searchParams] = useSearchParams();
    const filter = searchParams.toString();

    //? SWR
    const {
        isLoading,
        error,
        data: products,
        mutate
    } = useSwr(
        [
            cacheKey,
            filter,
            // abortController
        ],
        getProducts,

        {
            onSuccess: data => {
                return data
            }, revalidateOnFocus: false,
            dedupingInterval: 2000
        }
    )

    let content = 'loading...';

    if (isLoading) {
        content = <p>{content}</p>
    } else if (error) {
        content = <p>{error}</p>
    }
    else {
        content = (<div className={style.container}>
            {products.length > 0 ? products.map(prod => <ProductItem key={prod.productIndex} product={prod} />) : <p className={style.noProduct}>No products in this page</p>}
        </div>);
    }
    return content;
}

export default ProductsList;
