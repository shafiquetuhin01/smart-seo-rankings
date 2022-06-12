import React from "react";
import OnPageContent from "./OnPageContent";
import "./OnPageSeo.css";
import SeoCallUs from "./SeoCallUs";
const OnPageSeo = () => {
  return (
    <div className="onpage-bg">
      <div className="mx-16">
        <div className="mx-20 py-10">
          <h2 className="text-4xl text-center text-accent font-bold">
            Quantifiable, Google Compliant{" "}
            <span className="text-secondary">On-Page SEO</span> &{" "}
            <span className="text-secondary">Off-Page SEO</span> Services That
            Deliver Reliable Results
          </h2>
          <p className="on-page-text">
            Having successfully completed over 40,000 projects, we can
            confidently say that our SEO solutions work. Our clients grow their
            business online with confidence.
          </p>
          <p className="on-page-text">
            Below are some of the many vital tasks that are at the core of our
            SEO Strategy.
          </p>
        </div>
        <OnPageContent />
        <SeoCallUs />
      </div>
    </div>
  );
};

export default OnPageSeo;
