import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import Style from './ProductsComponents.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    productsEndpoint as cacheKey
} from "../../../api/ProductsApi";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import { selectFilter, selectSearch } from "../../../Redux/Slices/FilterSlice";
import { useSelector } from "react-redux";

function ProductsList({ ProductsListNumberOfItems }) {
    // const [searchParams] = useSearchParams();
    // const filter = searchParams.toString();
    const search = useSelector(selectSearch);
    useEffect(() => {
        mutate()
    }, [search]);

    //? SWR
    const {
        isLoading,
        error,
        data: products,
        mutate
        // mutate
    } = useSwr(
        [
            cacheKey,
            search,
            // abortController
        ],
        getProducts,

        {
            onSuccess: res => {
                ProductsListNumberOfItems(res.headers["x-total-count"]);
                console.log(res.headers["x-total-count"]);
                return res.data
            },
            revalidateOnFocus: false,
            dedupingInterval: 2000,
            suspense: true
        }
    )

    let content = 'loading...';

    if (isLoading) {
        console.log('LOADING');
        content = <p>{content}</p>
    } else
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
                        {products.data.length > 0 ? products.data.map(prod => <ProductItem key={prod.shoe_id} product={prod} />) : <p className={Style.noProduct}>No products in this page</p>}
                    </div>
                </>
            );
        }
    return content;
}

export default ProductsList;
