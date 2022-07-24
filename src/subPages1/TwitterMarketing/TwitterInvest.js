import React from "react";
import { FaCheck } from "react-icons/fa";
const TwitterInvest = () => {
  return (
    <section
      className="bg-cover w-full h-full bg-no-repeat"
      style={{
        backgroundImage: 'url("https://i.ibb.co/rGfG6P3/linkedin-sec-bg.jpg")',
      }}
    >
      <h3 className="text-4xl text-white font-bold py-8 text-center">
        Why You Should Invest in{" "}
        <span className="text-secondary">Twitter Marketing</span>
      </h3>
      <div className="w-10/12 text-white mx-auto flex gap-5 pb-10">
        <div className="w-1/2 mx-auto ">
          <p className="text-lg">
            <span>
              <FaCheck className="rounded-full inline mr-2 bg-secondary text-xl" />
            </span>
            Ad engagement on Twitter is growing at more than 200% a year!
          </p>
          <p className="my-5 text-lg">
            <span>
              <FaCheck className="rounded-full inline mr-2 bg-secondary text-xl" />
            </span>
            A real-time platform for answering customer queries
          </p>
          <p className="my-5 text-lg">
            <span>
              <FaCheck className="rounded-full inline mr-2 bg-secondary text-xl" />
            </span>
            Benefit from the best of visual and textual media
          </p>
          <p className="my-5 text-lg">
            <span>
              <FaCheck className="rounded-full inline mr-2 bg-secondary text-xl" />
            </span>
            Use hashtags to become part of global narratives
          </p>
          
        </div>
        <div className="w-1/2 mx-auto">
          <p className="text-lg">
            <span>
              <FaCheck className="rounded-full inline mr-2 bg-secondary text-xl" />
            </span>
            Use hashtags to become part of global narratives
          </p>
          <p className="my-5 text-lg">
            <span>
              <FaCheck className="rounded-full inline mr-2 bg-secondary text-xl" />
            </span>
            Use hashtags to become part of global narratives
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default TwitterInvest;
