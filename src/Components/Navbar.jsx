import React from "react";
import { assests } from "../assets/assets";
import { FaAngleDown } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full">
      <img src={assests.logo} alt="logo" />
      <ul className="flex items-start gap-9 bg-[#000000] text-[#ffffff] h-12 mt-8 p-3 rounded-md cursor-pointer">
        <li><a href="#Header">Categories</a></li>
        <li className="mt-1"><FaAngleDown/></li>
        <li><a href="#HotPurchase">Hot Purchase</a></li>
        <li><a href="#BrandsMenu">Our Brands</a></li>
        <li>Contact Us</li>
        <li className="mt-1"><IoPersonOutline/></li>
      </ul>
    </div>
  );
};

export default Navbar;
