import React from "react";
import Style from './Products.module.scss'
import { ReactComponent as Heart } from '../../../public/Heart.svg'
import { ReactComponent as Cart } from '../../../public/Cart.svg'
import { useNavigate } from "react-router-dom";

// import useSwr from 'swr';
function ProductItem({ product = {
    productPicture: "",
    productName: "sss",
    productPrice: "999"
}, skeletonLoad }) {
    const navigate = useNavigate();
    return <>
        <article className={`${Style.item} + ${skeletonLoad ? Style.skeletonItem : ''}`} onClick={() => navigate(`/ProductPreview?id=${product.productId}`)}>
            <section className={Style.itemUpperSlice}>
                <img src={product.productPicture} />
                <Heart className={Style.heartIcon} />
                {/* <FontAwesomeIcon className={Style.heartIcon} icon={faHeart} /> */}
            </section>
            <section className={Style.itemLowerSlice}>
                <p className={Style.itemRow}>{product.productName}</p>
                {!skeletonLoad ? <div className={Style.itemRow}>
                    <p>{product.productPrice}</p>
                    <Cart className={Style.itemIcon} />
                </div> : <p></p>}
            </section>
        </article>
    </>
}

export default ProductItem;
