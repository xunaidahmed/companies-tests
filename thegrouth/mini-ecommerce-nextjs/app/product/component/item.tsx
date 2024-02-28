import Image from 'next/image'

export default function Item( { item } )
{
    //let item = props.item;

    console.log('----item detail product compoents', item);

    return (
        <>
            <div className='swiper-slide' style={{ width: "315px", marginRight: "20px" }}>
                <div className="product-card position-relative">
                    <div className="image-holder">
                        <img src={ item ? item.image : 'images/product-item6.jpg' } alt="product-item" className="img-fluid" />
                    </div>
                    <div className="cart-concern position-absolute">
                        <div className="cart-button d-flex">
                            <a href="#" className="btn-concern-box btn-wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </a>
                            <a href="#" className="btn-concern-box btn-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-detail justify-content-between align-items-baseline pt-3">
                        <h3 className="row card-title item-name"><a href="#" >{ item ? item.title : null  }</a></h3>
                        <div className='col-md-12 d-flex'>
                            <div className="col-md-6 item-price">$ { item ? item.price : null  }</div>
                            <div className="col-md-6 item-sale-price"><b style={{ textDecoration: 'line-through'}}>$ { item ? item.price : null  }</b> <span>24 %OFF</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
