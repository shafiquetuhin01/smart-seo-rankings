import React from "react";

const FbSingleFeatured = ({ content }) => {
    const {img,title,description} = content;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <div class="card-body">
        <img src={img} alt="" />
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-start">
          <button class="btn btn-secondary text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FbSingleFeatured;
