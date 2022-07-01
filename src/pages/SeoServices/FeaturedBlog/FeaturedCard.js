import React from "react";

const FeaturedCard = () => {
  return (
    <div className="lg:flex items-center justify-center gap-5 pb-10 mx-auto ">
      <div className="card shadow-gray-500 card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/3TgbPg3/blog-image-1-300x218.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body w-full  ">
          <h2 className="text-lg font-bold left">
            A Beginner’s Guide to Optimizing Web Content
          </h2>
          <p className="text-sm justify ">
            As we inch closer to 2022, it’s safe to say that optimization is
            still one of the most important aspects of running an online
            business...
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
      <div className="card shadow-gray-500 card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/3TgbPg3/blog-image-1-300x218.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body w-full  ">
          <h2 className="text-lg font-bold left">
            A Beginner’s Guide to Optimizing Web Content
          </h2>
          <p className="text-sm justify ">
            As we inch closer to 2022, it’s safe to say that optimization is
            still one of the most important aspects of running an online
            business...
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
      <div className="card shadow-gray-500 card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/WsLs2q3/how-to-write-content-that-generate-leads.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body w-full  ">
          <h2 className="text-lg font-bold left">
            A Beginner’s Guide to Optimizing Web Content
          </h2>
          <p className="text-sm justify ">
            As we inch closer to 2022, it’s safe to say that optimization is
            still one of the most important aspects of running an online
            business...
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
      <div className="card shadow-gray-500 card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/dMg4w7t/blog1.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body w-full  ">
          <h2 className="text-lg font-bold left">
            A Beginner’s Guide to Optimizing Web Content
          </h2>
          <p className="text-sm justify ">
            As we inch closer to 2022, it’s safe to say that optimization is
            still one of the most important aspects of running an online
            business...
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
