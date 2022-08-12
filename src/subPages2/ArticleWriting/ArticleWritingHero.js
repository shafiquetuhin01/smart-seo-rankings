import React from "react";
import { FaComment, FaPhoneAlt } from "react-icons/fa";
import ArticleWritingForm from "./ArticleWritingForm";

const ArticleWritingHero = () => {
  return (
    <section className=" bg-slate-300">
      <div className="lg:flex justify-between items-center py-5 w-10/12 mx-auto">
        <div className="w-6/12 ">
          <h3 className="text-left mb-3 text-4xl font-bold text-primary lg:mx-10">
            Improve Your <span className="text-info">Website's Conversion</span>{" "}
            Rate And Sales With{" "}
            <span className="text-info">Customized Articles</span>
          </h3>
          <p className="text-md text-info font-bold lg:mx-10 mt-5">
            GENERATE TRACTION FOR YOUR BUSINESS WITH ENGAGING AND{" "}
            <span className="text-white bg-secondary">UNIQUE ARTICLES!</span>
          </p>
          <div className="lg:mx-10 mt-8">
            <button className=" hover:bg-[#CBD5E1] hover:text-info btn bg-info text-white mr-3 ">
              <span>
                <FaComment className="mr-2" />
              </span>{" "}
              Start A Live Chat
            </button>
            <button className=" btn bg-[#CBD5E1] hover:bg-info text-info hover:text-white  ">
              <span>
                <FaPhoneAlt className="mr-2" />
              </span>{" "}
              Talk To A Strategist
            </button>
          </div>
          <div className="lg:grid lg:grid-cols-6 grid grid-cols-2 place-items-center py-4 justify-center items-center gap-2 lg:mx-10">
            <img
              src="https://i.ibb.co/DMGVsDd/customer-choice-award-sitejabber-2018.webp"
              alt=""
            />
            <img
              src="https://i.ibb.co/27K9MfJ/top-digital-marketing-2021.webp"
              alt=""
            />
            <img
              src="https://i.ibb.co/27K9MfJ/top-digital-marketing-2021.webp"
              alt=""
            />
            <img
              src="https://i.ibb.co/411LRrs/top-seo-services-company-goodfirms-v1.webp"
              alt=""
            />
            <img
              src="https://i.ibb.co/G21kb9f/search-berg-trustpilot-reviews-v1.webp"
              alt=""
            />
            <div className="">
              <img src="https://i.ibb.co/f9c5SJN/google.webp" alt="" />
              <img
                className="mt-3"
                src="https://i.ibb.co/vvPsHdZ/bing-ads.webp"
                alt=""
              />
            </div>
          </div>
          <div className="lg:flex grid grid-cols-2 gap-1 place-content-evenly object-cover whitespace-nowrap">
            <img
              className="block lg:hidden"
              src="https://i.ibb.co/vvPsHdZ/bing-ads.webp"
              alt=""
            />
          </div>
        </div>
        <div className="w-6/12">
          <ArticleWritingForm />
        </div>
      </div>
    </section>
  );
};

export default ArticleWritingHero;
