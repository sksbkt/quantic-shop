import React from "react";
import Style from './ProductsComponents.module.scss'
import { ReactComponent as Heart } from '/src/public/Heart.svg'
import { ReactComponent as Card } from '/src/public/Card.svg'
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCard } from "../../../Redux/Slices/CardSlice";
// import NumberComboBox from "../inputComponents/NumberComboBox";
import { getRandomNumberInRange } from "../../../Helper/HelperFunctions";

// import useSwr from 'swr';
function ProductItem({ product = {
    img: "",
    model: "sss",
    price: "999"
}, skeletonLoad, count }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const imagePath = `/src/public/shoe_1.png`;
    return <>
        <article className={`${Style.item} + ${skeletonLoad ? Style.skeletonItem : ''}`} >
            <section className={Style.itemUpperSlice}>
                {/* //? apparently there is a bug with img as flex item so we need this div to fix the issue  */}
                <div className={Style.gradientCover}
                    onClick={() => navigate(`/ProductPreview?id=${product.shoe_id}`)}
                />
                <div className={Style.imgContainer}>
                    <img
                        src={`/shoe_${getRandomNumberInRange(1, 4)}.png`}
                    //  src={product.img}
                    />
                </div>
                <Heart className={Style.heartIcon} />
                {/* <FontAwesomeIcon className={Style.heartIcon} icon={faHeart} /> */}
            </section>
            <section className={Style.itemLowerSlice}>
                <div className={Style.itemRow}>
                    <h3>
                        {product.name}
                    </h3>
                    <Rating rating={product.rating} />
                </div>
                <div className={Style.itemRow}>
                    <h5>
                        {product.brand}
                    </h5>
                </div>
                {!skeletonLoad ? <div className={Style.itemRow}>
                    <p className={product.availability ? Style.available : Style.unavailable}>{product.price}</p>
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
                </div> : <></>}
            </section>
        </article>
    </>
}

export default ProductItem;
