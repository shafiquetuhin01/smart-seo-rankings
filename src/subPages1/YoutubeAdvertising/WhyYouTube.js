import React from "react";

const WhyYouTube = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("https://i.ibb.co/QP7VwKp/fb-section3-bg.webp")',
      }}
      className="bg-cover bg-no-repeat py-8"
    >
      <h3 className="text-white text-5xl font-bold text-center my-5">
        Why <span className="text-secondary">You Tube Advertising</span> Is
        Important
      </h3>
      <div className="w-11/12 lg:grid grid lg:grid-cols-4 grid-cols-1 justify-center items-center mx-auto gap-5 mt-10">
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/yqR831r/fb-74.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
            of adults in the U.S. are active every day on YouTube
          </p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/WPpZbM8/fb-15.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
            of web users discover new brands or products/services through
            YouTube
          </p>
        </div>
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/h1pJyCx/fb-93.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
            of all B2B marketers use YouTube for content marketing purposes
          </p>
        </div>
        <div className="">
          <img
            className="mx-auto mt-5"
            src="https://i.ibb.co/93s2bxK/fb-80-4.webp"
            alt=""
          />
          <p className="text-white text-lg text-center">
            more YouTube users are engaging with creators and channels
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyYouTube;
