import React from "react";

const ContentAward = () => {
  return (
    <div
      className="my-5"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/DGYMzjB/fb-advertising-bg.jpg")',
      }}
    >
      <h3 className="text-4xl font-bold text-center py-5 text-info">
        Hire Top Rated{" "}
        <span className="text-secondary">Content Marketing Experts</span>
      </h3>
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 place-items-center justify-center items-center gap-2 mx-16">
          <img
            src="https://i.ibb.co/27K9MfJ/top-digital-marketing-2021.webp"
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
            src="https://i.ibb.co/DMGVsDd/customer-choice-award-sitejabber-2018.webp"
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
        </div>
      </div>
    </div>
  );
};

export default ContentAward;
