import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCard } from "../../Redux/Slices/CardSlice";

import Style from './Profile.module.scss'

import useSwr from 'swr';
import { productsEndpoint as cacheKey } from '../../api/ProductsApi'
import { getProducts } from "../../api/ProductsApi";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import ShoppingCardItem from "../components/shoppingCard/ShoppingCardItem";

function ShoppingCard() {
    const shoppingCard = useSelector(selectCard);

    function filter() {
        let result = '';
        shoppingCard.idList.forEach(item =>
            result += `shoe_id=${item.id}&`
        );
        return result;
    }

    // const {
    //     isLoading,
    //     data: products,
    //     error,
    //     mutate
    // } =
    //     shoppingCard.idList.length > 0 ?

    //         useSwr(
    //             [
    //                 cacheKey,
    //                 filter(),
    //             ],
    //             getProducts, {
    //             onSuccess: res => {
    //                 res.headers["x-total-count"]
    //                 return res.data;
    //             },
    //             revalidateOnFocus: false,
    //             dedupingInterval: 2000,
    //             suspense: true,
    //         }
    //         ) : { data: null };

    const {
        isLoading,
        data: products,
        error,
        mutate
    } = useSwr(
        [
            cacheKey,
            filter(),
        ],
        getProducts, {
        onSuccess: res => {
            res.headers["x-total-count"]
            return res.data;
        },
        revalidateOnFocus: false,
        dedupingInterval: 2000,
        suspense: true,
    });
    function content() {
        if (shoppingCard.idList.length > 0) {
            return <section className={Style.shoppingCardListSection}>
                {
                    products.data.length > 0 ? products.data.map(prod => {
                        const count = shoppingCard.idList.find(item => item.id === prod.shoe_id).count;
                        return <>
                            <ShoppingCardItem
                                key={prod.shoe_id}
                                product={prod}
                                count={count} />
                        </>
                    })
                        : <></>
                }
            </section>
        } else {
            return <section className={Style.shoppingCardListSection}>
            </section>
        }
    }
    // useEffect(() => {
    //     return () => {
    //     };
    // }, [shoppingCard.idList.length]);

    return <>
        <BreadCrumbs />
        <article className={Style.shoppingCardArticle}>
            {content()}
            <div className={Style.shoppingCardInfoSection}>
                <div className={Style.textGrid}>
                    <p className={Style.labelText}>Total price:</p><p className={Style.descriptionText}>{shoppingCard.totalPrice}</p>
                </div><div className={Style.flexFill}></div>
                <a className={Style.buyOutBtn}>
                    Buy
                </a>
            </div>
        </article>
    </>
}

export default ShoppingCard;
