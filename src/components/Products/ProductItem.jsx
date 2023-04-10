import React from "react";
import Style from './Products.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// import useSwr from 'swr';
function ProductItem({ product = {
    productPicture: "",
    productName: "sss",
    productPrice: "999"
}, skeletonLoad }) {
    return <>
        <article className={`${Style.item} + ${skeletonLoad ? Style.skeletonItem : ''}`}>
            <img src={product.productPicture} />
            <div >
                {!skeletonLoad ? <>
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <FontAwesomeIcon icon={faHeart} />
                </> : <></>}
            </div>
            <p>{product.productName}</p>
            <p>{product.productPrice}</p>
        </article>
    </>
}

export default ProductItem;
