import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider';
import { getCartTotal } from './reducer';
import {Link, useHistory} from 'react-router-dom'
import './../components/Subtotal.css'

function Subtotal() {
    const history = useHistory();
    const [{basket }, dispatch] = useStateValue();

    return (
        <div className = 'subtotal'>
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
            <button onClick = {e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
