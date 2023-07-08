import React from "react";

import { NavLink } from "react-router-dom";

import image from "../../assets/images/bitcoin5.png";

const AccountNav = ({ name }) => {
  return (
    <nav className="relative py-3">
      <div className="absolute -top-10 sm:-top-8 sm:-translate-y-2 left-0 md:-top-8 md:-translate-y-8">
        <img
          src={image}
          fetchpriority="high"
          alt="profile"
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-lg object-cover"
        />
        <h6 className="font-semibold mt-2 text-sm sm:text-base md:text-xl text-center">
          {name}
        </h6>
      </div>
      <ul className="ml-12 md:ml-0 flex items-center gap-2 md:gap-0 text-xs sm:text-sm flex-wrap md:text-lg justify-end md:justify-evenly uppercase font-semibold">
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 no-underline"
                : "text-black no-underline"
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/subscription"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 no-underline"
                : "text-black no-underline"
            }
          >
            Subscription
          </NavLink>
        </li>
        <li>Notification</li>
        <li>Ideas</li>
      </ul>
    </nav>
  );
};

export default AccountNav;
