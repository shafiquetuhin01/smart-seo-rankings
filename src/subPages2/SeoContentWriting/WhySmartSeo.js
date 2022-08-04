import React from "react";
import SeoNotConvinced from "./SeoNotConvinced";

const WhySmartSeo = () => {
  return (
    <section className="py-8 w-11/12 mx-auto">
      <div>
        <h3 className="text-info text-4xl font-bold py-5 text-center">
          Why <span className="text-secondary">Smart SEO ?</span>
        </h3>
        <p className="w-[200px] mx-auto border-4 border-secondary"></p>
        <h4 className="text-primary text-center font-bold my-5 text-3xl">
          Authoritative, Compelling & Result-Oriented SEO Content
        </h4>
        <p className="text-center text-info py-2 font-bold lg:mx-20">
          Finding the perfect balance between writing for humans and search
          engines is no mean feat. Not having your content rank even after your
          best efforts is heart-breaking. Our SEO content writers know what it
          takes.
        </p>
      </div>
      <div>
        <SeoNotConvinced/>
      </div>
    </section>
  );
};

export default WhySmartSeo;
