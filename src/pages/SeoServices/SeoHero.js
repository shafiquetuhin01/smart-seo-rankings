import React from "react";
import hero1 from "../../assets/images/searchberg-images/girl.webp";
import RequestForm from "./RequestForm";
import "./SeoHero.css";
import hero2 from "../../assets/images/searchberg-images/cal.webp";
import hero3 from "../../assets/images/searchberg-images/arrow.webp";
const SeoHero = () => {
  return (
    <div class="flex justify-center items-center mx-32 mt-5">
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
      </div>
      <div className="w-3/12">
        <RequestForm />
      </div>
    </div>
  );
};

export default SeoHero;
