import React from "react";

export default function KryptoCard({ icon, title, detail }) {
  return (
    <div className="bg-[#E0B83C] px-12 py-8 rounded-lg">
      <img className="mb-4" src={icon} />
      <h1 className="mb-2">{title}</h1>
      <span>{detail}</span>
    </div>
  );
}
