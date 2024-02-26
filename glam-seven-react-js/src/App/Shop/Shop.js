import React from 'react';

import Item  from "./Component/Item";

export default class Shop extends React.Component {
    render() {
        return (
            <>
                <section className="product-store padding-large position-relative">
                    <div className="container mt-5">
                        <div className="row">
                        <div className="mb-3 display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Products</h2>
                        </div>
                        <div className="swiper product-watch-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                            <div className="swiper-wrapper" id="swiper-wrapper-6ada77d77c74dc8f" aria-live="polite">
                                <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" style={{ width: "315px", marginRight: "20px" }}>
                                    <Item />
                                </div>
                            </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>
                    </div>
                    <div className="swiper-pagination position-absolute text-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span></div>
                </section>
            </>
        );
    }
}
