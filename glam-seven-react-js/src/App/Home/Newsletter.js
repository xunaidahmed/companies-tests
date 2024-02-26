import React from 'react';

export default class Newsletter extends React.Component {

    render() {
        return (
            <>
                <section id="subscribe" className="container-grid padding-large position-relative overflow-hidden mb-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-5 col-sm-12" style={{ margin: "0 auto"}}>
                            <form className="subscription-form validate">
                                <div className="input-group flex-wrap">
                                <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required="" />
                                <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
