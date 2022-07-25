import React from "react";
import { Link } from "react-router-dom";

const LinkedinCallUs = () => {
  return (
    <section className="mx-20 mt-12 pb-10">
      <h2 className="text-4xl text-center text-secondary font-bold italic">
      Growing Your Business Has Never Been This Easy
      </h2>
      <p className="text-3xl mt-2 mb-8 text-white text-center italic font-bold">
        Call us at {" "}
        <Link to="/phone" className="text-white mx-1">
          855-444-4777
        </Link>
         to kick-start your LinkedIn marketing campaign!
      </p>
      <div className="text-center">
        <button className="btn btn-accent text-white mr-4">
          start a live chat
        </button>
        <button className="btn btn-secondary text-white">
          get a free quote and website audit
        </button>
      </div>
    </section>
  );
};

export default LinkedinCallUs;
