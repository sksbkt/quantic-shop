import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import useSwr from 'swr';
import {
    getProducts,
    productsEndpoint as cacheKey
} from "../../api/ProductsApi";

function Products() {
    const { page } = useParams();
    const [searchParams] = useSearchParams();
    console.log(searchParams.toString())
    const navigate = useNavigate();
    useEffect(() => {
        if (!page) {
            navigate('/products/1')
        }
        return () => {
        };
    }, []);


    //? SWR
    const {
        isLoading,
        error,
        data: products,
        mutate
    } = useSwr(
        cacheKey, getProducts, { onSuccess: data => data.sort((a, b) => a.productIndex - b.productIndex) }
    )
    let content = 'loading...';

    if (isLoading) {
        content = <p>{content}</p>
    } else if (error) {
        content = <p>{error}</p>
    }
    else {
        console.log('here', products)
        content = products.map(prod => <p key={prod.productId}>{prod.productId}</p>);
    }
    return <div>Products {page} {content} </div>;



}

export default Products;
