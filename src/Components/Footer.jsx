import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TbBrandPicsart } from "react-icons/tb";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { assests } from '../assets/assets';
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-[#ffffff] px-8 rounded-lg mb-2 pb-4'>
    <div className=' w-[100%] flex justify-between py-6'>
        {/* ------left------ */}
        <div className='w-[48%] flex justify-between'>
            <div className='w-40%'>
                <h1 className='text-[#000000] font-semibold text-[24px]'>Our Services</h1>
                <ul className='cursor-pointer'>
                    <li>About</li>
                    <li>Delivery Policy</li>
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                </ul>
                <h1 className='text-[#000000] font-semibold text-[24px]'>Our Services</h1>
                <ul className='cursor-pointer'>
                    <li>Blog</li>
                    <li>Returns</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div className='w-[35%] bg-[#000000] h-[400px] cover'>
                <img className='w-[100%] h-[100%]' src={assests.FooterLogo}/>
            </div>
        </div>
        {/* ------Right------ */}
        <div className='w-[48%]'>
            <div className='w-[100%] flex justify-around'>
                <p>Digi4u ©2024</p>
                <p>All Rights Reserved</p>
            </div>
            <div className='flex gap-8 pt-10'>
                <div className='text-[25px] pt-2'><IoLocationOutline /></div>
                <div><p>3 Waterside Business Park,<br/> Cardiff CF3 2ET UK</p></div>
            </div>
            <div className='flex gap-8 pt-10'>
                <div className='text-[25px]'><CiPhone /></div>
                <div><p>(+44) 02920 360 596</p></div>
            </div>
            <div className='flex gap-8 pt-10'>
                <div className='text-[25px]'><MdOutlineEmail /></div>
                <div><p>customerservices@digi4u.co.uk</p></div>
            </div>
        </div>
        
    </div>
    <div className='w-[100%] flex justify-between '>
        <div className='flex justify-between w-[68%]'>
            <h1>Powered by: POGO Digital</h1>
            <h1>Terms and Conditions</h1>
        </div>
        <div className='w-[20%] flex gap-4'>
        <p className='p-3 border border-[#DEE0F5] rounded-full text-[#000000]'><FaFacebookF /></p>
        <p className='p-3 border border-[#DEE0F5] rounded-full text-[#000000]'><TbBrandPicsart /></p>
        <p className='p-3 border border-[#DEE0F5] rounded-full text-[#000000]'><CiInstagram /></p>
        <p className='p-3 border border-[#DEE0F5] rounded-full text-[#000000]'><FaTwitter /></p>
        </div>
    </div>
    </div>
  )
}

export default Footer