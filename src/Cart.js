import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Css/cart.css"


const Cart = () => {
    const cartItems=useSelector(store=>store.cart.items);
    let total=0;

   
  return (
    
    <div id="container">
        <h1>Cart Details</h1>
        <div className='conatiner-cart'>

            <div className='left-half'>
              <h3>My Bag</h3>
              <hr />
              
                 {cartItems.map((obj)=>{
                 total+=obj.price;
        return(
            <>
            
            <div className='products cart-products' key={obj.id}>
            <img src={obj.image} alt="" />
            <div className='products-split'>
            <p>${obj.price}</p>
            <h4>{obj.title}</h4>
            </div>
            </div>
            <hr />
            
            </>
        )
        
      })}
        
      </div>
      <div className='right-half'>
      <h3 className='m-lr m-tp'>Total</h3>
      <hr />
      <br /> <br/>
      <p className='m-lr m-tp'><strong>SubTotal: </strong> ${total.toFixed(2)} </p>
      <p className='m-lr m-tp'><strong>Delivery</strong>:  - </p>
      <p className='m-lr m-tp'> <strong>Total Price</strong> : ${total.toFixed(2)}</p>
    <Link to="/bill">      <button id='order' className='m-lr cart-btn'>Place Your Order</button></Link>
      </div>
      
    </div>
    </div>
  )
}

export default Cart;
