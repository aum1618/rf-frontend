import React from "react";
import AccountNav from "../components/Account/AccountNav";
import HeroSection from "../components/Account/Hero";
import Logo from "../assets/icons/Logo";

const Subscription = () => {
  const [subscribed, setSubscribe] = React.useState(false);

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
    <>
      <HeroSection />
      <div className="container mx-auto space-y-6 mb-10">
        <AccountNav />
      </div>
      <section className="container mx-auto py-10">
        <h3 className="text-black">My subscriptions</h3>
        <p>All purchased subscriptions can be managed here.</p>
        {subscribed ? (
          <>
            <div className="border divide-y ">
              <h4 className="font-bold px-2 md:px-4 py-3">Subscription</h4>
              <div className="relative py-4 px-2 md:px-4">
                <h5 className="font-semibold">Current Plans</h5>
                <button className="absolute top-5 uppercase right-5 text-sm md:text-base  bg-primaryfont px-3 rounded-[3px] h-10 text-white font-medium">
                  Download Invoice
                </button>
                <h6 className="text-black mt-5">Silver</h6>
                <p className="text-black font-semibold">€9,99 per month</p>
                <div className="flex justify-between flex-col md:flex-row gap-2">
                  <button className="uppercase text-sm md:text-base bg-yellowbg px-5 rounded-[3px] h-10 text-white font-medium">
                    Upgrade
                  </button>
                  <div>
                    <button
                      onClick={() => setSubscribe(false)}
                      className="w-full md:w-fit uppercase text-sm md:text-base  bg-red-500 px-3 rounded-[3px] h-10 text-white font-medium"
                    >
                      Cancel Subscription
                    </button>
                    <p className="text-red-500 text-center mt-1">04/03/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col md:flex-row gap-3 items-center md:items-start justify-center">
            <Card best={false} type="silver" price="9,99" list={silver} />
            <Card best={true} type="gold" price="19,99" list={gold} />
            <Card best={false} type="platinum" price="49,99" list={platinum} />
          </div>
        )}
      </section>
    </>
  );
};

export default Subscription;

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
        {list.map((l) => (
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
