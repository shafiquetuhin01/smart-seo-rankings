import React from "react";

const ReviewWidget = () => {
  return (
    <div className="w-6/12 mx-auto">
      <div className="w-8/12 mx-auto text-center bg-neutral">
        <h2 className="text-base p-1 text-white font-bold">For more detailed Search Berg reviews, check us out on:</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-0 border border-black">
        <div className="border-r border-black">
          <a href="https://clutch.co/profile">
            <img src="https://i.ibb.co/JCMcBTq/clutch-reviews.webp" alt="" />
          </a>
        </div>
        <div className="border-r border-black">
          <a href="https://www.trustpilot.com/review/">
            <img src="https://i.ibb.co/B3zVBKy/google-reviews.webp" alt="" />
          </a>
        </div>
        <div className="">
          <a href="https://www.sitejabber.com/reviews/">
            <img
              src="https://i.ibb.co/nPp433B/sitejabber-reviews.webp"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewWidget;
