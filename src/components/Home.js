import React from 'react'
import './../components/Home.css'
import Product from './../components/Product'

function Home() {
    return (
        <div className = 'home'>
            {/* <p>Here comes home component</p> */}
            <div className = 'container'>
                <img className = 'homeCover' src = "https://m.media-amazon.com/images/I/71FSVYGiPEL._SX3000_.jpg" alt = 'home_cover_page' />
                <div className = 'homeRow'>
                    <Product id = {12543} title = 'The lean Startup' price = {20.00} image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating = {4}/>
                    <Product id = {2345} title = 'The lean Startup' price = {20.00} image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating = {4} />
                </div>
                <div className = 'homeRow'>
                    <Product id = {23675} title = 'The lean Startup' price = {20.00} image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating = {4} />
                    <Product id = {23765} title = 'The lean Startup' price = {20.00} image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating = {4} />
                    <Product id = {28455} title = 'The lean Startup' price = {20.00} image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating = {4} />
                </div>
                <div className = 'homeRow'>
                    <Product id = {12376} title = 'The lean Startup' price = {20.00} image = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating = {4} />
                </div>
            </div>
        </div>
    )
}

export default Home
