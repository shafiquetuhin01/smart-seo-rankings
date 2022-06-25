import React from "react";
import "./ClientFeatured.css";
const ClientFeatured = () => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="text-accent mt-4 text-center text-4xl font-bold">
        We Have Helped Our Clients{" "}
        <span className="text-secondary mt-3">Get Featured On</span>
      </h2>
      <div className="lg:grid lg:grid-cols-4 client-featured-img place-items-center my-10">
        <div>
          <img
            src="https://i.ibb.co/6RkC9GF/forbes.webp"
            alt="Featured Images"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/NWSXy7F/search-engine-watch-logo.png"
            alt="Featured Images"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/ykqgn7G/yahoo-finance.webp"
            alt="Featured Images"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/mzCFwRM/marketers-media.webp"
            alt="Featured Images"
          />
        </div>
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
    </div>
  );
};

export default ClientFeatured;
