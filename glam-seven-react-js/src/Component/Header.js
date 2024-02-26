import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component
{
    render()
    {
        return (
            <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
                <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="images/main-logo.png" className="logo" alt="" />
                        </a>
                        <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                            <div className="offcanvas-header px-4 pb-0">
                            <a className="navbar-brand" href="/">
                                <img src="images/main-logo.png" className="logo" alt="" />
                            </a>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><a className="nav-link me-4" href="#jewelery-products">Jewelery</a></li>
                                    <li className="nav-item"><a className="nav-link me-4" href="#men-products">Men's</a></li>
                                    <li className="nav-item"><a className="nav-link me-4" href="#women-products">Women's</a></li>
                                    <li className="nav-item"><Link to="/shop" className="nav-link me-4">Shop</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link me-4">Contact</Link></li>
                                    <li className="nav-item">
                                        <div className="user-items ps-5">
                                            <ul className="d-flex justify-content-end list-unstyled">
                                                <li className="search-item pe-3">
                                                    <a href="#" className="search-button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="pe-3">
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/cart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
