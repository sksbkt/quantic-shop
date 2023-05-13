import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import ProductsList from "../components/products/ProductsList";
import Pagination from "../components/products/Pagination";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import Style from './Products.module.scss'
import SkeletonProducts from "../skeletons/SkeletonProducts";
import { selectFilter, setSearch } from "../../Redux/Slices/FilterSlice";
import userSearchParamsParser from "../../Helper/SearchParamsParser";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();

    const [paginationPage, setPaginationPage] = useState();

    //? with redux store
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const [numberOfItems, setNumberOfItems] = useState(16);

    const [searchParams] = useSearchParams();
    let itemPerPage = searchParams.get('_limit') ?? 16;
    let start = searchParams.get('_start') ?? 0;

    const search = userSearchParamsParser(filter) + `_start=${start}&_limit=${itemPerPage}`;
    function initialLoad() {

        if (itemPerPage <= 0 || isNaN(itemPerPage) || itemPerPage == undefined) {
            itemPerPage = 16;
        }

        start = (page - 1) * itemPerPage;
        if (isNaN(start))
            start = 0;

        if (!isNaN(paginationPage)) {
            navigate(`/products/${paginationPage}?${search}`, { replace: true });
        }
        else if (isNaN(page)) {
            navigate(`/products/1?${search}`, { replace: true });
        } else {
            navigate(`/products/${page}?${search}`, { replace: true });
        }
        dispatch(setSearch(search));
    }
    useEffect(() => {
        if (!page || !itemPerPage || itemPerPage < 10 || !start) {
            navigate(`/products/1?${search}`);
        }
        return () => {
        };
    }, []);

    useEffect(() => {
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
            <Suspense fallback={<SkeletonProducts numberOfItems={16} />}>
                <ProductsList
                    ProductsListNumberOfItems={(itemsNo) => {
                        console.log(itemsNo);
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
