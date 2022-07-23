import React from 'react';
import { Link } from 'react-router-dom';

const YouTubeHero = () => {
    return (
        <section className="bg-[#0A0E2B] py-6">
      <div className="lg:flex gap-5 justify-center items-center w-11/12 mx-auto pt-8 py-5 ">
        <div className="w-full lg:w-7/12">
          <h2 className="text-3xl pt-3 lg:text-[46px] lg:leading-[51px] font-bold text-secondary text-left">
          YouTube Advertising Services:{" "}
            <span className="text-white"> Get Seen Where It Matters</span>
          </h2>

          <h2 className="mt-6 text-white text-2xl text-center lg:text-left">
          Engage more customers. Build brand awareness. Watch your revenue skyrocket!
          </h2>
          <div className="flex mt-3 mr-5 items-center justify-start text-white">
            <p className="italic text-2xl lg:text-4xl font-bold">
              Starting from
            </p>
            <div className="mx-2">
              <img src="https://i.ibb.co/dfM2CgB/arrow.webp" alt="" />
            </div>
            <div className="bg-secondary text-white p-2 price-start">
              <p className="text-5xl font-bold">
                $199<sup>*</sup>
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mt-5">
            <div className="mr-4">
              <img src="https://i.ibb.co/MDPt6wt/phone-envelope.png" alt="" />
            </div>
            <div>
              <div>
                <h2 className="text-3xl text-white lg:text-6xl font-bold">
                  855-444-4777
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <Link to="/chatBox">
                  <h3 className="underline text-left underline-offset-4  text-xl  px-2 font-bold">
                    Start A Live Chat
                  </h3>
                </Link>
                <span className="text-white text-3xl  px-2 ">l</span>
                <Link to="/request">
                  <h3 className="underline underline-offset-4 text-xl  ml-1 px-2 font-bold">
                    Request A Quote
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <img src="https://i.ibb.co/N1LTbZy/hero-img1.jpg" alt="seo-img" />
        </div>
      </div>
    </section>
    );
};

export default YouTubeHero;