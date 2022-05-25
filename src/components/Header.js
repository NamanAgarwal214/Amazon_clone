import React from 'react';
import './../components/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { auth} from "./../firebase";
import {signOut } from "firebase/auth";


function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    
    const handleAuth = () => {
        if(user){
            signOut(auth);
        }
    }

    return (
        <div className = 'header'>
            <Link to = '/'>
                <img className = 'headerLogo' src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png' alt = "amazon-logo" />
            </Link>
            
            <div className = 'headerSearch'>
                <input className = 'headerSearchInput' type = 'text' />
                <SearchIcon className = "headerSearchIcon"/>
            </div>

            <div className = 'headerNav'>
                <Link to = {!user && '/login'}>
                    <div className = 'headerOption' onClick = {handleAuth}>
                        <span className = 'optOne'>Hello</span>
                        <span className = 'optTwo'>{user?'Sign Out':'Sign in'}</span>
                    </div>
                </Link>
                <div className = 'headerOption'>
                    <span className = 'optOne'>Returns</span>
                    <span className = 'optTwo'>& Orders</span>
                </div>
                <div className = 'headerOption'>
                    <span className = 'optOne'>Your</span>
                    <span className = 'optTwo'>Prime</span>
                </div>
            </div>
            <Link to = '/checkout'>
                <div className = 'headerBasketIcon'>
                <ShoppingCartIcon />
                <span className = 'basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
