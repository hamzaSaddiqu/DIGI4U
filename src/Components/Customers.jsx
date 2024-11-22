import React from 'react'
import { CustomerData, DistributorData } from '../assets/assets'

const Customers = () => {
  return (
    <div className='bg-[#ffffff] px-8 pb-[50px] rounded-xl mb-2'>
        <div className='flex justify-between py-3'>
            <h1 className='p-2'>CUSTOMERS</h1>
            <button className='border border-[#00000] p-2 rounded-md'>CONTACT US</button>
            
        </div>
        <hr className="my-1 border-t border-dotted border-black" />

        <div className='flex justify-between'>
      {CustomerData.map((item,index)=>(
        <div key={index}>
            <img src={item.image} alt=""/>
        </div>
      ))}
      </div>
      <div className='w-100 border bg-[#F7F7F7] py-2 my-2 rounded-sm'>
        <h1 className='text-center text-lg font-semibold'>+126</h1>
        <p className='text-center'>other companies</p>
      </div>
      <h1 className='p-2'>DISTRIBUTORS</h1>
      <hr className="my-1 border-t border-dotted border-black" />
      <div className='flex flex-wrap gap-3'>
      {DistributorData.map((item,index)=>(
        
        <div key={index}>
            <img src={item.image} alt=""/>
        </div>
      ))}
</div>
    </div>
  )
}

export default Customers
