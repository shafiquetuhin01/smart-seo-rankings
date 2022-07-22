import React from "react";

const WhyFbAdvertising = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("https://i.ibb.co/QP7VwKp/fb-section3-bg.webp")',
      }}
      className="bg-cover bg-no-repeat py-8"
    >
      <h3 className="text-white text-5xl font-bold text-center my-5">
        Why <span className="text-secondary">Facebook Advertising</span> Is
        Important
      </h3>
      <div className="w-11/12 lg:grid grid lg:grid-cols-4 grid-cols-1 justify-center items-center mx-auto gap-5 mt-10">
        <div>
          <img className="mx-auto" src="https://i.ibb.co/yqR831r/fb-74.webp" alt="" />
          <p className="text-white text-lg text-center">
            of high-income earners are <br /> active on Facebook
          </p>
        </div>
        <div>
          <img className="mx-auto" src="https://i.ibb.co/WPpZbM8/fb-15.webp" alt="" />
          <p className="text-white text-lg text-center">
            of of social media users in the US <br /> shop on the platform
          </p>
        </div>
        <div>
          <img className="mx-auto" src="https://i.ibb.co/h1pJyCx/fb-93.webp" alt="" />
          <p className="text-white text-lg text-center">
            of social media marketers use <br /> paid Facebook ads
          </p>
        </div>
        <div className="">
          <img className="mx-auto mt-5" src="https://i.ibb.co/93s2bxK/fb-80-4.webp" alt="" />
          <p className="text-white text-lg text-center">
            of U.S. social referral share to <br /> ecommerce sites come from
            Facebook
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyFbAdvertising;
