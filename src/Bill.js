import React from 'react';
import { useSelector } from 'react-redux';
import "./Css/bill.css";
import { Link } from 'react-router-dom';

const Bill = () => {

  const cartItems=useSelector(store=>store.cart.items);
  let total=0;
  return (
    <div id='bill'>
            <h1 className='m-tp'>Thank You For Your Order !</h1>

            <div className='bill-description'>
                {cartItems.map((item)=>{
                  total+=item.price;
                  return(
                    <div className='bill-items'>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                  )
                })}
                 <h2>Total : $ {total}</h2>
                <Link to="/"> <button className='bill-btn'>Home</button></Link>
            </div>
           
    </div>
  )
}

export default Bill
