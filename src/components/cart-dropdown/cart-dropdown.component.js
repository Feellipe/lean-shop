import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.componet'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector' 

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.lenght ?
                cartItems.map( cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} /> ))
                :
                <span className='empty-message'> Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
    </div> 
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));