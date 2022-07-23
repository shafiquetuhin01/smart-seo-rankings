import React from "react";

const TwitterFollower = () => {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://i.ibb.co/3532K5x/fb-advertising-bg.webp")',
      }}
      className="py-6 bg-cover bg-no-repeat pb-8"
    >
      <div className="w-11/12 mx-auto">
        <h3 className="text-4xl text-center text-info font-bold my-5">
          Watch Your <span className="text-secondary">Follower Count</span> and{" "}
          <span className="text-secondary">Sales</span>
          Skyrocket!
        </h3>
        <div className="lg:flex justify-center items-center">
          <div className="w-[70%] lg:mr-16">
            <h3 className="text-2xl text-info font-bold mt-5">
            Are you struggling to stand out from the competition on Twitter?
            </h3>
            <h3 className="text-2xl text-info font-bold mt-5">
            Are you out of the loop when it comes to the latest trends and Twitter marketing strategies?
            </h3>
            <p className="text-black text-lg mt-5">
            There are currently over 330 million active users on Twitter.
            </p>
            <p className="text-black text-lg mt-5">
            As the platform grows in popularity, millions of businesses are creating accounts and targeting their audience! If your Twitter presence isn’t up to snuff, you could end up watching potential sales go down the drain…
            </p>
            <p className="text-black text-lg mt-3">
            Our team devises whip-smart Twitter marketing strategies to help you engage your audience.
            </p>
            <p className="text-black text-lg mt-3">
            We’re focused on three key areas: trends, quality, and consistency and run both organic and paid Twitter marketing campaigns to maximize your return on investment.


            </p>
          </div>
          <div className="w-[30%]">
            <img src="https://i.ibb.co/4KSg5Fm/twitter-img1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFollower;
