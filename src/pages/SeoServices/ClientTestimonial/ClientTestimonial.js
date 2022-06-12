import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const ClientTestimonial = () => {
  return (
    <div className="py-10 border-solid border-black border-y mx-auto">
      <div className="w-8/12 mx-auto">
        <h2 className="font-bold text-accent text-4xl text-center">
          Read Our <span className="text-secondary">Client Testimonials!</span>
        </h2>
        <p className="text-center my-4" style={{ fontSize: "18px" }}>
          With more than 10 years in the SEO industry, we have hundreds of
          satisfied clients. Read the testimonials below and see what they have
          to say about our work.
        </p>
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default ClientTestimonial;
