import React from 'react';
import { Link } from "react-router-dom";
const DrivenCallUs = () => {
    return (
        <div className="mx-20 mt-2 pb-10">
      <h2 className="text-4xl py-3 text-center text-accent font-bold italic">
      Hire An Award Winning <span className="text-secondary">SEO Firm!</span></h2>
      <p className="text-3xl mt-2 mb-8 text-accent text-center italic font-bold">
        Call us at:{" "}
        <Link to="/phone" className="text-3xl lg:text-5xl text-accent">
          855-444-4777
        </Link>
      </p>
      <div className="text-center flex justify-center">
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

export default DrivenCallUs;