import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Css/header.css";



const Header = () => {

    const cartItems=useSelector(store=> store.cart.items);

    

  return (
    <div id='navbar'>
            <h2>Add to cart</h2>
            <Link to="./cart"> <i className="fa-solid fa-cart-shopping" current-count={cartItems.length}></i></Link> 

    </div>
  )
}

export default Header;
