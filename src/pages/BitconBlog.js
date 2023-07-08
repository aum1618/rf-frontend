import React, { useState } from "react";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import youtube from "../assets/images/youtube.png";
import Badge from "../assets/images/badge.svg";
import Card from "../components/Card";
import bitcoin from "../assets/images/bitcoin.png";
import solana from "../assets/images/solana.png";
import etherium from "../assets/images/etherium.png";
import quant from "../assets/images/quant.png";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";

export default function BitconBlog() {
  const [selectedButton, setSelectedButton] = useState("all");
  const location = useLocation();
  const blog = location.state.blog;
  const cardData = [
    {
      pic: quant,
      title: "Weekend analysis: (QNT)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
      name: "QUANT",
    },

    {
      name: "SOLANA",
      pic: solana,
      title: "Weekend analysis: (SOL)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
    },
    {
      name: "ETHERIUM",
      pic: etherium,
      title: "Weekend analysis: (ETH)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
    },
    {
      name: "BITCOIN",
      pic: bitcoin,
      title: "Weekend analysis: (BTC)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
    },
  ];
  return (
    <div>
      <div className="flex items-center overflow-scroll sm:overflow-hidden justify-between bg-[#E0B83C] px-[10px] sm:px-[80px]">
        {[
          "all",
          "bitcoin",
          "ethereum",
          "cardano",
          "cosmos",
          "polygon",
          "quant",
          "solana",
          "veChain",
          "more",
        ].map((tab) => (
          <button
            onClick={() => setSelectedButton(tab)}
            className={`capitalize p-2.5 px-4 text-[16px] font-[900] ${
              selectedButton === tab && "bg-white"
            } `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="sm:px-[80px] px-[10px] mt-[50px]">
        <h1 className="text-[30px] font-extrabold">{blog.heading}</h1>
        <span className="text-[#E0B83C] font-[1000] text-[18px]">
          {moment(blog.date).format("DD MMMM YYYY")}
        </span>
        {blog.sections.map((section, id) => {
          return (
            <div
              key={id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p className="font-[900] text-[15px] opacity-100 pb-2 mb-0 mt-12">
                {section.title}
              </p>
              <p className="tracking-[0.5px] text-[13px] opacity-100 font-[400] pb-0 mb-0 ">
                {section.description}
              </p>
              <img className="my-4  w-full" src={section.image} alt="good" />{" "}
            </div>
          );
        })}
      </div>

      <div className="bg-white sm:px-[80px] px-[10px] sm:py-16 py-8 mt-8">
        <div className="flex space-x-6 items-center mb-16">
          <img src={Badge} />
          <div className="h-[8px] w-full bg-[#E0B83C]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((item) => (
            <Card
              name={item.name}
              pic={item.pic}
              title={item.title}
              detail={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
