import React from 'react';

export default class Advertisment extends React.Component {
    render() {
        return (
            <>
                <section className="bg-light-blue overflow-hidden mt-5 advers-banner-2" style={{ backgroundImage: "url('images/single-image1.png')", backgroundPosition: "right", backgroundRepeat: 'no-repeat' }}>
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-md-6 col-sm-12">
                        <div className="text-content offset-4 padding-medium">
                            <h2 className="display-3 pb-3 text-bold">Adidas Men Running shoes Sneakers</h2>
                            <p className='pb-5 '>Performance and design. Taken right to the edge.</p>
                            <a href="/shop" className="btn-shop text-uppercase btn-rounded-none">Shop Now</a>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-12"></div>
                    </div>
                </section>
            </>
        );
    }
}
