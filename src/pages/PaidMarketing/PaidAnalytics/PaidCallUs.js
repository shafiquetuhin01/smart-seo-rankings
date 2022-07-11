import React from "react";
import {Link} from "react-router-dom";
const PaidCallUs = () => {
  return (
    <div className="bg-info py-3 text-white">
        <div className="mx-20 mt-6 pb-10">
      
      <p className="text-3xl mt-2 mb-8 text-white text-center italic font-bold">
        Call us at:{" "}
        <Link to="/phone" className="lg:text-5xl text-white text-3xl">
          855-444-4777
        </Link>
      </p>
      <p className="italic text-4xl font-bold text-center text-white">To Design the Perfect PPC Strategy <span className="text-secondary">For Your Business</span>!</p>
      <div className="text-center lg:flex justify-center mt-5">
        <button className="text-lg btn btn-primary text-white mr-4">
          start a live chat
        </button>
        <button className="text-lg btn btn-secondary text-white">
          contact us
        </button>
      </div>
    </div>
    </div>
  );
};

export default PaidCallUs;
