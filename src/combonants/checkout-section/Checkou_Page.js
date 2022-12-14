import React from 'react';
import Payment_Information from './Payment_Information';
import Sale_Information from './Sale_Information';
import "./style/style.scss";


import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"
const connectionStrip=loadStripe(process.env.REACT_APP_STRIP_API)


function Checkou_Page() {
  return (
    <Elements stripe={connectionStrip}>
       <h2  className="header-section-checkout"> Welcome to the payment page</h2>
        <div className='checkout-container-All-payment' >
            <Payment_Information/>
            <Sale_Information/>
        </div>
    </Elements>
  )
}

export default Checkou_Page