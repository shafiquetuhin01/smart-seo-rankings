import React from "react";

const YouTubeAwards = () => {
  return (
    <section
      className="bg-no-repeat bg-cover border-styles w-10/12 mx-auto pt-2 py-8"
      style={{
        backgroundImage: 'url("https://i.ibb.co/ckrn2kp/partner-area-bg.jpg")',
      }}
    >
      <div className="lg:grid lg:grid-cols-6 grid grid-cols-2 place-items-center py-4 justify-center items-center gap-2">
        <img
          src="https://i.ibb.co/DMGVsDd/customer-choice-award-sitejabber-2018.webp"
          alt=""
        />
        <img
          src="https://i.ibb.co/27K9MfJ/top-digital-marketing-2021.webp"
          alt=""
        />
        <img
          src="https://i.ibb.co/27K9MfJ/top-digital-marketing-2021.webp"
          alt=""
        />
        <img
          src="https://i.ibb.co/411LRrs/top-seo-services-company-goodfirms-v1.webp"
          alt=""
        />
        <img
          src="https://i.ibb.co/G21kb9f/search-berg-trustpilot-reviews-v1.webp"
          alt=""
        />
        <div className="">
          <img src="https://i.ibb.co/f9c5SJN/google.webp" alt="" />
          <img
            className="mt-3"
            src="https://i.ibb.co/vvPsHdZ/bing-ads.webp"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex grid grid-cols-2 gap-1 place-content-evenly object-cover whitespace-nowrap">
        <img
          className="block lg:hidden"
          src="https://i.ibb.co/vvPsHdZ/bing-ads.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default YouTubeAwards;
