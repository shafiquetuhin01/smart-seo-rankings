import React from "react";
import { Link } from "react-router-dom";

const YouTubeCallUs = () => {
  return (
    <section className="py-3 text-info">
      <div className="mx-20 mt-10 pb-10">
        <p className="text-3xl my-2 text-info text-center font-bold italic">
          Looking for a <span className="text-secondary">Massive Platform</span>{" "}
          to Advertise Your Business?
        </p>
        <p className="italic text-2xl text-center text-info">
          To Design Call us at 855-444-4777 to kick-start your YouTube
          advertising campaign!
        </p>
        <div className="text-center lg:flex justify-center mt-5">
          <button className="text-lg btn btn-primary text-white mr-4">
            start a live chat
          </button>
          <button className="text-lg btn btn-secondary text-white">
            contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCallUs;
