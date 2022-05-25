import React from 'react'
import { useStateValue } from '../StateProvider'
import './../components/Product.css'

function Product(props) {
    
    const [{basket}, dispatch] = useStateValue();
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            },
        })
    }
    return (
        <div className = 'product'>
            <div className = 'productInfo'>
                <p>{props.title}</p>
                <p className = 'productPrice'>
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className = 'productRating'>
                    {Array(props.rating).fill().map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img className = 'productImage' src = {props.image} alt='product-img' />
            <button onClick = {addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
