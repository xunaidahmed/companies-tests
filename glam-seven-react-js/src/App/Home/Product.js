import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import Item  from "./../Shop/Component/Item";

function Product()
{

    const [jeweleryItems, setJeweleryItems] = useState([]);
    const [menItems, setMenItems]           = useState([]);
    const [womenItems, setWomenItems]       = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/category/jewelery?limit=8')
        .then(res=>res.json())
        .then((json) => setJeweleryItems(json) );

        fetch("https://fakestoreapi.com/products/category/men's clothing?limit=8")
        .then(res=>res.json())
        .then((json) => setMenItems(json) );

        fetch("https://fakestoreapi.com/products/category/women's clothing?limit=8")
        .then(res=>res.json())
        .then((json) => setWomenItems(json) );

    }, []);

    console.log('jeweleryItems', jeweleryItems);

    return (
        <>
            <section id="jewelery-products" className="mt-5 product-store position-relative padding-large no-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Jewelery</h2>
                        </div>
                        <div class="swiper product-items-swiper">
                            <div class="swiper-wrapper">
                                { jeweleryItems ? jeweleryItems.map((item, index) => <Item key={ index } item={item} /> ): null }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination position-absolute text-center"></div>
            </section>
            <section id="men-products" className="product-store position-relative padding-large no-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Men's</h2>
                        </div>
                        <div className="swiper product-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                            <div className="swiper-wrapper" id="swiper-wrapper-c9d4e1182fcf8106f"  aria-live="polite">
                                { menItems ? menItems.map((item, index) => <Item key={ index } item={item} /> ): null }
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination position-absolute text-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>
                    <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                </div>
            </section>
            <section id="women-products" className="product-store position-relative padding-large no-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Women's</h2>
                        </div>
                        <div className="swiper product-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                            <div className="swiper-wrapper" id="swiper-wrapper-c9d4e1182fcf8106f"  aria-live="polite">
                                { womenItems ? womenItems.map((item, index) => <Item key={ index } item={item} /> ): null }
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination position-absolute text-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>
                    <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                </div>
            </section>
        </>
    );
}

export default Product;