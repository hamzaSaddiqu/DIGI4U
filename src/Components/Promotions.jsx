import React from "react";
import { assests, OurPromotions } from "../assets/assets";
import { IoCartOutline } from "react-icons/io5";
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Promotions() {
  return (
    <div className="bg-[#ffffff] rounded-3xl px-8 my-2 pb-8">
      <h1 className="text-[#000000] text-[140px] w-full block text-center font-bold leading-[260px]">
        OUR PROMOTIONS
      </h1>
      <div className="flex flex-wrap justify-between w-[60%] gap-12 mx-auto">
        {OurPromotions.map((item, index) => (
          <div
            className=" flex flex-col w-[47%]  rounded-lg bg-[#000000]"
            key={index}
          >
            {/* ------up------ */}
            <div className="mx-2">
              <h1 className="text-[32px] text-[#ffffff]">{item.title}</h1>
              <div className="flex justify-between ">
                <p className="text-[20px] font-thin mt-2 text-[#ffffff]">
                  {item.price}
                </p>
                <p className="text-[24px] text-[#ffffff] p-3 rounded-full border border-[#ffffff]">
                  <IoCartOutline />
                </p>
              </div>
              <p className="text-[#ffffff] mx-auto mb-3 w-[50%]">
                {item.content}
              </p>
            </div>
            {/* ------down------ */}
            <div
              className="bg-[#1e1c1c] rounded-lg "
              style={{
                borderTopLeftRadius: "40%",
                borderTopRightRadius: "40%",
              }}
            >
              <img className="mx-auto" src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <a href="#" className="text-[#EE3D1C] underline text-2xl">
          Explore More
        </a>
      </div>

      <div className="w-[100%] flex justify-between rounded-lg shadow-2xl my-[10px] py-10">
        <div className="ml-10 w-[70%]">
          <h1 className="text-[64px] font-[400] w-[70%]">
            Borem ipsum dolor sit amet consectetur
          </h1>
          <p className="w-[50%] ml-[100px] text-xs text-start">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <div className="bg-[#2E3044] w-[250px] h-[110px] my-5  rounded-md relative">
            <div className="flex gap-4 py-3 px-3">
              <h1 className="text-[#ffffff] text-3xl">Contact Us</h1>
            </div>
            <div className="absolute bottom-3 right-3 text-[#EE3D1C] text-[25px]">
              <MdSubdirectoryArrowRight />
            </div>
          </div>
        </div>
        <div className="w-[20%] h-[300px] flex items-center justify-center bg-black rounded-md">
          <img className="" src={assests.logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Promotions;
