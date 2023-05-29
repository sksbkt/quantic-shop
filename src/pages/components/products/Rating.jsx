import React from "react";
import { ReactComponent as Star } from "/Public/Star_filled.svg";
import { ReactComponent as StarEmpty } from "/Public/Star_empty.svg";
import Style from './ProductsComponents.module.scss'

function Rating({ rating, preview }) {
    return <div className={preview ? Style.previewRatingContainer : Style.ratingContainer}>
        {[...Array(rating).keys()].map(star => <Star key={Math.random()} className={preview ? Style.previewStar : Style.star} />)}
        {[...Array(5 - rating > 0 ? 5 - rating : 0).keys()].map(star => <StarEmpty key={Math.random()} className={preview ? Style.previewStarEmpty : Style.starEmpty} />)}
    </div>;
}

export default Rating;
