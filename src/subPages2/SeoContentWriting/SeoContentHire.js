import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const SeoContentHire = () => {
  return (
    <section className="w-11/12 mx-auto py-6">
      <div className="lg:flex justify-center items-center gap-4">
        <div className="w-6/12 mx-auto">
          <h3 className="text-info text-4xl font-bold">
            Hire Our{" "}
            <span className="text-secondary">SEO Content Writers </span> To
            Level-Up Your Content
          </h3>
          <p className="w-[150px] border-4 border-secondary my-3 mb-10 "></p>
          <p className="mt-4 text-sm">
            The SEO content writing process is an ever-evolving one, with
            constant upkeep needed for your website to rank in search engine
            rankings. This means that your content strategy needs to keep up
            with changing times.
          </p>
          <p className="mt-4 text-sm">
            At Search Berg, our expert writers pride themselves on not just
            being able write to great content but also staying on top of
            Google’s algorithm updates. We make sure that the content we write
            aligns with your content marketing objective. It’s all about results
            for us!
          </p>
          <div className="mt-3">
            <div className="grid grid-cols-2 justify-items-start items-center gap-5">
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">
                  100% Original Content (Copyscape Verified)
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">
                  Unlimited Revisions
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">SEO-Expertise</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">
                  Pick of Writer(s) Based on Industry
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">
                  Content Edited and Proofread to Perfection
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">Quick Turnaround</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">
                  Satisfaction Guarantee
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="https://i.ibb.co/pRjwfT7/check.webp" alt="" />
                <p className="text-info font-bold text-xs">
                  Round-the-Clock Support
                </p>
              </div>
            </div>
           <div>
           <button className="hover:bg-[#DE600D] w-[60%] mt-4 h-10 mr-5 btn btn-info text-white text-xl capitalize">
              <FaPhoneAlt className="hover:bg-[#DE600C] mr-3 bg-[#06204D] p-2 text-[2.2rem]" />
              Speak With Us Today
            </button>
            <h3 className="text-xl mt-3 cursor-pointer hover:text-secondary font-bold ml-[100px]"><a className="text-info" href="tel:01678042832" >855-444-4777</a> </h3>
           </div>
          </div>
        </div>
        <div className="w-6/12 mx-auto">
          <img src="https://i.ibb.co/2FkLzwq/hire-img.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SeoContentHire;
