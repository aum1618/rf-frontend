import React from "react";
import bitcoin1 from "../assets/images/bitcoin1.png";
import bitcoin2 from "../assets/images/bitcoin2.png";
import bitcoin3 from "../assets/images/bitcoin3.png";
import bitcoin4 from "../assets/images/bitcoin4.png";
import bitcoin5 from "../assets/images/bitcoin5.png";
import bitcoin7 from "../assets/images/bitcoin7.png";
import bitcoin8 from "../assets/images/bitcoin8.png";
import Badge from "../assets/images/badge.svg";
import large from "../assets/images/large.png";
import Pricebar from "../components/Pricebar";

export default function Bitcoin() {
  return (
    <div>
      <Pricebar />
      <div className="px-[80px]">
        <div className="grid grid-cols-2 gap-10 mt-28">
          <div className="bg-[#E0B83C] rounded-[10px] p-10 pr-20">
            <h3 className="font-[600] text-black text-[28px]">
              Short term trading
            </h3>
            <p className="text-[12px] text-[#000]/100 opacity-100 mb-0 pb-2">
              If you want to trade short-term, the following buy and sell limits
              are recommended: Buy li...
            </p>
            <button className="text-[14px] font-bold text-[#003D8F]">{`Read More >`}</button>
          </div>
          <div className="bg-[#E0B83C] rounded-[10px] p-10 pr-20">
            <h3 className="font-[600] text-black text-[28px] ">
              Long Term Trading
            </h3>
            <p className="text-[12px] font-[400] text-[#000]/100 opacity-100 mb-0 pb-2">
              If you would like to hold the cryptocurrency longer, the following
              buy and sell limits would...
            </p>
            <button className="text-[14px] font-bold text-[#003D8F]">{`Read More >`}</button>
          </div>
        </div>
        <div className="flex space-x-4  justify-center items-center my-10">
          <button className="bg-[#E0B83C] uppercase text-[14px] font-bold text-white py-2 px-5 rounded-[4px] ">
            last analysis
          </button>
          <button className="bg-[#003D8F] uppercase text-[14px] font-bold text-white py-2 px-5 rounded-[4px] ">
            current video analysis
          </button>
        </div>
        <div className="mb-32">
          <span className="text-[14px] font-[400]">Last update:</span>
          <span className="text-[14px] font-[400] block">
            March 21, 2023 at 02:13:29
          </span>
        </div>
        <div className="bg-[#E0B83C] h-[8px] w-[80%]" />
        <div className="pt-12">
          <h1 className="text-[34px] font-[900] mb-6">Archive</h1>
          <div className="grid grid-cols-4 gap-8">
            <img className="col-span-3 w-full h-full" src={bitcoin1} />
            <div className="grid grid-cols-2  gap-3">
              <img className="w-full h-full" src={bitcoin2} />
              <img className="w-full h-full" src={bitcoin3} />
              <img className="w-full h-full" src={bitcoin4} />
              <img className="w-full h-full" src={bitcoin5} />
              <img className="w-full h-full" src={bitcoin7} />
              <img className="w-full h-full" src={bitcoin7} />
              <img className="w-full h-full" src={bitcoin8} />
              <img className="w-full h-full" src={bitcoin8} />
            </div>
          </div>
          <h1 className="text-[34px] font-[900] mt-6">Bitcoin | 03/20/2023</h1>
          <p className="opacity-100 m-0 p-0 text-[14px] font-[400] mb-8">
            Bitcoin wants to know. Since the weekend analysis comes the 161.80%
            Fib. resistance closer. In order for the scenario of the
            overshooting wave (b) to remain valid, $28,793 must not be exceeded
            on a sustained basis. At the moment we are very close to the border
            of the mentioned price zone. If this is exceeded sustainably, we see
            the price range of $37,859 - $42,177 as the next target.
          </p>
          <div className="grid grid-cols-4 max-w-[620px] mx-auto gap-y-6 gap-x-8 my-12">
            {[
              "bitcoin",
              "solana",
              "cardano",
              "polygon",
              "ethereum",
              "quant",
              "cosmos",
              "vechain",
            ].map(item => (
              <button
                key={item}
                className="bg-[#E0B83C]  py-2 text-white uppercase text-[13px] font-bold rounded-[4px]"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex space-x-6 items-center my-20">
            <img src={Badge} />
            <div className="h-[8px] w-full bg-[#E0B83C]" />
          </div>
          <img src={large} className="w-full h-full my-16 pb-10" />
        </div>
      </div>
    </div>
  );
}
