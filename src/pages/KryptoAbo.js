import { useState } from "react";
import Mastercard from "../assets/icons/Mastercard";
import Apple from "../assets/icons/Apple";
import Paypal from "../assets/icons/Paypal";
import Google from "../assets/icons/Google";

const KryptoAbo = () => {
  const [isSigned, setSigned] = useState(true);
  return (
    <>
      <div className="cover-bg h-[70vh]">
        <div className="grid place-content-center h-full w-full">
          <h1 className="place-self-center font-bold">Krypto-Abo-Box</h1>
          <p className="place-self-center text-center w-full px-2 sm:px-3 md:px-0 md:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <h2 className="font-bold">BOX</h2>
        <hr />
        <section className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/3 relative">
            <div className="space-y-5 relative py-4">
              <ol className="list-inside list-decimal" id="krypto">
                <li className="text-3xl font-bold">To Register</li>
              </ol>
              <button
                onClick={() => setSigned(false)}
                className={
                  isSigned
                    ? "absolute right-0 top-3 underline-offset-1 font-semibold underline text-blue-500"
                    : "hidden"
                }
              >
                De-register
              </button>
              {isSigned ? (
                <>
                  <p className="font-semibold text-black">
                    Signed in as abduldesign12@gmail.com
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-black">
                    Signup or registration is required to purchase this plan and
                    enjoy all its benefits.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSigned(true)}
                      className="bg-yellowbg w-full rounded-[3px] py-2.5 text-white font-medium"
                    >
                      To Register
                    </button>
                    <button className="bg-primaryfont w-full rounded-[3px] py-2.5 text-white font-medium">
                      Register
                    </button>
                  </div>
                </>
              )}
            </div>
            <hr />
            <div className="py-4">
              <ol className="list-inside list-decimal" id="krypto" start={2}>
                <li className="text-3xl font-bold">Payment</li>
              </ol>
              {isSigned && <AddressDetails />}
            </div>
            <div className={isSigned ? "space-y-4" : "hidden"}>
              <h5 className="font-semibold mt-4 mb-3">Card Type</h5>
              <label>Card Type</label>
              <div className="flex items-center gap-x-3">
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      type="radio"
                      name="payment-method"
                      className="checkbox-input"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <Mastercard />
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      type="radio"
                      name="payment-method"
                      className="checkbox-input"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <Paypal />
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      type="radio"
                      name="payment-method"
                      className="checkbox-input"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <Google />
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      type="radio"
                      name="payment-method"
                      className="checkbox-input"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <Apple />
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full space-y-1">
                  <label hrmlFor="card_name" className="block">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    inputMode="text"
                    id="card_name"
                    className="border w-full border-black rounded p-2.5"
                    placeholder="Alex James"
                  />
                </div>
                <div className="w-full space-y-1">
                  <label hrmlFor="card" className="block">
                    Card Number
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="card"
                    className="border w-full border-black rounded p-2.5"
                    placeholder="4242 4242 4242 4242"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full space-y-1">
                  <label hrmlFor="exp-date" className="block">
                    Expiration Date
                  </label>
                  <input
                    type="date"
                    inputMode="date"
                    id="exp-date"
                    className="border w-full border-black rounded p-2.5"
                    placeholder="10/02/2023"
                    min={Date.now()}
                  />
                </div>
                <div className="w-full space-y-1">
                  <label hrmlFor="cvv" className="block">
                    CVV
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="cvv"
                    className="border w-full border-black rounded p-2.5"
                    placeholder="123"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 pt-1 space-y-2 pr-2.5">
                <hr />
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-semibold ">€19.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total (tax incl.)</span>
                  <span className="font-semibold ">€3,001</span>
                </div>
                <button className="w-full mt-4 bg-yellowbg text-white rounded-md py-2.5">
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
          <OrderOverView />
        </section>
      </div>
    </>
  );
};

export default KryptoAbo;

function OrderOverView({}) {
  return (
    <div className="w-full md:w-1/3">
      <div className="border py-4 px-3 h-auto space-y-5">
        <h3 className="text-black">Order overview</h3>
        <div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Price Plan</span>
            <span className="font-semibold ">Gold</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Length of time</span>
            <span className="font-semibold ">Until Termination</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Free trial period</span>
            <span className="font-semibold ">14 Days</span>
          </div>
        </div>
        <div className="space-y-2 py-4 border-b border-t border-black">
          <label
            htmlFor="coupon"
            className="text-yellowbg flex items-center gap-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                fill="#E0B83C"
                d="M12.8 4L14 5.2 7.2 12 6 10.8 12.8 4zM2 0h16c1.11 0 2 .89 2 2v4a2 2 0 000 4v4c0 1.11-.89 2-2 2H2a2 2 0 01-2-2v-4c1.11 0 2-.89 2-2a2 2 0 00-2-2V2a2 2 0 012-2zm0 2v2.54a3.994 3.994 0 010 6.92V14h16v-2.54a3.994 3.994 0 010-6.92V2H2zm5.5 2C8.33 4 9 4.67 9 5.5S8.33 7 7.5 7 6 6.33 6 5.5 6.67 4 7.5 4zm5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
              ></path>
            </svg>
            Enter coupon code
          </label>
          <div className="space-x-2 flex items-center">
            <input
              id="coupon"
              className="py-2 px-2 border rounded-[3px] w-3/4"
              placeholder="Enter code"
            />
            <button className="w-1/4 py-2 rounded-[3px] h-auto bg-yellowbg text-white">
              Use
            </button>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <span className="font-semibold text-xl">In Total</span>
          <span className="font-semibold text-xl">
            €19.99
            <br />
            <span className="text-gray-500 text-base">monthly</span>
          </span>
        </div>
        <span className="block font-semibold text-gray-800">
          After the free trial period, you will be billed monthly until you
          cancel.
        </span>
      </div>
      <div className="flex items-center justify-center gap-x-2 my-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="21"
          fill="none"
          viewBox="0 0 16 21"
        >
          <path
            fill="#E0B83C"
            d="M2 21c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 010 19V9c0-.55.196-1.021.588-1.413A1.922 1.922 0 012 7h1V5c0-1.383.488-2.563 1.463-3.538C5.438.487 6.617-.001 8 0c1.383 0 2.563.488 3.538 1.463C12.513 2.438 13.001 3.617 13 5v2h1c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v10c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0114 21H2zm6-5c.55 0 1.021-.196 1.413-.588.392-.392.588-.863.587-1.412 0-.55-.196-1.021-.588-1.413A1.922 1.922 0 008 12c-.55 0-1.021.196-1.413.588A1.922 1.922 0 006 14c0 .55.196 1.021.588 1.413.392.392.863.588 1.412.587zM5 7h6V5c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 008 2c-.833 0-1.542.292-2.125.875A2.893 2.893 0 005 5v2z"
          ></path>
        </svg>
        <span className="font-semibold text-yellowbg">
          Secure payment process
        </span>
      </div>
      <button className="w-full mt-4 bg-yellowbg text-white rounded-md py-2.5">
        Connect with Stripe
      </button>
    </div>
  );
}

function AddressDetails({}) {
  return (
    <>
      <h5 className="font-semibold mt-4 mb-3">Address Details</h5>
      <div className="space-y-4">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-1">
            <label hrmlFor="email" className="block">
              E-mail Address
            </label>
            <input
              type="email"
              inputMode="email"
              id="email"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
          <div className="w-full space-y-1">
            <label hrmlFor="name" className="block">
              Full Name
            </label>
            <input
              type="text"
              inputMode="text"
              id="name"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-1">
            <label hrmlFor="region" className="block">
              Country/Region
            </label>
            <select
              id="region"
              className="border w-full border-black rounded p-2.5"
            >
              <option>Pakistan</option>
              <option>India</option>
              <option>Germany</option>
              <option>USA</option>
              <option>Czech Republic</option>
            </select>
          </div>
          <div className="w-full space-y-1">
            <label hrmlFor="state" className="block">
              State
            </label>
            <input
              type="text"
              inputMode="text"
              id="state"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-1">
            <label hrmlFor="address" className="block">
              Street Address
            </label>
            <input
              type="text"
              inputMode="text"
              id="address"
              className="border w-full border-black rounded p-2.5"
              placeholder="House No. and Street name"
            />
          </div>
          <div className="w-full space-y-1">
            <label hrmlFor="zip" className="block">
              Postal/Zip
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="zip"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-1">
            <label hrmlFor="suite" className="block">
              Appartment/Suite
            </label>
            <input
              type="text"
              inputMode="text"
              id="suite"
              className="border w-full border-black rounded p-2.5"
              placeholder="Appartment, suit, unit etc."
            />
          </div>
          <div className="w-full space-y-1">
            <label hrmlFor="phone" className="block">
              Phone
            </label>
            <input
              type="tel"
              inputMode="numeric"
              id="phone"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-1">
            <label hrmlFor="city" className="block">
              Town/City
            </label>
            <input
              type="text"
              inputMode="text"
              id="city"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
          <div className="w-full space-y-1">
            <label hrmlFor="plz" className="block">
              PLZ
            </label>
            <input
              type="text"
              inputMode="text"
              id="plz"
              className="border w-full border-black rounded p-2.5"
              placeholder=""
            />
          </div>
        </div>
        <div className="gap-x-2 flex items-center">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-sm sm:text-base">
            I have the Terms of User read and agree to them.
          </label>
        </div>
      </div>
    </>
  );
}
