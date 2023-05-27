import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { selectCard } from "../../Redux/Slices/CardSlice";

import Style from './Profile.module.scss'

import useSwr from 'swr';
import { productsEndpoint as cacheKey } from '../../api/ProductsApi'
import { getProducts } from "../../api/ProductsApi";
import ProductItem from "../components/products/ProductItem";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import ShoppingCardItem from "../components/shoppingCard/ShoppingCardItem";

function ShoppingCard() {
    const shoppingCard = useSelector(selectCard);

    function filter() {
        let result = '';
        shoppingCard.card.forEach(item =>
            result += `shoe_id=${item.shoe_id}&`
        );
        return result;
    }

    const {
        isLoading,
        data: products,
        error,
        mutate
    } =
        shoppingCard.card.length > 0 ?

            useSwr(
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
            }
            ) : { data: null };

    function getCount() {
        [].card.includes({ shoe_id: prod.shoe_id })
    }
    function content() {
        if (shoppingCard.card.length > 0) {
            return <section className={Style.shoppingCardListSection}>
                {
                    products.data.length > 0 ? products.data.map(prod => {
                        const count = shoppingCard.card.find(item => item.shoe_id === prod.shoe_id).count;
                        return <>
                            <ShoppingCardItem
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
    useEffect(() => {
        return () => {
        };
    }, [shoppingCard.card.length]);

    return <>
        <BreadCrumbs />
        <article className={Style.shoppingCardArticle}>
            {content()}
            <div className={Style.shoppingCardInfoSection}>
                <div className={Style.textGrid}>
                    <p className={Style.labelText}>Total price:</p><p className={Style.descriptionText}>{shoppingCard.totalPrice}</p>
                </div>

            </div>
        </article>
    </>
}

export default ShoppingCard;
