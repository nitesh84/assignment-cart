import React, { useEffect, useState } from 'react'

const useGetData = () => {


    const [products,setProducts]=useState(null);

    useEffect(()=>{
        getData();
    
    },[]);

    async function getData(){
      const data= await fetch('https://fakestoreapi.com/products');
      const json=await data.json();
      setProducts(json);
    }

    return products;
}
export default useGetData;
