import React from 'react';

export default class Slider extends React.Component {
    render() {
        return (
            <>
                <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
                    <div className="swiper main-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                        <div className="swiper-wrapper" id="swiper-wrapper-3b32b64fb5d7df9f" aria-live="polite">
                        <div className="swiper-slide swiper-slide-active" style={{ width: "2114px"}} role="group" aria-label="1 / 2">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="banner-content">
                                            <h1 className="display-2 text-uppercase text-dark pb-5">Super Flash Sale 50% OFF</h1>
                                            <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="image-holder"><img src="images/banner-image.png" alt="banner" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2"style={{ width: "2114px"}}>
                            <div className="container">
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col-md-6">
                                <div className="banner-content">
                                    <h1 className="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                                </div>
                                </div>
                                <div className="col-md-5">
                                <div className="image-holder">
                                    <img src="images/banner-image.png" alt="banner" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    <div className="swiper-icon swiper-arrow swiper-arrow-prev" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-8e966e618222e9d4" aria-disabled="false">
                    </div>
                    <div className="swiper-icon swiper-arrow swiper-arrow-next" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-8e966e618222e9d4" aria-disabled="true">
                    </div>
                </section>
            </>
        );
    }
}
