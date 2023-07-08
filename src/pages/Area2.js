import React from "react";
import Search from "../assets/images/search.svg";
import Logo from "../assets/icons/Logo";
import bitIcon from "../assets/images/bitIcon.svg";
import appleIcon from "../assets/images/appleIcon.svg";
import amazonIcon from "../assets/images/amazonIcon.svg";
import chartIcon from "../assets/images/chartImg.png";

export default function Area2() {
  return (
    <div className=" py-10 px-[10px] sm:px-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-4 gap-x-8">
        <div
          style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.12)" }}
          className="bg-white px-6 rounded-lg h-[44px] items-center flex "
        >
          <input className="flex-1" placeholder="Search..." />
          <img src={Search} />
        </div>
        <div className="flex sm:col-span-3 items-center space-x-2 sm:space-x-10">
          <button className="uppercase bg-[#E0B83C] px-4 h-[42px] rounded-md text-white font-bold text-[14px]">
            subscription
          </button>
          <button className="uppercase bg-[#E0B83C] px-4 h-[42px] rounded-md text-white font-bold text-[14px]">
            compare area
          </button>
          <button className="uppercase bg-[#E0B83C] px-4 h-[42px] rounded-md text-white font-bold text-[14px]">
            try it out
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-4 mt-12 gap-x-8">
        <div className="px-4 bg-[#F6F6F6] text-[14px] font-semibold py-10 text-center">
          <button className="bg-[#E0B83C] py-2.5 rounded-lg w-full flex space-x-2 items-center justify-center mb-3 text-white font-bold text-[14px]">
            <img src={bitIcon} />
            <span>BITCOIN</span>
          </button>
          <button className="bg-[#E0B83C] py-2.5 rounded-lg  w-full flex space-x-2 items-center justify-center mb-3 text-white font-bold text-[14px]">
            <img src={appleIcon} />
            <span>APPLE</span>
          </button>
          <button className="bg-[#E0B83C] py-2.5 rounded-lg w-full flex space-x-2 items-center justify-center mb-3 text-white font-bold text-[14px]">
            <img src={amazonIcon} />

            <span>AMAZON</span>
          </button>
        </div>
        <div className="col-span-3   rounded-lg">
          <div className="flex items-center pb-3">
            <h6 className="flex-1 text-[14px] font-bold uppercase">
              name of Assets
            </h6>
            <h6 className="flex-1 text-[14px] font-bold uppercase">
              current price
            </h6>
            <h6 className="flex-1 text-[14px] font-bold uppercase">
              Our hit-rate
            </h6>
            <h6 className="flex-1 text-[14px] font-bold uppercase">
              other information
            </h6>
          </div>
          <div>
            <img src={chartIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
