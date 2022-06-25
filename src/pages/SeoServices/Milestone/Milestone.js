import React from "react";

const Milestone = () => {
  return (
    <div className="py-6 w-full bg-[#BB1414]">
      <div className="w-10/12 mx-auto">
        <h2 className="text-white text-4xl font-bold text-center py-3 ">
          Latest SearchBerg Milestones
        </h2>
        <div className="lg:grid lg:grid-cols-4 gap-6 place-items-center pb-8 items-center text-white">
          <div className="text-center px-8 sm:py-3 border-white border-l">
            <h3 className="text-[56px] font-bold">40,000+</h3>
            <p className="uppercase text-center font-bold text-[16px]">
              SEO PROJECTS COMPLETED
            </p>
          </div>
          <div className="text-center px-8 sm:py-3 border-white border-l">
            <h3 className="text-[56px] font-bold">150,000+</h3>
            <p className="uppercase text-center font-bold text-[16px]">
            CONTENT PIECES PUBLISHED
            </p>
          </div>
          <div className="text-center px-8 sm:py-3 border-white border-l">
            <h3 className="text-[56px] font-bold">22,800+</h3>
            <p className="uppercase text-center font-bold text-[16px]">
            INFOGRAPHICS & VIDEOS CREATED
            </p>
          </div>
          <div className="text-center px-8 sm:py-3 border-white border-l">
            <h3 className="text-[56px] font-bold">1,000s</h3>
            <p className="uppercase text-center font-bold text-[16px]">
            OF SATISFIED CUSTOMERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
