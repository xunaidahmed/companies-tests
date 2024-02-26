import React from 'react';

import CartTable  from "./Component/CartTable";
import CouponForm  from "./Component/CouponForm";

export default class ShoppingCart extends React.Component {
    render() {
        return (
            <>
                <section class="mt-100 h-custom">
                    <div class="container h-100 py-5">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col">
                                <CartTable />

                                <div class="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
                                    <div class="card-body p-4">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                                                <CouponForm />
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="d-flex justify-content-between" style={{ fontWeight: "500"}}>
                                                    <p class="mb-2">Subtotal</p>
                                                    <p class="mb-2">$998</p>
                                                </div>
                                                <div class="d-flex justify-content-between" style={{ fontWeight: "500"}}>
                                                    <p class="mb-0">Shipping</p>
                                                    <p class="mb-0">$20</p>
                                                </div>
                                                <div class="d-flex justify-content-between mb-4" style={{ fontWeight: "500"}}>
                                                    <p class="mb-2">Coupon</p>
                                                    <p class="mb-2">No</p>
                                                </div>

                                                <hr class="my-4" />

                                                <div class="d-flex justify-content-between mb-4" style={{ fontWeight: "500"}}>
                                                    <p class="mb-2">Total</p>
                                                    <p class="mb-2">$118</p>
                                                </div>

                                                <button type="button" class="btn btn-primary btn-block btn-lg">
                                                    <div class="d-flex justify-content-between"><span>Checkout</span></div>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
