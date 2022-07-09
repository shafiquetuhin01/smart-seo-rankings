import React from "react";
import { Link } from "react-router-dom";
import PPCRequest from "./PPCRequest";
const PaidHero = () => {
  return (
    <div className="lg:flex justify-center items-center lg:mx-28 mt-5">
      <div
        className="img-padding bg-no-repeat w-full lg:w-9/12 "
        style={{ backgroundImage: `url("https://i.ibb.co/bJWHq8v/girl.webp")` }}
      >
        <h2 className="lg:text-6xl text-4xl text-left mx-auto">
          More Leads, More Sales & More Profit!
        </h2>
        <h2 className="text-3xl mt-2 text-left text-accent font-bold">
          Launch A Results-Driven PPC Campaign
          <span className="text-red-600 ml-2 ">NOW!</span>
        </h2>
        <div className="flex mt-3 mr-5 items-center justify-center">
          <p className="italic text-2xl lg:text-4xl font-bold">Starting from</p>
          <div className="mx-2">
            <img src="https://i.ibb.co/dfM2CgB/arrow.webp" alt="" />
          </div>
          <div className="bg-secondary text-white p-2 price-start">
            <p className="text-5xl font-bold">
              $399<sup>*</sup>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-3/12">
            <img src="https://i.ibb.co/hZvYTwj/moneyback.webp" alt="" />
          </div>
          <div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold">855-444-4777</h2>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/chatBox">
                <button className="text-1xl btn-primary p-3 font-bold">
                  Start A Live Chat
                </button>
              </Link>
              <Link to="/request">
                <button className="text-1xl btn-secondary text-white ml-2 p-3 font-bold">
                  Request A Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/12 request-form-sm mt-10 lg:mt-2 mb-3">
        <PPCRequest />
      </div>
    </div>
  );
};

export default PaidHero;
