import React from 'react';


export default class CouponForm extends React.Component {
    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row">
                            <form className="subscription-form validate">
                                <div className="input-group flex-wrap">
                                <input className="form-control btn-rounded-none" type="text" name="EMAIL" placeholder="" required="" />
                                <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="submit">Redeem</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
