import React from "react";
import MyForm from "../IntenetMarketing/InternetGetInTouch/MyForm";

import WebDesignAwards from "./WebDesignAwards";
import WebDesignForm from "./WebDesignForm";

const WebDesignHero = () => {
  return (
    <section
      className="w-full mx-auto py-10 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.ibb.co/3WYNjrs/modern-hero.webp')",
      }}
    >
      <div className="w-11/12 mx-auto py-6 lg:flex justify-center items-center">
        <div className="w-full lg:w-7/12 mx-auto">
          <h4 className="text-3xl lg:text-[40px] py-5 text-white text-center lg:text-left font-bold lg:leading-[3.5rem]">
            RESPONSIVE & PROFESSIONAL{" "}
            <span className="text-secondary">WEBSITE</span> DEVELOPMENT
          </h4>
          <p className="mt-3 text-[20px] leading-[28px] text-white">
            Our vetted website developers will create a customized website <br /> to
            achieve all of your business goals
          </p>
          <div className="mt-10 flex mr-5 items-center justify-start">
            <p className="break-words uppercase italic text-white text-[2xl] lg:text-[36px] font-bold leading-9">
              Starting <br /> from
            </p>
            <div className="mx-2">
              <img src="https://i.ibb.co/dfM2CgB/arrow.webp" alt="" />
            </div>
            <div className="bg-secondary text-white p-2 price-start">
              <p className="text-5xl font-bold">
                $299<sup>*</sup>
              </p>
            </div>
          </div>
          <div className="w-full mt-8">
          <WebDesignAwards/>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mx-auto">
          <WebDesignForm />
        </div>
      </div>
    </section>
  );
};

export default WebDesignHero;
