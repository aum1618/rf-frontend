import React from "react";

function Cancel({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#EB5757"
        d="M13.53 7.53L11.06 10l2.47 2.47a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 11-1.06-1.06L8.94 10 6.47 7.53a.75.75 0 011.06-1.06L10 8.94l2.47-2.47a.751.751 0 011.06 1.06zM19.75 10A9.75 9.75 0 1110 .25 9.76 9.76 0 0119.75 10zm-1.5 0A8.25 8.25 0 1010 18.25 8.26 8.26 0 0018.25 10z"
      ></path>
    </svg>
  );
}

export default Cancel;
