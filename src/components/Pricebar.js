import React from "react";
import bitcoin from "../assets/images/bitcoin.svg";
import cardano from "../assets/images/cardano.svg";
import cosmos from "../assets/images/cosmos.svg";
import solana from "../assets/images/solana.svg";
import tradingView from "../assets/images/tradingView.svg";

export default function Pricebar() {
  const data = [
    {
      logo: bitcoin,
      name: "Bitcoin",
      price: "28334",
      change: "-142.00 (-0.50%)",
    },
    {
      logo: solana,
      name: "Solana",
      price: "20.95",
      change: "-0.22(-1.04)",
    },
    {
      logo: cardano,
      name: "Cardano",
      price: "28334",
      change: "-0.006 (-1.50%)",
    },
    {
      logo: cosmos,
      name: "Cosmos",
      price: "1.1586577",
      change: "-0.0364608 (-1.30%)",
    },
  ];
  return (
    <div className="bg-[#E0B83C]  hidden h-[45px] sm:flex items-center justify-between px-3">
      {data.map(item => (
        <div className="flex space-x-2.5 text-white text-[15px] font-[600]">
          <img src={item.logo} />
          <span className="">{item.name}</span>
          <span>{item.price}</span>
          <span className="text-[#EB5757]">{item.change}</span>
        </div>
      ))}
      <img src={tradingView} />
    </div>
  );
}
