import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { assests } from '../assets/assets';

const WhatsNew = () => {
  return (
    <div className="bg-[#ffffff] rounded-3xl px-8 my-2">
      <h1 className="text-[#000000] text-[210px] w-full block text-center font-bold leading-[260px] m-0 p-0">
        WHAT'S NEW
      </h1>
      <div className='w-[100%] h-[480px] flex flex-wrap justify-between'>
        {/* ------left------- */}
        <div className='w-[50%]'>
            <p className="w-[20%] text-center rounded-md border border-[#EE3D1C] text-[#000000] py-1 px-2">iPhone Cases</p>
            <h1 className="text-5xl font-semibold  my-8">Skelton Case</h1>
            <p className='ml-[50%]'>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='flex justify-between'>
                <p className='text-xl mt-3'>98.0 USD</p>
                <p className='text-3xl border rounded-full p-5 text-white bg-[#EE3D1C]'><IoCartOutline /></p>
            </div>
            <div className='w-[100%] flex flex-wrap gap-4 my-2'>
    <p className='border border-[#DEE0F5] w-[40%] p-3 flex justify-center items-center text-[2rem] text-[#EE3D1C] rounded-lg'>
        <IoIosArrowRoundBack />
    </p>
    <p className='border border-[#DEE0F5] w-[40%] p-3 flex justify-center items-center text-[2rem] text-[#EE3D1C] rounded-lg'>
        <IoIosArrowRoundForward />
    </p>
</div>

        </div>
        {/* ------Right------- */}
        <div className='w-[40%]'>
            <img className='w-[400px] h-[400px]' src={assests.What4New} alt="assets"/>
        </div>
      </div>
    </div>
  )
}

export default WhatsNew
