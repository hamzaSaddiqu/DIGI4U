import React from 'react'
import { OurBrands } from '../assets/assets'

const BrandsMenu = () => {
  return (
    <div id='BrandsMenu' className='flex flex-wrap justify px-8'>
        {OurBrands.map((item,index) =>(
            
            <img className='w-[339px] h-[389px]'
            key={index} 
            src={item.image} 
            alt={`Brand ${index + 1}`}/>
        ))}
    </div>
  )
}

export default BrandsMenu