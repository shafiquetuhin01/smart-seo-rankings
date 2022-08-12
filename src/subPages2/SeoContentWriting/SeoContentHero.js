import React from "react";
import {
  FaCheck,
  FaRegClock,
  FaPen,
  FaSearch,
  FaSyncAlt,
  FaFileAlt,
} from "react-icons/fa";
import ContentForm from "./ContentForm";

const SeoContentHero = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto lg:flex justify-center items-center">
        <div>
          <h5 className="text-sm text-left">SEO CONTENT WRITING SERVICES</h5>
          <h3 className="text-5xl text-blue-500 font-bold">
            WE CREATE <br /> SEO-OPTIMIZED
          </h3>
          <h3 className="text-5xl text-secondary font-bold">ARTICLES</h3>
          <div className="mt-5 flex justify-start items-center gap-5">
            <div className="mr-2">
              <p className="text-info font-bold">
                <span>
                  <FaCheck className="inline mr-3 text-secondary" />
                </span>
                100% Original Content
              </p>
              <p className="text-info font-bold">
                <span>
                  <FaRegClock className="inline mr-3 text-secondary" />
                </span>
                Quick Turnaround Time
              </p>
              <p className="text-info font-bold">
                <span>
                  <FaPen className="inline mr-3 text-secondary" />
                </span>
                Niche Specialist Writers
              </p>
            </div>
            <div>
              <p className="text-info font-bold">
                <span>
                  <FaSearch className="inline mr-3 text-secondary" />
                </span>
                Search Engine Optimized
              </p>
              <p className="text-info font-bold">
                <span>
                  <FaSyncAlt className="inline mr-3 text-secondary" />
                </span>
                Unlimited Revisions
              </p>
              <p className="text-info font-bold">
                <span>
                  <FaFileAlt className="inline mr-3 text-secondary" />
                </span>
                Content at Scale
              </p>
            </div>
          </div>
          <div className="my-5">
            <button className="hover:text-info hover:bg-white hover:font-bold btn btn-info capitalize mr-5">
              Check Packages
            </button>
            <button
              className="bg-white btn text-info btn-secondary capitalize hover:text-white hover:bg-secondary hover-change1"
              value=""
            ></button>
          </div>
          <div className="flex justify-start items-center">
            <img src="https://i.ibb.co/C9TXMYZ/Badges.webp" alt="" />
          </div>
        </div>
        <div className="ml-2">
          <img src="https://i.ibb.co/LC7pqnx/banner-MAN.webp" alt="" />
        </div>
        <div>
            {/* <RequestForm/> */}
          <ContentForm />
        </div>
      </div>
    </section>
  );
};

export default SeoContentHero;
