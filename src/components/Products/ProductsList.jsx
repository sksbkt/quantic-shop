import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import style from './Products.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    paginate,
    applyFilter,
    productsEndpoint as cacheKey
} from "../../api/ProductsApi";
import ProductItem from "./ProductItem";
// import { applyFilter, sortByName } from "../../utils/SortHelper";

function ProductsList({ page, filter }) {


    //? SWR
    const {
        isLoading,
        error,
        data: products,
        mutate
    } = useSwr(
        cacheKey, getProducts, applyFilter(cacheKey, `?${filter}`), {
        onSuccess: data => data
    }
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
