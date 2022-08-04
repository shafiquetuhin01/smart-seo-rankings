import React from "react";
import { FaPhoneAlt, FaRegFolder } from "react-icons/fa";

const SeoProblemTogether = () => {
  return (
    <section className="py-6 bg-[#EEF4FD] w-11/12 mx-auto">
      <div>
      <h3 className="w-7/12 mx-auto text-2xl font-bold text-center text-info">
        These problems together might seem convoluted, but there is a simple way
        out – banking on Search Berg and our team of SEO content writers. High
        quality optimized content, delivered consistently, keeping your brand
        voice at the forefront.
      </h3>
      </div>
      <div className="text-center py-6">
        <button className="hover:bg-[#DE600D] w-[230px] mr-5 btn btn-info text-white text-xl capitalize"><FaPhoneAlt className="hover:bg-[#DE600C] mr-3 bg-[#06204D] p-2 text-[2.2rem]"/>855-444-477</button>
        <button className="hover:bg-[#06204D] w-[230px] btn btn-secondary text-white text-xl capitalize"><FaRegFolder className="hover:bg-[#06204D] mr-3 bg-[#DE600D] p-2 text-[2.2rem]"/>Request Quote</button>
      </div>
    </section>
  );
};

export default SeoProblemTogether;
