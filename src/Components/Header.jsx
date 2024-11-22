import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
import { assests } from './../assets/assets';

const Header = () => {
  return (
    <div id='Header' className=' mt-5 mb-[70px]'>
      {/* ------Left-------- */}
      <div className='flex flex-wrap justify-between w-[100%]' >
      <div className='w-[40%] text-[#ffffff]'>
        <p className='border border-[#ffffff] text-center w-[150px] mx-auto rounded-md'>iPhone 15 pro</p>
        <h1 className='text-[64px]  text-center'>SKELTON CASE</h1>
        <div className='flex gap-5'>
          <p className='text-[50px] font-[100]'><FaPlus /></p>
          <p className='w-[45%] font-[100]'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='border relative border-[#ffffff] mt-[35px] w-[30%] h-[200px] flex flex-col justify-between rounded-md'>
          <p className='ml-3 mt-3'>Visit Shop</p>
          <p className='bottom-2 right-2 absolute text-[22px]'><MdSubdirectoryArrowRight /></p>
        </div>
        <div className='w-[30%] flex justify-between border border-[#ffffff] mt-1 p-2 rounded-md'>
        <p>SCROLL FOR MORE</p>
        <p className='text-[22px] mt-[2px] text-[#ffffff]'><IoIosArrowRoundDown /></p>
        </div>
        
      </div>
      {/* ------Right-------- */}
      <div className='w-[25%] h-[400px]'>
        <img className='w-[70%] h-[100%]' src={assests.headerMain} alt=''/>
      </div>
      </div>
      <div className='w-[50%] mx-auto flex flex-wrap justify-between '>
        <img className='w-[30%] h-[180px] mt-[53px]' src={assests.headerLeft} alt=''/>
        <img className='w-[40%] h-[300px]' src={assests.headerCenter} alt=''/>
        <img className='w-[30%] h-[180px] mt-[53px]' src={assests.headerRight} alt=''/>
      </div>
    </div>
  )
}

export default Header
