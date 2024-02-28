import CartTable from './components/cart-table';
import CouponForm from './components/coupon-form';

export default function Cart()
{
  return (
    <>
      <section className="mt-100 h-custom">
          <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col">

                      <CartTable />

                      <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
                          <div className="card-body p-4">
                              <div className="row">
                                  <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                                      <CouponForm />
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                      <div className="d-flex justify-content-between" style={{ fontWeight: "500"}}>
                                          <p className="mb-2">Subtotal</p>
                                          <p className="mb-2">$998</p>
                                      </div>
                                      <div className="d-flex justify-content-between" style={{ fontWeight: "500"}}>
                                          <p className="mb-0">Shipping</p>
                                          <p className="mb-0">$20</p>
                                      </div>
                                      <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500"}}>
                                          <p className="mb-2">Coupon</p>
                                          <p className="mb-2">No</p>
                                      </div>

                                      <hr className="my-4" />

                                      <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500"}}>
                                          <p className="mb-2">Total</p>
                                          <p className="mb-2">$118</p>
                                      </div>

                                      <button type="button" className="btn btn-primary btn-block btn-lg">
                                          <div className="d-flex justify-content-between"><span>Checkout</span></div>
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
