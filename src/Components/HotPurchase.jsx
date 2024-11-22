import React from "react";
import { HotItems } from "../assets/assets";
import { BsCart3 } from "react-icons/bs";

const HotPurchase = () => {
  return (
    <div id="HotPurchase" className="bg-[#ffffff] rounded-3xl px-8 py-5 my-2">
      <h1 className="bg-gradient-to-b from-[#DEE0F5] to-[#FFFFFF] text-transparent bg-clip-text text-[180px] w-full block text-center font-bold leading-[260px]">
        HOT PURCHASE
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
  {HotItems.map((item, index) => (
    <div
      key={index}
      className="w-[32%]  border border-gray-300  p-4"
    >
      <p className="w-[40%] text-center rounded-md border border-[#EE3D1C] text-[#000000] py-1 px-2">{item.name}</p>
      <div className="flex justify-center items-center mt-3">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full h-auto"
        />
      </div>
      <h1 className="text-xl font-semibold mt-1">{item.title}</h1>
      <div className="flex justify-between mt-2">
        <p className="text-lg mt-3">{item.price}</p>
        <p className="cursor-pointer text-3xl border border-gray-600 p-3 rounded-full"><BsCart3 /></p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default HotPurchase;
