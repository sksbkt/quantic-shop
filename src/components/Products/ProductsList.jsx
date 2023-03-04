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

function ProductsList() {
    const [searchParams] = useSearchParams();
    const filter = searchParams.toString();
    console.log(filter);
    //? SWR
    const {
        isLoading,
        error,
        data: products,
        mutate
    } = useSwr(
        [cacheKey, filter],
        getProducts,
        //   applyFilter(cacheKey, `?${filter}`),

        {
            onSuccess: data => {
                return data
            }
        }
    )

    // const [isLoading, setIsLoading] = useState(true);
    // const fetchController = useRef(null);

    // const [products, setProducts] = useState([]);


    // useEffect(() => {
    //     async function fetchProducts() {
    //         setIsLoading(true);
    //         if (!fetchController.current) fetchController.current = new AbortController();
    //         setProducts(await getProducts(filter, fetchController));
    //         setIsLoading(false);
    //     }
    //     return () => {
    //         fetchController.current?.abort();
    //     };
    // }, []);


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
