import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ShoppingCart() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    console.log(searchParams.toString());

    return <div>ShoppingCart {id}</div>;
}

export default ShoppingCart;
