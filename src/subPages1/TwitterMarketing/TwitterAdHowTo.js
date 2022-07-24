import React from "react";

const TwitterAdHowTo = () => {
  return (
    <section className="mx-auto py-5 mt-5">
      <div>
        <h3 className="text-4xl text-center font-bold text-info mb-4">
          How To Get Started With{" "}
          <span className="text-secondary">Twitter Advertising</span>{" "}
        </h3>
        <p className="text-accent py-5 text-center text-xl">
          Thinking of investing in Twitter paid advertising? Here are some
          options!
        </p>
      </div>
      <div className="w-full mx-auto lg:flex justify-center gap-10">
        <img src="https://i.ibb.co/FHZx0KP/screenshot1.png" alt="" />
        <img src="https://i.ibb.co/yYrPts1/screenshot2.png" alt="" />
        <img src="https://i.ibb.co/ZzDC0QJ/screenshot3.png" alt="" />
      </div>
    </section>
  );
};

export default TwitterAdHowTo;
