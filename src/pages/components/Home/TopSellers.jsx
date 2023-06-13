import React from "react";

import useSwr from 'swr';
import {
    productsEndpoint as cacheKey,
    getProducts
} from '../../../api/ProductsApi';

import ProductItem from "../products/ProductItem";

import Style from './HomeCmp.module.scss';
function TopSellers() {
    const topSellerQuery = '_sort=price&rating_gte=4&_order=asc&availability=true&_start=0&_limit=4';
    const {
        isLoading,
        data: topSellers,
        mutate, error
    } = useSwr(
        [
            cacheKey,
            topSellerQuery
        ],
        getProducts
        , {
            onSuccess: res => {
                return res.data;
            },
            dedupingInterval: 2000,
            revalidateOnFocus: false,
            suspense: true

        });
    return <React.Fragment>
        <div className={Style.topSellersSection}>
            <h4>
                Our Top sellers of the week
            </h4>
            <div className={Style.topSellersContainer}>
                {topSellers.data.map(prod => <ProductItem key={prod.shoe_id} product={prod} />)}
            </div>
        </div>
    </React.Fragment>
}

export default TopSellers;
