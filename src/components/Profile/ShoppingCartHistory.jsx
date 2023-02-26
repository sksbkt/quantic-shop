import React from "react";
import { useParams } from "react-router-dom";

function ShoppingCartHistory() {
    const { page } = useParams()
    return <div>ShoppingCartHistory {page}</div>;
}

export default ShoppingCartHistory;
