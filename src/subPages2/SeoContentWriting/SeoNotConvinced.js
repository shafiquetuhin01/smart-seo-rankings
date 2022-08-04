import React from "react";
import { FaExclamation } from "react-icons/fa";

const SeoNotConvinced = () => {
  return (
    <section className="py-6">
      <div className="lg:flex justify-center items-center mx-auto">
        <div className="w-1/2 mx-auto">
          <div>
            <h4 className="text-secondary text-2xl font-bold">
              NOT CONVINCED?
            </h4>
            <h3 className="text-xl text-left font-bold text-info">
            See if you can identify with any of the following problems:
            </h3>
            <p className="w-[120px] mt-1 border-4 border-secondary"></p>
          </div>
          <div className="mt-6">
            <p className="font-bold mt-1 text-info"><span><FaExclamation className="text-white p-1 rounded-[100%] text-xl inline bg-secondary mr-3"/></span>You’re publishing regular content, but it doesn’t rank.</p>
            <p className="font-bold mt-1 text-info"><span><FaExclamation className="text-white p-1 rounded-[100%] text-xl inline bg-secondary mr-3"/></span>You’re unable to build any brand recognition and recall.</p>
            <p className="font-bold mt-1 text-info"><span><FaExclamation className="text-white p-1 rounded-[100%] text-xl inline bg-secondary mr-3"/></span>Lead generation and conversions are stagnant.</p>
            <p className="font-bold mt-1 text-info"><span><FaExclamation className="text-white p-1 rounded-[100%] text-xl inline bg-secondary mr-3"/></span>You’re unable to keep up with your posting frequency</p>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <img src="https://i.ibb.co/Ny9KH19/why-searchberg.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SeoNotConvinced;
