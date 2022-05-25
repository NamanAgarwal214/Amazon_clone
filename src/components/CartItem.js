import React from 'react'
import './../components/CartItem.css'
import { useStateValue } from '../StateProvider'

function CartItem(props) {

    const [{basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: props.id
        })
    }

    return (
        <div className = 'cartItem'>
            <div className = 'itemImage'>
                <img className = 'cartItemImg' src = {props.image} alt = 'prod_img' />
            </div>
            <div className = 'cartItemInfo'>
                <p className = 'itemTitle'>{props.title}</p>
                <p className = 'itemPrice'>
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className = 'itemRating'>
                    {Array(props.rating).fill().map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick = {removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CartItem
