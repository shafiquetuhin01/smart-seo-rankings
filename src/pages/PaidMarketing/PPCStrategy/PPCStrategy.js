import React from "react";

const PPCStrategy = () => {
  return (
    <div className="bg-accent">
      <div className="w-11/12 mx-auto py-8">
        <h3 className="py-4 text-2xl lg:text-4xl font-bold text-center text-secondary lg:w-8/12 mx-auto">
          Tailor Your PPC{" "}
          <span className="text-white">
            Strategy According To Your Business’s Goals
          </span>
        </h3>
        <p className="text-sm text-white lg:text-2xl font-bold italic text-center lg:w-8/12 mx-auto">
          89% of marketers say brand awareness is the most important goal,
          followed by sales and lead generation.
        </p>
        <p className="text-sm text-secondary lg:text-2xl font-bold italic text-center lg:w-8/12 mx-auto">
          elect A Paid Marketing Goal And We’ll Tell You What’s Going To Work
          For You:
        </p>
        <div className="lg:grid grid-cols-1 lg:grid-cols-3 mt-3 justify-items-center items-center w-full text-center">
          <div className="flex flex-col justify-center items-center mx-auto">
            <div>
              <img
                className="bg-secondary rounded-full"
                src="https://i.ibb.co/L94pcRY/ppc-img1.webp"
                alt=""
              />
            </div>
            <div className="mt-2 mx-auto">
              <h3 className="text-2xl text-white">Increase</h3>
              <h3 className="text-2xl font-bold text-white">Brand Awareness</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto">
            <div>
              <img src="https://i.ibb.co/TRMDLzj/ppc-img2.webp" alt="" />
            </div>
            <div className="mt-2 mx-auto">
              <h3 className="text-2xl text-white">Drive</h3>
              <h3 className="text-2xl font-bold text-white">Sales</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto">
            <div>
              <img src="https://i.ibb.co/LCYSMst/ppc-img3.webp" alt="" />
            </div>
            <div className="mt-2 mx-auto">
              <h3 className="text-2xl text-white">Generate</h3>
              <h3 className="text-2xl font-bold text-white">Leads</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCStrategy;
