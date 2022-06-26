import React from "react";
import { Link } from "react-router-dom";

const DrivenGrow = () => {
  return (
    <div className="py-6 w-11/12 mx-auto">
      <h3 className="text-secondary text-4xl font-bold text-center py-8">
        Grow Your Business{" "}
        <span className="text-accent">With Confidence With SearchBerg!</span>
      </h3>
      <div className="lg:flex items-center justify-center gap-4">
        <div className="text-xl w-6/12">
          <h2 className="font-bold">
            We will create a long-term SEO strategy for your website that will
            start bringing in traffic, rankings and revenue within weeks!
          </h2>
          <p className="mt-3">
            Utilizing a white-hat approach to SEO, our team specializes in
            transforming ordinary websites into extraordinary money sites. To
            date, we’ve completed more than 40,000 SEO projects, and have
            published in excess of 150,000 content pieces—a testament to the
            scale and efficacy of our SEO solutions.
          </p>
          <p className="mt-3">
            And it gets better! At SearchBerg, we’re customer-focused to the
            core. Our SEO solutions come with a 100% money back guarantee,
            require no contractual obligations whatsoever, and are free of any
            hidden fees.
          </p>
          <p className="mt-3">
            All our SEO packages are beyond flexible, so you can pick the
            services you need according to your business’s marketing
            growth-related goals. Our SEO professionals combine on-page,
            off-page, link building, and other SEO activities to achieve amazing
            results for your business.
          </p>
        </div>
        <div
          className="right w-6/12 relative"
          style={{
            backgroundImage: `url("https://i.ibb.co/vJKgSjM/banner-2.webp")`,

            height: "442px",
            maxWidth: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-right text-white p-4 absolute top-[10%] right-0">
            <h4 className="text-2xl">Give us a call to Transform</h4>
            <h4 className="text-2xl">an ordinary website into a</h4>
            <h4 className="text-4xl mt-2 font-bold">Revenue</h4>
            <h4 className="text-4xl font-bold">Generating</h4>
            <h4 className="text-6xl font-bold mt-1">Money <span className="text-2xl">site!</span></h4>
            <h4 className="text-xl mt-1">Call SearchBerg at</h4>
            <Link to="#"><h4 className="text-4xl hover:underline text-accent font-bold my-2">834-444-5666</h4></Link>
            <h4 className="text-xl">or Start a <Link className="text-white underline" to="#">Live Chat!</Link></h4>
            <h4 className="text-xl mt-1">Click here for a free <Link className="text-white underline" to="#">audit report</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivenGrow;
