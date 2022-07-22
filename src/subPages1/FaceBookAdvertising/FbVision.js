import React from "react";
import { Link } from "react-router-dom";
const FbVision = () => {
  return (
    <section
      className="py-[100px] pl-[400px] w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("https://i.ibb.co/McHvzZp/cta-bg.webp")' }}
    >
      <div className="mx-20 mt-12 pb-10">
        <h2 className="text-5xl text-center text-white font-bold">
        You have a vision for your Facebook advertising. <br />
We have the team to make that a reality!
        </h2>
        <p className="text-3xl mt-2 mb-8 text-white text-center italic font-bold">
          Call us at:{" "}
          <Link to="/phone" className="text-6xl text-white">
            855-444-4777
          </Link>
        </p>
        <div className="text-center">
          <button className="btn btn-accent text-white mr-4">
            start a live chat
          </button>
          <button className="btn btn-secondary text-white">
            get a free quote and website audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FbVision;
