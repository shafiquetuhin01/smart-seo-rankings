import React from "react";

const FbSingleFeatured = ({ content }) => {
    const {img,title,description} = content;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <img src={img} alt="" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-secondary text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FbSingleFeatured;
