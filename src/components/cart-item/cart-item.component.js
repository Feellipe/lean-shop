import React from 'react'

import {ItemPrice, ItemName, ItemsDetails, ItemImage, CartItemContainer} from './cart-item.styles'

const CartItem = ({item : {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt='item'/>
        <ItemsDetails>
            <ItemName>{name} </ItemName>
            <ItemPrice>{quantity} x ${price}</ItemPrice>
        </ItemsDetails>
    </CartItemContainer>
)

export default CartItem;