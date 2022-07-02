import React from "react";
import MyForm from "./MyForm";

const InternetGetInTouch = () => {
  return (
    <section
      className="min-h-screen"
      style={{ backgroundImage: 'url("https://i.ibb.co/rQnF2h7/1.webp")' }}
    >
      <div className="w-11/12 mx-auto py-6 lg:flex justify-center items-center">
        <div className="w-6/12 mx-auto">
          <h4 className="text-[52px] py-5 text-white text-left font-bold leading-[3.5rem]">
            Get in touch with us to get a <span className="text-secondary">free 30-minute no-obligation
            consultation</span> with one of our experts.
          </h4>
          <div className="lg:grid lg:grid-cols-2 gap-5 place-items-center pb-8 items-center text-white">
      <div className="text-center px-8 sm:py-3">
        <h3 className="text-[56px] text-secondary font-bold">2 Million+</h3>
        <p className="text-center font-bold text-[25px]">
          Genuine Leads Generated
        </p>
      </div>
      <div className="text-center px-8 sm:py-3 ">
        <h3 className="text-[56px] text-secondary font-bold">1 Million+</h3>
        <p className="text-center font-bold text-[25px]">
          Phone Calls Generated
        </p>
      </div>
      <div className="text-center px-8 sm:py-3 ">
        <h3 className="text-[56px] text-secondary font-bold">40,000+</h3>
        <p className="text-center font-bold text-[25px]">
          Projects Completed Successfully
        </p>
      </div>
      <div className="text-center px-8 sm:py-3 ">
        <h3 className="text-[56px] text-secondary font-bold">10+</h3>
        <p className="text-center font-bold text-[25px]">
          Years in Digital Marketing
        </p>
      </div>
    </div>
        </div>
        <div className="w-6/12 mx-auto">
            <MyForm />
        </div>
      </div>
    </section>
  );
};

export default InternetGetInTouch;
