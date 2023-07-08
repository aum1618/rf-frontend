import React from "react";

function Mastercard({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 18"
      {...props}
    >
      <path
        fill="#E50517"
        d="M9.344 17.719a8.645 8.645 0 118.644-8.644 8.653 8.653 0 01-8.644 8.644z"
      ></path>
      <path
        fill="#FA9D1A"
        d="M17.755 17.719a8.644 8.644 0 118.643-8.646v.002a8.653 8.653 0 01-8.643 8.644z"
        opacity="0.5"
      ></path>
    </svg>
  );
}

export default Mastercard;
