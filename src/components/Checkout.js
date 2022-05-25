import React from 'react'
import CartItem from './../components/CartItem'
import Subtotal from './../components/Subtotal'
import { useStateValue } from '../StateProvider';
import './../components/Checkout.css'

function Checkout() {

    const [{basket }, dispatch] = useStateValue();

    return (
        <div className = 'checkout'>
            <div className = 'checkoutLeft'>
                <img className = 'checkoutImg' src = "https://m.media-amazon.com/images/I/71hEOCi9MVL._SX3000_.jpg" alt='checkout-img' />
                <div>
                <h2 className = 'checkoutTitle'>Your shopping basket</h2>
                {basket.map(item => (
                    <CartItem 
                        id = {item.id} title = {item.title} price = {item.price} rating = {item.rating} image = {item.image}
                    />
    ))}
            </div>
            </div>
            <div className = 'checkoutRight'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
