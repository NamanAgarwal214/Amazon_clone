import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, {useState} from 'react'
import { useStateValue } from '../StateProvider';
import CartItem from './CartItem';
import './Payment.css'
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';

function Payment() {

    const [{basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {

    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message:"");
    }

    return (
        <div className ='payment'>
            <div className = 'container'>
                <div className = 'payment_section'>
                    <div className = 'payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className = 'payment_address'>
                        <p>{user?.email}</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className = 'payment_section'>
                    <div className = 'payment_title'>
                        <h3>Review orders</h3>
                    </div>
                    <div className = 'payment_item'>
                        {basket.map(item => (
                    <CartItem 
                        id = {item.id} title = {item.title} price = {item.price} rating = {item.rating} image = {item.image}
                    />
    ))}
                    </div>
                </div>
                <div className = 'payment_section'>
                    <div className = 'payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className = 'payment_details'>
                        <form onClick = {handleSubmit}>
                            <CardElement onChange = {handleChange}/>
                        </form>
                    </div>
                    <div className = "payment_price">
                        <CurrencyFormat renderText = {(value) =>(
                            <>
                                <p>
                                    Subtotal ({basket?.length} items): <strong>{value}</strong>
                                </p>
                                <small className = 'subtotalGift'>
                                    <input type = "checkbox" />This order contains a gift
                                </small>
                            </>
                        )} 
                            decimalScale = {2} 
                            value = {getCartTotal(basket)} displayType = {"text"} thousandSeparator = {true}
                            prefix = {"₹"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
