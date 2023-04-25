import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import ProductsList from "../components/products/ProductsList";
import Filter from "../components/products/Filter";
import Pagination from "../components/products/Pagination";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import Style from './Products.module.scss'
import SkeletonProducts from "../skeletons/SkeletonProducts";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();
    const [paginationPage, setPaginationPage] = useState();

    //? REPLACED: with redux store
    const filter = useSelector((state) => state.productFilter.filter);

    const [numberOfItems, setNumberOfItems] = useState(16);

    const [searchParams] = useSearchParams();
    let itemPerPage = searchParams.get('_limit') ?? 16;
    let start = searchParams.get('_start') ?? 0;

    function initialLoad() {
        if (itemPerPage <= 0 || isNaN(itemPerPage) || itemPerPage == undefined) {
            itemPerPage = 16;
        }

        start = (page - 1) * itemPerPage;
        if (isNaN(start))
            start = 0;
        let search = `${filter.length > 0 ? filter + '&' : ''}_start=${start}&_limit=${itemPerPage}`;
        if (!isNaN(paginationPage)) {
            navigate(`/products/${paginationPage}?${search}`, { replace: true });
        }
        else if (isNaN(page)) {
            navigate(`/products/1?${search}`, { replace: true });
        } else {
            navigate(`/products/${page}?${search}`, { replace: true });
        }
        // console.log(search);
    }

    useEffect(() => {
        // console.log('load');
        // navigate(pageFilter())
        initialLoad();

        return () => {
        };
    },
        [filter, paginationPage, page]);
    return (
        <section className={Style.mainSection}>
            <BreadCrumbs />

            <div className={Style.gap}></div>
            {/* <SkeletonProducts numberOfItems={numberOfItems} /> */}
            <Suspense fallback={<SkeletonProducts numberOfItems={itemPerPage} />}>
                <ProductsList
                    ProductsListNumberOfItems={(itemsNo) => {
                        setNumberOfItems(itemsNo)
                    }}
                // abortController={abort}
                />
            </Suspense>
            <div className={Style.gap} />
            <div className={Style.row}>
                <Pagination
                    paginationPage={(pageNumber) => setPaginationPage(pageNumber)}
                    paginationPageLimit={itemPerPage}
                    paginationNumberOfItems={numberOfItems}
                    paginationSelectedPage={page ?? 1}
                />
            </div>
        </section>
    );
}

export default Products;
