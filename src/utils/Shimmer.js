import React from 'react';
import '../Css/shimmer.css'

const Shimmer = () => {
  return (
    <div className='shimmer'>
        
        {Array(10).fill("").map(    (e,index)=>    <div key={index} className="shimmer-card"></div>
            )}
    </div>
  )
}

export default Shimmer
