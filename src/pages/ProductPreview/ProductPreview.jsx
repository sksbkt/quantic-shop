import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/breadCrumbs";
import Style from './ProductPreview.module.scss';
import useSwr from 'swr';
import Rating from '../components/products/Rating';
import { ReactComponent as Heart } from '/src/public/Heart.svg';
import { ReactComponent as Card } from '/src/public/Card.svg';

import { productsEndpoint as cacheKey, getSingleProduct } from '../../api/ProductsApi';

import { useDispatch } from "react-redux";
import { addToCard, removeFromCard, setCount } from '../../Redux/Slices/CardSlice';

function ProductPreview() {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();


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
        content =
            <section className={Style.pageMainContainer}>

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
                        <a
                            className={Style.comboBtn}
                            onClick={() => {
                            }}
                        >
                            <p>Select Color</p>
                            <div className={Style.colorCircle} style={{ backgroundColor: prod.color }} title={prod.color}>
                            </div>
                        </a>
                        <a
                            onClick={() => {
                                dispatch(addToCard(prod.shoe_id))
                            }}
                            className={Style.centerComboBtn}
                        >
                            <Card className={Style.icon} />
                            <p>Add to Card</p>
                        </a>
                        <p>{prod.size}</p>
                        <p>{prod.gender}</p>
                        <p>{prod.brand}</p>
                        <p>{prod.description}</p>
                        <p>Review:</p>
                        <Rating rating={prod.rating} preview={true} />
                    </div>
                </article >
            </section>
    }
    return <section className={Style.mainSection} >
        <BreadCrumbs prod={prod} />
        {content}
    </section>
}

export default ProductPreview;
