import React from "react";
import { FaPhoneAlt, FaRegFolder } from "react-icons/fa";
const SeoContentHelped = () => {
  return (
    <div>
      <div>
        <h3 className="w-5/12 mx-auto text-4xl text-center font-bold text-info py-3">
          We Have Helped! Our Clients
          <span className="text-secondary">Get Featured</span> On
        </h3>
        <p className="w-[150px] mx-auto border-2 border-secondary my-3 mb-10 "></p>
      </div>
      <div className="lg:flex items-center gap-3 client-featured-img justify-center my-10">
        
        <div>
          <img
            src="https://i.ibb.co/BNqN48r/outbrain.webp"
            alt="Featured Images"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/bQqM9Bs/instant-shift.webp"
            alt="Featured Images"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/FhTC2pv/smallbizdaily.webp"
            alt="Featured Images"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/2v6fNJX/inkbot-design.webp"
            alt="Featured Images"
          />
        </div>
      </div>
      <div>
        <h3 className="w-5/12 mx-auto text-4xl text-center font-bold text-info py-3">
          Don’t See What You Want?
          <span className="text-secondary">Don’t Worry,</span> Our Experts Can
          Help
        </h3>
        <p className="w-[150px] mx-auto border-2 border-secondary my-3 mb-10 "></p>
      </div>
      <div className="text-center py-6">
        <button className="hover:bg-[#DE600D] w-[230px] mr-5 btn btn-info text-white text-xl capitalize">
          <FaPhoneAlt className="hover:bg-[#DE600C] mr-3 bg-[#06204D] p-2 text-[2.2rem]" />
          855-444-477
        </button>
        <button className="hover:bg-[#06204D] w-[230px] btn btn-secondary text-white text-xl capitalize">
          <FaRegFolder className="hover:bg-[#06204D] mr-3 bg-[#DE600D] p-2 text-[2.2rem]" />
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default SeoContentHelped;
