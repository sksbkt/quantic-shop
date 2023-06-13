import React from "react";

import NumberComboBox from "../inputComponents/NumberComboBox";

import Style from './ShoppingCardItem.module.scss';
import Rating from "../products/Rating";
import { setCount } from "../../../Redux/Slices/CardSlice";
import { useDispatch } from "react-redux";

function ShoppingCardItem({ product, count }) {
    const dispatch = useDispatch();
    return (
        <div className={Style.shoppingCardItemContainer} key={product.shoe_id}>
            <img
                src={product.img}
                className={Style.shoppingCardItemImg}
                onClick={() => navigate(`/ProductPreview?id=${product.shoe_id}`)}
            />
            <div className={Style.shoppingCardItemLeftContainer}>
                <h3>
                    {product.name}
                </h3>
                <h6>
                    {product.brand}
                </h6>
                <h5>
                    {product.model}
                </h5>
                <div className={Style.ShoppingCardItemPriceSection}>
                    <h4>
                        {Math.floor(product.price)}$
                    </h4>
                    <h4>
                        {Math.floor(product.price * count)}$
                    </h4>
                </div>
            </div>
            <div className={Style.shoppingCardItemRightContainer}>

                <Rating rating={product.rating} />
                <NumberComboBox
                    number={count}
                    SetNumber={(out) => dispatch(setCount({ id: product.shoe_id, count: out }))}
                />
            </div>
        </div>
    );
}

export default ShoppingCardItem;
