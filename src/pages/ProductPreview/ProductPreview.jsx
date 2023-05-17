import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/breadCrumbs";
import Style from './ProductPreview.module.scss';
import useSwr from 'swr';
import Rating from '../components/products/Rating';
import { ReactComponent as Heart } from '../../public/Heart.svg';
import { ReactComponent as Cart } from '../../public/Cart.svg';

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

    const prod = product.data[0];
    if (error) {
        content = <p>{error}</p>
    } else {
        console.log(prod.shoe_id);
        content =
            <article className={Style.productInfo}>
                <div className={Style.leftSection}>
                    <img src={prod.img} />
                </div>
                <div className={Style.rightSection}>

                    <h2>{prod.name}</h2>
                    <h4>{prod.price}$</h4>
                    <p>{prod.availability ? 'available' : 'not available'}</p>
                    <div className={Style.comboBtn}>
                        <a>Select Size</a>
                        <select>
                            <option value={0}>select size</option>
                        </select>

                    </div>
                    <div className={Style.comboBtn}>
                        <a>Select Color</a>
                        <div className={Style.colorCircle} style={{ backgroundColor: prod.color }} title={prod.color}>
                        </div>
                    </div>
                    <div className={Style.centerComboBtn}>
                        <Cart className={Style.icon} />
                        <a>Add to cart</a>
                    </div>
                    <p>{prod.size}</p>
                    <p>{prod.gender}</p>
                    <p>{prod.brand}</p>
                    <p>{prod.description}</p>
                    <p>Review:</p>
                    <Rating rating={prod.rating} preview={true} />
                </div>
            </article >
    }
    return <section className={Style.mainSection} >
        <BreadCrumbs prod={prod} />
        {content}
    </section>
}

export default ProductPreview;
