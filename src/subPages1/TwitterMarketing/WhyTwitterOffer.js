import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhyTwitterOffer = () => {
    return (
        <section className="w-11/12 mx-auto my-3 py-1 lg:py-5 bg-[#F3F3F3]">
      <h3 className="my-5 text-4xl font-bold text-center text-info">
      What <span className="text-secondary">Twitter Marketing </span> Services do we offer?
      </h3>
      <p className="text-xl text-center my-7 w-9/12 mx-auto">
      Our social media experts create an individualized Twitter marketing plan for each client.
      </p>
      <p className="text-xl text-center my-7 w-9/12 mx-auto">
      How does this help? Instead of receiving a one-size-fits-all strategy that may or may not work, you’ll get tailored solutions that help you gain an edge in your industry!
      </p>
      <p className="text-xl text-center my-7 w-9/12 mx-auto">
      Here’s what we offer:
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
          We specify target demographics and research consumer preferences to maximize engagement and conversions.
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
            Profile Development
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
          Don’t have a Twitter profile? We’ll create one from scratch. Based on the insights we collect, we’ll tweak your profile to set it apart from competitors’.
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
            Twitter Content Creation
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
          Our content writing team creates and optimizes high-quality content to keep readers engaged. We run everything by the client beforehand. Our experts use high-ranking and industry-specific hashtags to improve visibility.
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
            Page Follower Growth
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
          We use organic growth strategies to increase your follower count and engage more customers. From sharing trending content to posting polls, we use a wide range of strategies to give your Twitter page a much-needed boost.
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
            Twitter Advertising and Analysis
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
          We carefully monitor ongoing campaigns and make adjustments accordingly to ensure the best possible results. We manage and analyze all activity, including Twitter analytics and customer feedback.
          </p>
          
        </div>
        <div className="text-center mt-4">
          <img
            className="mx-auto h-20"
            src="https://i.ibb.co/G7BrYLG/icon6.webp"
            alt="icon"
          />
          <Link className=" text-accent" to="#">
            <h4 className="text-xl font-bold hover:underline py-2">
            Periodic Reporting
            </h4>
          </Link>
          <p className="text-center py-2 text-[15px]">
          We keep our clients in the loop by sharing monthly performance reports and additional insights. Ultimately, we want you to see exactly how your business is benefiting. Our transparent approach helps keep things on track and ensure long-term growth and sales.
          </p>
          </div>
      </div>
    </section>
    );
};

export default WhyTwitterOffer;