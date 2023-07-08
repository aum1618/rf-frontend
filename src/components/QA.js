import React, { useState } from "react";
import Badge from "../assets/images/badge.svg";

export default function QA({
  question,
  icons = [],
  answer,
  showBorder,
  heading,
  info,
  btn,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4 ">
      {heading && (
        <h1 className="text-center text-[30px] mb-4 font-bold">{heading}</h1>
      )}
      <div className="flex space-x-4 items-center ">
        {question && <h1 className="text-[28px] flex-1">{question}</h1>}
        <div className="flex space-x-3">
          {icons.map((item) => (
            <img src={item} />
          ))}
        </div>
      </div>
      {answer && (
        <p
          className={`${
            !show && "line-clamp-1"
          } text-[#545454] text-[14px] opacity-100 pb-0 mb-0 `}
        >
          {answer}
        </p>
      )}
      <button
        onClick={() => setShow(!show)}
        className="text-[#003D8F] text-[16px] font-[900] mb-4 mt-2"
      >
        {btn && (show ? "SHOW LESS" : "SHOW MORE")}
      </button>
      {info && (
        <button className="text-[20px] bg-[#E0B83C] block font-semibold text-white py-1.5 px-3 rounded-md ">
          {info}
        </button>
      )}
      {showBorder && (
        <div className="flex w-full space-x-6 items-center my-20">
          <img src={Badge} />
          <div className="h-[8px] w-full bg-[#E0B83C]" />
        </div>
      )}
    </div>
  );
}
