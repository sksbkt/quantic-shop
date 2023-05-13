import React from "react";
import Style from './ProductsComponents.module.scss'
import { ReactComponent as Heart } from '../../../../public/Heart.svg'
import { ReactComponent as Cart } from '../../../../public/Cart.svg'
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

// import useSwr from 'swr';
function ProductItem({ product = {
    img: "",
    model: "sss",
    price: "999"
}, skeletonLoad }) {
    const navigate = useNavigate();
    return <>
        <article className={`${Style.item} + ${skeletonLoad ? Style.skeletonItem : ''}`} onClick={() => navigate(`/ProductPreview?id=${product.shoe_id}`)}>
            <section className={Style.itemUpperSlice}>
                <img src={product.img} />
                <Heart className={Style.heartIcon} />
                {/* <FontAwesomeIcon className={Style.heartIcon} icon={faHeart} /> */}
            </section>
            <section className={Style.itemLowerSlice}>
                <div className={Style.itemRow}>
                    {product.name}
                    <Rating rating={product.rating} />
                </div>
                {!skeletonLoad ? <div className={Style.itemRow}>
                    <p className={product.availability ? Style.white : Style.black}>{product.price}</p>
                    <Cart className={Style.itemIcon} />
                </div> : <p></p>}
            </section>
        </article>
    </>
}

export default ProductItem;
