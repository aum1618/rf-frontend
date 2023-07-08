import React from "react";
import Search from "../assets/images/search.svg";
import Logo from "../assets/icons/Logo";

export default function Area1() {
  const silver = [
    "Analyse von Bitcoin & Ethereum",
    "Medium and long-term trading areas",
    "Access to the newsroom",
  ];

  const gold = [
    "Analysis of cryptocurrencies below",
    "Bitcoin (BTC) / Ethereum (ETH)",
    "Solana (SOL) / Quant (QNT)",
    "Cardano (ADA) / Cosmos (ATOM)",
    "Polygon (MATIC) / VeChain (VET)",
    "Access to the exclusive trading area",
    "+ Silver membership benefits",
  ];

  const platinum = [
    "Access to the Crypto QuickView",
    "Availability via video call",
    "1 personal meeting per year on request",
    "+ Gold membership benefits",
  ];
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
        <div className="bg-[#F6F6F6] px-2 text-[14px] font-semibold py-6 text-center">
          Infomation: No subscribed assets
        </div>
        <div className="col-span-3 bg-[#F6F6F6] p-8 rounded-lg">
          <h1 className="text-center text-[28px] pb-6 font-extrabold">
            Krypto-Abo-Box
          </h1>
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start justify-center">
            <Card best={false} type="silver" price="9,99" list={silver} />
            <Card best={true} type="gold" price="19,99" list={gold} />
            <Card best={false} type="platinum" price="49,99" list={platinum} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ best, type, price, list }) => {
  return (
    <div className="relative px-4 py-5 w-96 h-auto border text-center">
      {best && (
        <div className="absolute w-full top-0 left-0 bg-yellowbg text-center text-white py-1.5">
          Best Seller
        </div>
      )}
      <div className="p-3 bg-primaryfont rounded-full w-fit mx-auto">
        <Logo
          className={`${
            type === "gold"
              ? "text-yellowbg"
              : type === "silver"
              ? "text-gray-300"
              : "text-neutral-400"
          } h-10 w-10`}
        />
      </div>
      <h3 className="capitalize text-black mt-3">{type}</h3>
      <h6>
        €<span className="text-2xl font-bold">{price}</span>/month
      </h6>
      <p>Monthy Cancellable</p>
      <p className="text-green-600 font-semibold">14 days free trail</p>
      <button className="uppercase py-2.5 text-white w-full bg-yellowbg rounded-[3px]">
        Try it for free
      </button>
      <ul className="mt-3 list-outside text-left p-0 space-y-2">
        {list.map(l => (
          <li className="flex items-center justify-start gap-x-2 uppercase text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 16 14"
            >
              <path
                fill="#E0B83C"
                d="M15.335 7l-1.627-1.853.227-2.454-2.407-.546-1.26-2.12L8.001 1 5.735.027l-1.26 2.12-2.407.54.227 2.453L.668 7l1.627 1.853-.227 2.46 2.407.547 1.26 2.12L8 13l2.267.973 1.26-2.12 2.407-.546-.227-2.454L15.335 7zm-8.667 3.333L4.001 7.667l.94-.94 1.727 1.72 4.393-4.394.94.947-5.333 5.333z"
              ></path>
            </svg>
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
};
