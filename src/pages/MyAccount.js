import React, { useContext } from "react";
import HeroSection from "../components/Account/Hero";
import AccountNav from "../components/Account/AccountNav";
import Accordion from "react-bootstrap/Accordion";
import Cancel from "../assets/icons/Cancel";
import Lock from "../assets/icons/Lock";
import { UserDataContext } from "../services/context/userDataContext";

const MyAccount = () => {
  const { userInfo } = useContext(UserDataContext);
  console.log(userInfo.email);
  return (
    <>
      <HeroSection />
      <div className="container mx-auto space-y-6 mb-10">
        <AccountNav name={userInfo.first_name + " " + userInfo.last_name} />
        <div className="flex justify-end">
          <button className="text-sm md:text-base rounded-[3px] bg-red-500 text-white px-3 py-2">
            Delete Account
          </button>
        </div>
        <div className="relative">
          <h3 className="text-black">My Account</h3>
          <p className="w-2/3 md:w-full">
            Review and edit personal information.
          </p>
          <div className="absolute top-0 right-0 flex flex-col md:flex-row items-end md:items-center  gap-2">
            <button className="text-sm md:text-base  bg-primaryfont px-3 rounded-[3px] py-2 text-white font-medium">
              Discard
            </button>
            <button className="text-sm md:text-base  bg-yellowbg px-3 rounded-[3px] py-2 text-white font-medium">
              Update Info
            </button>
          </div>
          <section>
            <h4 className="text-black">Show Info</h4>
            <p>The profile card is visible to all members of this site</p>

            <div className="mt-3 space-y-1">
              <label hrmlFor="name" className="block">
                Display Name*
              </label>
              <input
                type="text"
                inputMode="text"
                id="name"
                className="border w-full md:w-1/2 border-black rounded p-2.5"
                placeholder="Alex James"
                value={userInfo.first_name + " " + userInfo.last_name}
              />
            </div>
          </section>
          <section className="mt-5">
            <h4 className="text-black">Account</h4>
            <p>Update your personal information.</p>

            <div className="font-semibold">
              <span>E-mail registration :</span>
              <span className="block">{userInfo.email}</span>
              <span>The registration email cannot be changed</span>
            </div>

            <form className="mt-5 space-y-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full space-y-1">
                  <label hrmlFor="name" className="block">
                    First Name*
                  </label>
                  <div className="flex gap-x-2 border w-full border-black rounded p-2.5 focus-within:outline outline-2">
                    <input
                      type="text"
                      inputMode="text"
                      id="first_name"
                      className="focus:outline-none w-full bg-none"
                      placeholder="Alex"
                      value={userInfo.first_name}
                    />
                    <Lock />
                    <Cancel />
                  </div>
                </div>
                <div className="w-full space-y-1">
                  <label hrmlFor="name" className="block">
                    Last Name*
                  </label>
                  <div className="flex gap-x-2 border w-full border-black rounded p-2.5 focus-within:outline outline-2">
                    <input
                      type="text"
                      inputMode="text"
                      id="last_name"
                      className="focus:outline-none w-full bg-none"
                      placeholder="James"
                      value={userInfo.last_name}
                    />
                    <Lock />
                    <Cancel />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full space-y-1">
                  <label hrmlFor="name" className="block">
                    E-mail address*
                  </label>
                  <div className="flex gap-x-2 border w-full border-black rounded p-2.5 focus-within:outline outline-2">
                    <input
                      type="email"
                      inputMode="email"
                      id="email"
                      className="focus:outline-none w-full bg-none"
                      placeholder="c86012412@gmail.com"
                      disabled
                      value={userInfo.email}
                    />
                    <Lock />
                    <Cancel />
                  </div>
                </div>
              </div>
            </form>
          </section>
          <section className="mt-5">
            <h4 className="text-black">Account Settings</h4>
            <p>Update your personal information.</p>

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="text-black">
                  Community Pagel URL
                </Accordion.Header>
                <Accordion.Body>
                  <a
                    href="https://www.renditefuchs.org/profile/c86012412/profile"
                    className="text-green-600 no-underline font-semibold hover:underline"
                  >
                    https://www.renditefuchs.org/profile/c86012412/profile
                  </a>
                  <button className="flex space-x-2 items-center mt-2">
                    <span className="text-yellowbg underline">Edit URL</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#E0B83C"
                        d="M2.167 13.833h1.166l7.188-7.187-1.167-1.167-7.187 7.188v1.166zm11.916-8.396l-3.541-3.5L11.708.771a1.6 1.6 0 011.178-.48c.465 0 .858.16 1.177.48l1.166 1.166c.32.32.486.705.5 1.157.014.452-.139.837-.458 1.156l-1.188 1.187zm-1.208 1.23L4.042 15.5H.5v-3.542l8.833-8.833 3.542 3.542zm-2.938-.605l-.583-.583 1.167 1.167-.584-.584z"
                      ></path>
                    </svg>
                  </button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Profile Visiblity</Accordion.Header>
                <Accordion.Body>
                  <p className="text-green-600 no-underline font-semibold hover:underline">
                    Hide the profile page and social aspects of the account.
                  </p>
                  <button className="flex space-x-2 items-center mt-2">
                    <span className="text-yellowbg underline">
                      Set Profile to private
                    </span>
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
