import React from "react";
import hero1 from "../../assets/images/searchberg-images/girl.webp";
import RequestForm from "./RequestForm";
import "./SeoHero.css";
import hero2 from "../../assets/images/searchberg-images/cal.webp";
import hero3 from "../../assets/images/searchberg-images/arrow.webp";
<<<<<<< HEAD
import hero4 from "../../assets/images/searchberg-images/moneyback.webp";
import { Link } from "react-router-dom";
const SeoHero = () => {
  return (
    <div class="flex justify-center items-center mx-28 mt-5">
=======
const SeoHero = () => {
  return (
    <div class="flex justify-center items-center mx-32 mt-5">
>>>>>>> 0ac02b72c37496099046f5db7c5e02ad291f8135
      <div
        className="img-padding bg-no-repeat w-9/12 "
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <h2 className="text-6xl">
          Get More Traffic, More Calls & More Sales!!
        </h2>
        <h2 className="text-3xl mt-2">
          Start Ranking On <span className="text-primary">Google</span> In Less
          Than
        </h2>
        <div className="flex items-center">
          <div className=" w-1/4">
              <p className="hr-color"><hr /></p>
              <p className="hr-color-2nd mt-2"><hr /></p>
          </div>
          <div className="mx-2">
              <div className="flex items-center">
                  <img src={hero2} alt="" />
                  <span className="text-5xl italic font-bold text-red-600">30 Days!</span>
              </div>
          </div>
          <div className=" w-1/4">
              <p className="hr-color"><hr /></p>
              <p className="hr-color-2nd mt-2"><hr /></p></div>
        </div>
        <div className="flex mt-3 mr-5 items-center justify-center">
            <p className="italic text-4xl font-bold">Starting from</p>
            <div className="mx-2">
                <img src={hero3} alt="" />
            </div>
            <div className="bg-secondary text-white p-2 price-start">
                <p className="text-5xl font-bold">$199<sup>*</sup></p>
            </div>
        </div>
<<<<<<< HEAD
        <div className="flex justify-center items-center">
          <div className="w-3/12">
            <img src={hero4} alt="" />
          </div>
          <div>
            <div>
              <h2 className="text-6xl font-bold">855-444-4777</h2>
            </div>
            <div className="flex items-center justify-center">
              <Link to='/chatbox' ><button className="text-1xl btn-primary p-3 font-bold">Start A Live Chat</button></Link>
              <Link to='/request' ><button className="text-1xl btn-secondary text-white ml-2 p-3 font-bold">Request A Quote</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 mx-auto">
=======
      </div>
      <div className="w-3/12">
>>>>>>> 0ac02b72c37496099046f5db7c5e02ad291f8135
        <RequestForm />
      </div>
    </div>
  );
};

export default SeoHero;
