import React from "react";
import Style from './ProductsComponents.module.scss'
import { ReactComponent as Heart } from '../../../public/Heart.svg'
import { ReactComponent as Card } from '../../../public/Card.svg'
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCard } from "../../../Redux/Slices/CardSlice";

// import useSwr from 'swr';
function ProductItem({ product = {
    img: "",
    model: "sss",
    price: "999"
}, skeletonLoad, count }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <>
        <article className={`${Style.item} + ${skeletonLoad ? Style.skeletonItem : ''}`} >
            <section className={Style.itemUpperSlice}>
                <img src={product.img} onClick={() => navigate(`/ProductPreview?id=${product.shoe_id}`)} />
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
                    <a
                        onClick={() => dispatch(addToCard(
                            {
                                shoe_id: product.shoe_id,
                                price: product.price,
                                count: 1
                            }
                        ))}
                        className={Style.iconBtnTransparent}
                    >
                        <Card className={Style.itemIcon} />
                    </a>
                </div> : <p></p>}
            </section>
        </article>
    </>
}

export default ProductItem;
