import React, { Suspense } from "react";
import ProductsList from "../components/products/ProductsList";

import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import Style from './Products.module.scss'
import SkeletonProducts from "../skeletons/SkeletonProducts";

function Products() {
    return (
        <section className={Style.pageMainContainer}>
            <BreadCrumbs />

            <div className={Style.gap}></div>
            <Suspense fallback={<SkeletonProducts numberOfItems={16} />}>
                <ProductsList />
            </Suspense>
            <div className={Style.gap} />

        </section>
    );
}

export default Products;
