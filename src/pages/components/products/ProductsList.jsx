import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import Style from './ProductsComponents.module.scss'

import useSwr from 'swr';
import {
    getProducts,
    productsEndpoint as cacheKey
} from "../../../api/ProductsApi";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import { selectFilter, setFilter } from "../../../Redux/Slices/FilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { userSearchParamsParser, validateSearchParams } from "../../../Helper/SearchParamsParser";
import Pagination from "./Pagination";

function ProductsList() {
    let { page } = useParams();

    const navigate = useNavigate();

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();


    const [numberOfItems, setNumberOfItems] = useState(16);
    const [paginationPage, setPaginationPage] = useState(1);

    let itemPerPage = searchParams.get('_limit') ?? 16;
    let start = (page - 1) * 16;

    const search = userSearchParamsParser(filter) + `_start=${start}&_limit=${itemPerPage}`;

    useEffect(() => {
        dispatch(setFilter(validateSearchParams(searchParams)));
        return () => {
        };
    }, []);

    // const search = useSelector(selectSearch);
    useEffect(() => {
        navigate(`/products/${paginationPage}?${search}`);
        mutate()
    }, [filter, paginationPage]);

    useEffect(() => {

    }, [numberOfItems]);

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
                setNumberOfItems(
                    res.headers["x-total-count"]

                )

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
                    <div className={Style.row}>
                        <Pagination
                            paginationPage={(pageNumber) => setPaginationPage(pageNumber)}
                            paginationPageLimit={16}
                            paginationNumberOfItems={numberOfItems}
                            paginationSelectedPage={page ?? 1}
                        />
                    </div>
                </>
            );
        }
    return content;
}

export default ProductsList;
