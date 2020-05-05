import React from 'react'
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'
import {RemoveButton, Value, Arrow, QuantitySpan, TextSpan, ImageElement, ImageContainer, CheckoutItemContainer} from './checkout-item.styles'


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem }) => {
const {name, imageUrl, price, quantity} = cartItem

return(
    <CheckoutItemContainer>
        <ImageContainer>
            <ImageElement alt='item' src={imageUrl}></ImageElement>
        </ImageContainer>
        <TextSpan> {name}</TextSpan>
        <QuantitySpan>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094; </Arrow>
            <Value>{quantity} </Value>
            <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
        </QuantitySpan>
        <TextSpan> {price} </TextSpan>
        <RemoveButton  onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
        
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);