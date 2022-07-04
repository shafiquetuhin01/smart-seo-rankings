import React from "react";
import { Link } from "react-router-dom";

const InternetConfused = () => {
  return (
    <section
      className="py-3"
      style={{
        backgroundImage: "url('https://i.ibb.co/44M5xGT/cta2-bg.webp')",
      }}
    >
      <div className="lg:flex lg:flex-row-reverse gap-5 justify-center items-center w-11/12 mx-auto lg:pt-8 py-5 ">
        <div className="w-full lg:w-7/12">
          <h2 className="text-3xl lg:text-[46px] lg:leading-[51px] font-bold text-white text-center lg:text-left">
            Confused about which Digital Marketing solution to go for?
          </h2>
          <h2 className="mt-6 text-white text-[24px] text-left">
          No need to worry! Call us right away and our certified digital marketing experts will provide you with a FREE internet marketing strategy report <span className="underline font-bold">customized for your business</span> needs and goals.
          </h2>
          <Link to="#">
          <p className="text-white text-center lg:text-left text-lg mt-3">Call <span className="text-[34px] font-bold ">855-444-4777</span></p>
          </Link>
          <div className="flex justify-center lg:justify-start">
          <button className="btn btn-accent text-sm text-white font-bold  mt-5">
            Start A Live Chat
          </button>
          <button className="ml-3 btn btn-accent text-sm text-white font-bold  mt-5">
            Get A Custom Quote
          </button>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <img src="https://i.ibb.co/kcD7n18/cta2-img.webp" alt="seo-img" />
        </div>
      </div>
    </section>
  );
};

export default InternetConfused;
