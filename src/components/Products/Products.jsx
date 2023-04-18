import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import ProductsList from "./ProductsList";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs";
import Style from './Products.module.scss'
import SkeletonProducts from "./skeleton/SkeletonProducts";

function Products() {
    const navigate = useNavigate();
    let { page } = useParams();
    const [paginationPage, setPaginationPage] = useState();

    //? REPLACED: with redux store
    // const [filter, setFilter] = useState('');
    const filter = useSelector((state) => state.productFilter.filter);

    const [numberOfItems, setNumberOfItems] = useState(16);

    const [searchParams] = useSearchParams();
    // const abort = new AbortController();
    let itemPerPage = searchParams.get('_limit') ?? 16;
    let start = searchParams.get('_start') ?? 0;
    // function pageFilter() {
    //     let url;

    //     if (itemPerPage <= 0 || isNaN(itemPerPage) || itemPerPage == undefined) {
    //         itemPerPage = 16;
    //     }

    //     // console.log({ 'Page': page <= 0, 'NaN': isNaN(page), 'pageNo:': page <= 0 });
    //     if (page == undefined || isNaN(page) || page <= 0) {
    //         page = 1;
    //     }
    //     else if (!isNaN(paginationPage)) {
    //         page = paginationPage
    //     }

    //     start = (page - 1) * itemPerPage;
    //     // if (searchParams.toString() = '')
    //     if (searchParams.toString() == '' || filter != '') {
    //         url = `/products/${page}`;
    //         setSearchParams(`${filter.length > 0 ? filter + '&' : ''}_start=${start}&_limit=${itemPerPage}`, { replace: true });
    //     }
    //     else {
    //         searchParams.set('_start', start)
    //         searchParams.set('_limit', itemPerPage)
    //         url = `/products/${page}?&${searchParams.toString()}`;
    //     }

    //     return url;
    // }
    function initialLoad() {
        if (itemPerPage <= 0 || isNaN(itemPerPage) || itemPerPage == undefined) {
            itemPerPage = 16;
        }

        start = (page - 1) * itemPerPage;

        let search = `${filter.length > 0 ? filter + '&' : ''}_start=${start}&_limit=${itemPerPage}`;
        if (!isNaN(paginationPage)) {
            navigate(`/products/${paginationPage}?${search}`, { replace: true });
        }
        else if (isNaN(page)) {
            navigate(`/products/1?${search}`, { replace: true });
        } else {
        }
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
