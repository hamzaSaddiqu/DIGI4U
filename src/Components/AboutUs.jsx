import React from "react";
import { AboutProperties, assests } from "../assets/assets";
import { GoPlus } from "react-icons/go";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { MdSubdirectoryArrowRight } from "react-icons/md";

const AboutUs = () => {
  return (
    <div
      className="bg-[#ffffff] px-8 my-2 rounded-3xl"
      style={{ borderTopLeftRadius: "20%", borderTopRightRadius: "20%" }}
    >
      <h1 className="text-center text-2xl  py-4 text-[#EE3D1C]">About Us</h1>
      <div className="flex justify-center">
        <img
          className="flex items-center justify-center mt-5"
          src={assests.About}
          alt="About"
        />
      </div>
      <h1 className="text-center text-lg font-semibold">Welcome to Digi4u</h1>
      <p className="mx-24 mt-5 px-4 text-center text-sm">
        Digi4u Limited is a growing tech company based in Cardiff, specialising
        in smart phone/tablet replacement parts ranging from LCD & Touch screen
        digitizer, Charging port flex to Buzzer, Home Button and WIFI Antennas,
        etc. Along with accessories such as Cables, Bluetooth speakers,
        Earphones, Cases and Repair tools. Also having an expansive array of
        Gaming products such as Headsets, Mouse and Keyboards as well as Scooter
        parts, Camera and the other electronic products.
      </p>
      <p className="mx-24 mt-5 px-4 text-center text-sm">
        We also support the wholesale and dropship services for all our online
        and offline customers. In addition, we are the general agent of Joyroom
        and Remax in the UK. Sourcing from a network of over 100 reputed
        manufacturers allows us to offer products with competitively lower
        prices while retaining the highest standards of quality.
      </p>
      <p className="mx-24 mt-5 px-4 text-center text-sm">
        Over the last 11 years, Digi4u has established a strong presence in the
        online retail market within the UK, achieving an average positive
        feedback rating of more than 98%. Whilst stocking more than 5,000
        products and supported by our two spacious warehouses based in Cardiff,
        we have everything you need to keep you going.
      </p>
      <div className="mx-6 my-10 py-3 flex flex-wrap justify-between gap-y-10">
        {AboutProperties.map((item, index) => (
          <div key={index} className="flex w-[48%] gap-6">
            <img src={item.image} alt="" />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl leading-tight">{item.title}</h3>
              <p className="text-[20px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mx-6 my-4 border-t-2 style={{ borderColor: 'rgba(0, 0, 0, 0.04)' }}" />
      <div className="mx-6 py-6 flex justify-around">
        <div className="flex justify-end w-[45%] gap-4">
          <GoPlus size={40} />
          <h1 className="text-3xl font-semibold">SKELTON CASE</h1>
        </div>
        <div className="w-[30%] ">
          <p>
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className="mx-6 flex flex-wrap m-auto w-[60%] justify-between">
        <div className="w-[20%]  flex flex-col mt-12 gap-2">
          <div className="w-[100%] h-[300px] flex flex-col items-center justify-center gap-4 text-[#DCDCDC] text-[20px] bg-[#F7F7F7]">
            <IoMdArrowUp />
            <h3>Next</h3>
          </div>
          <div className="w-[100%] h-[300px] flex flex-col items-center justify-center gap-4 text-[#DCDCDC] text-[20px] bg-[#F7F7F7]">
            <h3>Back</h3>
            <IoMdArrowDown />
          </div>
        </div>
        <div className="w-[25%]">
          <div className="w-[90%] ml-9 flex items-center justify-center">
            <img src={assests.headerMain} alt="" />
          </div>
          <div className="bg-[#2E3044] w-[430px] h-[180px] rounded-lg ml-[-25px] relative">
            <div className="flex gap-4 py-3 px-3">
              <h1 className="text-[#ffffff] text-3xl">Shop</h1>
              <p className="border border-[#EE3D1C] text-[#ffffff] py-1 px-2 mt-1">
                iPhone 15 pro
              </p>
            </div>
            <div className="absolute bottom-3 right-3 text-[#EE3D1C] text-[25px]">
              <MdSubdirectoryArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
