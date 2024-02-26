import React from 'react';

import Slider from "./../Home/Slider";
import Service from "./../Home/Service";
import Product from "./../Home/Product";
import Advertisment from "./../Home/Advertisment";
import Newsletter from "./../Home/Newsletter";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Slider />
                <Product />
                <Advertisment />
                <Service />
                <Newsletter />
            </>
        );
    }
}
