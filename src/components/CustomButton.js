import React from "react";

export default function CustomButton({ text, styles, onClick }) {
  return (
    <button className="custom-button" onClick={onClick} style={styles}>
      {text}
    </button>
  );
}
