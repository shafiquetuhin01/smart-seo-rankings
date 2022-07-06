import React from "react";
import { Link } from "react-router-dom";
const DashboardCallUs = () => {
  return (
    <div className="mx-20 mt-12 pb-10">
      <h2 className="text-4xl py-3 text-center text-accent font-bold italic">
      Get More <span className="text-secondary">Traffic, Calls & More Sales!</span></h2>
      <p className="text-3xl mt-2 mb-8 text-accent text-center italic font-bold">
        Call us at:{" "}
        <Link to="/phone" className="lg:text-5xl text-3xl text-accent">
          855-444-4777
        </Link>
      </p>
      <div className="text-center lg:flex justify-center">
        <button className="btn btn-accent text-white mr-4">
          start a live chat
        </button>
        <button className="btn btn-secondary text-white">
          get a free quote and website audit
        </button>
      </div>
    </div>
  );
};

export default DashboardCallUs;
