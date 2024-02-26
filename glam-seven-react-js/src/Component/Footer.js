import React from "react";
import {Link} from "react-router-dom";

export default class Footer extends React.Component
{
    render()
    {
        return (
           <>
               <footer id="footer" className="overflow-hidden">
                    <div className="container">
                        <div className="row">
                        <div className="footer-top-area">
                            <div className="row d-flex flex-wrap justify-content-between">
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu">
                                    <img src="images/main-logo.png" alt="logo" />
                                    <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                                    <div className="social-links">
                                        <ul className="d-flex list-unstyled">
                                            <li><a href="#"></a></li>
                                            <li><a href="#"></a></li>
                                            <li><a href="#"></a></li>
                                            <li><a href="#"></a></li>
                                            <li><a href="#"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 pb-3">
                                <div className="footer-menu text-uppercase">
                                <h5 className="widget-title pb-2">Quick Links</h5>
                                <ul className="menu-list list-unstyled text-uppercase">
                                    <li className="menu-item pb-2"><a href="/">Home</a></li>
                                    <li className="menu-item pb-2"><Link to="/about">About</Link></li>
                                    <li className="menu-item pb-2"><a href="#">Shop</a></li>
                                    <li className="menu-item pb-2"><a href="#">Blogs</a></li>
                                    <li className="menu-item pb-2"><Link to="/contact">Contact</Link></li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu text-uppercase">
                                <h5 className="widget-title pb-2">Help & Info Help</h5>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item pb-2"><a href="#">Track Your Order</a></li>
                                    <li className="menu-item pb-2"><a href="#">Returns Policies</a></li>
                                    <li className="menu-item pb-2"><a href="#">Shipping + Delivery</a></li>
                                    <li className="menu-item pb-2"><a href="#">Contact Us</a></li>
                                    <li className="menu-item pb-2"><a href="#">Faqs</a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu contact-item">
                                <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                                <p>Do you have any queries or suggestions? <a href="mailto:junaidcoderz@gmail.com">junaidcoderz@gmail.com</a></p>
                                <p>If you need support? Just give us a call. <a href="wa.me/+971555116945">+971 555 1169 45</a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
           </>
        );
    }
}
