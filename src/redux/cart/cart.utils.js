export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )

    if(existingCartItem) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    // a propriedade quantity será adicionada a primeira vez do loop já que não vai entrar no if block quando for um novo item 
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}