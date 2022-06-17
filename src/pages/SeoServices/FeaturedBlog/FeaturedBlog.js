import React from "react";
import { Link } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
const FeaturedBlog = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="w-9/12 mx-auto py-5">
        <h2 className="text-4xl font-bold text-center ">
          Our <span className="text-secondary"> Featured Blog Content </span>On
          SEO
        </h2>
        <p className="text-center text-xl mt-3">
          To read more featured content on other viable SEO Services disciplines
          and digital marketing strategies, please visit our <Link to="/#">blog.</Link>
        </p>
      </div>
      <FeaturedCard />
    </div>
  );
};

export default FeaturedBlog;
