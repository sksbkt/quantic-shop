import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Style from './ProductPreview.module.scss'
import useSwr from 'swr'

import { productsEndpoint as cacheKey, getSingleProduct } from '../../api/ProductsApi';

function ProductPreview() {
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id');
    const {
        isLoading,
        error,
        data: product,
        // mutate
    } = useSwr(
        [
            cacheKey,
            id,
            // abortController
        ],
        getSingleProduct,

        {
            onSuccess: res => {
                return res.data
            },
            revalidateOnFocus: false,
            dedupingInterval: 2000,
            suspense: true
        }
    )
    let content = <p>Loading...</p>;
    if (error) {
        content = <p>{error}</p>
    } else {
        const prod = product.data[0];
        content = <article className={Style.productInfo}>
            <p>{prod.productName}</p>
            <p>{prod.productName}</p>
            <p>{prod.productRating}</p>
            <p>{prod.productIsAvailable}</p>
            <p>{prod.productSize}</p>
            <p>{prod.productPrice}</p>
            <p>{prod.productName}</p>
            <p>{prod.productGender}</p>
            <p>{prod.productBrand}</p>
            <p>{prod.ProductDescription}</p>
            <p>{prod.productTags}</p>
            <p>{prod.irure}</p>
            <p>{prod.eiusmod}</p>
            <p>{prod.incididunt}</p>
            <img src={prod.productPicture} />
        </article>
    }
    return <section className={Style.mainSection} >
        <BreadCrumbs />
        {content}
    </section>
}

export default ProductPreview;
