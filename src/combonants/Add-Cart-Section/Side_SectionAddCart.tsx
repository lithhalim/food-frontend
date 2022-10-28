import React from 'react';


import PayMethod from '../../DataUse/Paymethod';

function Side_SectionAddCart({totalPrice}:any) {
  return (
  <div className='checkou-button-section'>
    <div className='Order-container'>
        <h3>Order Summary</h3>
        <ul >
            <li>subtotal</li>
            <li>
                <h2>{totalPrice!==undefined?totalPrice:<></>}.000 JOD</h2>
                <p>Reward 140 Points</p>
            </li>
        </ul>
        <button>Checkout Now</button>
        <p>Apply aCoupon Code Foodzi point next step</p>
    </div>
    <div className='AcceptOrder'>
        <h3>We Accept</h3>
        <div className='container-accept-pay'>
                {PayMethod.map(({image},i)=>(<img src={image} key={i} alt="" />))}
        </div>
    </div>
  </div>
)
}

export default Side_SectionAddCart
