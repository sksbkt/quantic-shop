import React from "react";
import style from './Products.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import useSwr from 'swr';
function ProductItem({ product }) {
    return <>
        <article className={style.item}>
            <img src={product.productPicture} />
            <div >
                <FontAwesomeIcon icon={faBasketShopping} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <p>{product.productName}</p>
            <p>{product.productPrice}</p>
        </article>
    </>
}

export default ProductItem;
