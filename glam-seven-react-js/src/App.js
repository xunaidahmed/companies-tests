import React from "react";
import {Route, Routes} from "react-router";

import Home             from "./App/Home/Home";
import About            from "./App/About/About";
import Shop             from "./App/Shop/Shop";
import ShoppingCart     from "./App/Cart/ShoppingCart";
import Contact          from "./App/Contact/Contact";

//Aditional Components
import LoaderSpinner from "./Component/LoaderSpinner";

export default class App extends React.Component
{
    // Constructor
   constructor()
   {
       super();

       this.state = {
           site_settings: {
            "site_setting":
            {
                "contact_support":
                {
                    "address": "Salahuddin, Dubai, United Arab Emirates",
                    "contact_phone": "+971 555 1169 45",
                    "contact_tel": "+971555116945",
                    "contact_email": "junaidcoderz@gmail.com"
                }
            }
        },
           is_spiner_loader: true
       };
   }

    render()
    {
        //const { api_data, setApiData} = useState(0);
        const { is_spiner_loader, site_settings } = this.state;

        if (!is_spiner_loader) return  <LoaderSpinner />;

        return (
            <>
                <Routes>
                    <Route path="/" element={<Home site_settings={site_settings}  />}></Route>
                    <Route path="/about" element={<About site_settings={site_settings}  />}></Route>
                    <Route path="/shop" element={<Shop site_settings={site_settings}  />}></Route>
                    <Route path="/cart" element={<ShoppingCart site_settings={site_settings}  />}></Route>
                    <Route path="/contact" element={<Contact site_settings={site_settings}  />}></Route>
                </Routes>
            </>
        );
    }
}
