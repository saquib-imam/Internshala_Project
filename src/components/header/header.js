import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from '../../context-api/StateProvider';
import { auth } from '../../firebase';

function header() {
    const [{ basket,user },] = UseStateValue();

    const handleAuthentication = (e) =>{
        // e.preventDefault();
        if(user){
            auth.signOut();
        }
    }
    return (
        <>
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Coronavirus_SVG_Vector_Image.svg" alt='logo'/>
            </Link>
            <div className="header_search">
                <input
                className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionone">Hello Guest</span>
                        <span className="header_optiontwo">{user?"Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionone">Make</span>
                    <span className="header_optiontwo">Requests</span>
                </div>
                <div className="header_option">
                    <span className="header_optionone">Your</span>
                    <span className="header_optiontwo">Requests</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optiontwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>    
        </div>
        </>
    )
}

export default header
