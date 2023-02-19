import React from 'react';
import { useDispatch } from 'react-redux';
import './Css/body.css';
import { addItem } from './utils/cartSlice';
import Shimmer from './utils/Shimmer';
import useGetData from './utils/useGetData';

const Body = () => {

    const products=useGetData();
    
    const dispatch=useDispatch();

    const handleAddItem=(obj)=>{
        dispatch(addItem(obj))
    }

   
    if(products===null) return <Shimmer />
  return (
    <div className='conatainer'>
        {products.map((obj)=>{
         return  (
            <div key={obj.id} className='products'>
            <img src={obj.image} alt="" />
         <h3> {obj.title}</h3>
         <p>Price:${obj.price}</p>
         <button className='btn' onClick={()=> handleAddItem(obj)}>Add To Cart</button>
         </div>
         )
        })}
    </div>
  )
}

export default Body
