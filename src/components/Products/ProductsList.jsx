import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import Style from './Products.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    productsEndpoint as cacheKey
} from "../../api/ProductsApi";
import ProductItem from "./ProductItem";
import Filter from "./Filter";

function ProductsList({ ProductsListNumberOfItems }) {
    const [searchParams] = useSearchParams();
    const filter = searchParams.toString();



    //? SWR
    const {
        isLoading,
        error,
        data: products,
        // mutate
    } = useSwr(
        [
            cacheKey,
            filter,
            // abortController
        ],
        getProducts,

        {
            onSuccess: res => {
                ProductsListNumberOfItems(res.headers["x-total-count"])
                return res.data
            },
            revalidateOnFocus: false,
            dedupingInterval: 2000,
            suspense: true
        }
    )

    let content = 'loading...';

    // if (isLoading) {
    //     content = <p>{content}</p>
    // } else
    if (error) {
        content = <p>{error}</p>
    }
    else {
        content = (
            <>
                <div className={Style.productContainer}>
                    <div className={Style.flexAlignStart}>
                        <Filter />
                    </div>
                    {products.data.length > 0 ? products.data.map(prod => <ProductItem key={prod.productIndex} product={prod} />) : <p className={Style.noProduct}>No products in this page</p>}
                </div>
            </>
        );
    }
    return content;
}

export default ProductsList;
