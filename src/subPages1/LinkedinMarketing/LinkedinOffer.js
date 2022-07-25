import React from "react";
import { Link } from "react-router-dom";

const LinkedinOffer = () => {
  return (
    <section className="w-11/12 mx-auto my-3 py-1 lg:py-5 bg-[#F3F3F3]">
      <h3 className="my-5 text-4xl font-bold text-center text-info">
        What <span className="text-secondary">LinkedIn Marketing </span> &
        Management Services do we offer?
      </h3>
      <p className="text-xl text-center my-7 w-9/12 mx-auto">
        Our LinkedIn marketing specialists devise actionable strategies. We
        examine each client’s business model and create an individualized
        project that helps achieve the desired results. Our process includes:
      </p>

      <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10">
        <div className="text-center mt-4">
          <img
            className="mx-auto h-20"
            src="https://i.ibb.co/t8QDFbt/icon1.webp"
            alt="icon"
          />
          <Link className=" text-accent" to="#">
            <h4 className="text-xl font-bold hover:underline py-2">
              Target Audience Research
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
            We use state-of-the-art tools to specify the target audience and
            gain insights into their preferences, LinkedIn activity, brand
            expectations, etc.
          </p>
        </div>
        <div className="text-center mt-4 lg:border-x-[1px] lg:border-secondary lg:border-dashed">
          <img
            className="mx-auto h-20"
            src="https://i.ibb.co/2ybCWqz/icon2.webp"
            alt="icon"
          />
          <Link className=" text-accent" to="#">
            <h4 className="text-xl font-bold hover:underline py-2">
              LinkedIn Profile Creation
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
            Once we’ve covered the basics, we create an updated LinkedIn profile
            for our clients. If you already have a LinkedIn page, we’ll tailor
            it in accordance with our research. Depending on your industry,
            demographic, and brand identity, we make key adjustments to ensure
            your profile stands out.
          </p>
        </div>
        <div className="text-center mt-4">
          <img
            className="mx-auto h-20"
            src="https://i.ibb.co/0njgtW2/icon3.webp"
            alt="icon"
          />
          <Link className=" text-accent" to="#">
            <h4 className="text-xl font-bold hover:underline py-2">
              LinkedIn Content Creation
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
            Our LinkedIn specialists create high-quality content that’s
            periodically posted. Our content creation strategy is tailored to
            maximize connections and engagement with other brands. Depending on
            your plan, we also use LinkedIn ads to increase your brand’s reach
            and boost sales.
          </p>
        </div>
        <div className="text-center mt-4">
          <img
            className="mx-auto h-20"
            src="https://i.ibb.co/fqnr9nc/icon4.webp"
            alt="icon"
          />
          <Link className=" text-accent" to="#">
            <h4 className="text-xl font-bold hover:underline py-2">
              Full-Service Management and Analysis
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
            Once the strategy is up and running, we manage each aspect to
            minimize room for error. Our LinkedIn specialists analyze metrics to
            enhance performance and make adjustments accordingly. We oversee all
            the ongoing activity on your page.
          </p>
        </div>
        <div className="text-center mt-4 lg:border-x-[1px] lg:border-secondary lg:border-dashed">
          <img
            className="mx-auto h-20"
            src="https://i.ibb.co/HzM4Vxt/icon5.webp"
            alt="icon"
          />
          <Link className=" text-accent" to="#">
            <h4 className="text-xl font-bold hover:underline py-2">
              Periodic Reporting
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
            Protect your brand and company reputation from negative press and
            black hat SEO to reestablish yourself in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LinkedinOffer;
