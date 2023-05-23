import React from "react";
import { useParams } from "react-router-dom";

function ShoppingCardHistory() {
    const { page } = useParams()
    return <div>ShoppingCardHistory {page}</div>;
}

export default ShoppingCardHistory;
