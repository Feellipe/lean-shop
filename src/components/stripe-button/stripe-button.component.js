import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100;
    const PublishibleKey = 'pk_test_g7meOPJ2ZxOAfbW7ozx6MEOh006QiL8R3Z';
    const onToken = token =>  {
        console.log(token)
        alert('Payment Successful') 
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Lol Skins'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={` Your total is $${price}`}
            amount={PriceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PublishibleKey}
        />
    )
}

export default StripeCheckoutButton;