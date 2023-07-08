import React from "react";
import "../styles/components/card.scss";
import clicks from "../assets/images/clicks.svg";

export default function Card({ pic, name, title, detail }) {
  return (
    <div className="currencies">
      <div className="currency">
        <div className="image">
          <div className="name">{name}</div>
          <div className="img">
            <img src={pic} alt="quant" width={"173px"} height={"120px"} />
          </div>
          <div className="date">04/01/2023</div>
        </div>
        <h4>{title}</h4>
        <p>{detail}</p>
        <div className="more">
          <p className="read">Read More &gt;</p>
          <p className="clicks">
            <img src={clicks} alt="click-image" /> 12k clicks
          </p>
        </div>
      </div>
    </div>
  );
}
