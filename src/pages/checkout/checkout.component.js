import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component.js';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.js'

const CheckoutPage = ({cartItems, total}) => {
console.log(cartItems[0])
return(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className ='header-block'>
                <span>Product</span>
            </div>
            <div className ='header-block'>
                <span>Description</span>
            </div>
            <div className ='header-block'>
                <span>Quantity</span>
            </div>
            <div className ='header-block'>
                <span>Price</span>
            </div>
            <div className ='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />))
        }
        <div className='total'>
            <span> TOTAL: ${total}</span>
        </div>
        <div>*PLEASE USE THIS CREDIT CARD NUMBER TO TEST THE PAYMENT</div>
        <div>4242 4242 4242 4242 -- Exp: 05/20  -- CW: 123</div>
        <StripeCheckoutButton  price={total}/>
    </div>
)}

const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)
(CheckoutPage);