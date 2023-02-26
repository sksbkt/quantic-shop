import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ProductPreview() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    console.log(searchParams.toString());
    return <div>ProductPreview {id}</div>;
}

export default ProductPreview;
