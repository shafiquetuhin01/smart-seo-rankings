import React from "react";
import { FaCheck } from "react-icons/fa";
import InternetAwards from "./InternetAwards";
import InternetMilestone from "./InternetMilestone";

const InternetHero = () => {
  return (
    <section style={{backgroundImage:'url("https://i.ibb.co/LCJyGq5/1.webp")'}} className="min-h-screen bg-slate-500">
      <div className="lg:flex gap-5 justify-center items-center w-11/12 mx-auto pt-8 py-5 ">
        <div className="w-full lg:w-7/12">
          <h2 className="text-3xl pt-3 lg:text-[46px] lg:leading-[51px] font-bold text-secondary text-center">Digital Marketing Services</h2>
          <h2 className="text-3xl lg:text-[46px] lg:leading-[51px] font-bold text-white text-center">That Take Your Business To</h2>
          <h2 className="text-3xl lg:text-[46px] lg:leading-[51px] font-bold text-secondary text-center">Greater Heights</h2>
          <h2 className="mt-6 text-white text-2xl text-center lg:text-left">A data-driven internet marketing company offering <span className="text-secondary">SEO, PPC & Web Design</span> services to help you:</h2>
          <p className="justify-center lg:justify-start flex mt-5 text-white text-xl items-center"><span><FaCheck className="mr-3 bg-secondary rounded-[100%] p-1"/></span>Generate more qualified leads</p>
          <p className="justify-center lg:justify-start flex mt-2 text-white text-xl items-center"><span><FaCheck className="mr-3 bg-secondary rounded-[100%] p-1"/></span>Increase revenue & grow sales</p>
          <button className="mx-auto lg:mx-0 btn btn-secondary text-2xl lg:text-4xl text-white font-bold  mt-5">get a free marketing plan</button>
        </div>
        <div className="w-full lg:w-5/12">
          <img src="https://i.ibb.co/kcD7n18/cta2-img.webp" alt="seo-img" />
        </div>
      </div>
      <InternetAwards />
      <InternetMilestone />
    </section>
    // This page used in several pages 
  );
};

export default InternetHero;
