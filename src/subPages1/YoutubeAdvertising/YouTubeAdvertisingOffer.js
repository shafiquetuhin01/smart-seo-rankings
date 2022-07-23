import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import YouTubeCallUs from './YouTubeCallUs';

const YouTubeAdvertisingOffer = () => {
    return (
        <section className="w-11/12 mx-auto my-3 py-1 lg:py-5 bg-[#F3F3F3]">
        <h3 className="my-5 text-4xl font-bold text-center text-info">
        What <span className="text-secondary">YouTube Advertising</span> Services do we offer?
        </h3>
        <p className="text-xl text-center my-7 w-9/12 mx-auto">
        Our YouTube marketing specialists use cutting-edge software solutions and the latest insights into YouTube algorithm updates to devise effective advertising strategies.
        </p>
        <p className="text-xl text-center my-7 w-9/12 mx-auto">
        We steer clear of cookie-cutter approaches. Instead, we create a customized plan that aligns with your specific business needs and goals.
        </p>
        <p className="text-xl text-center my-7 w-9/12 mx-auto">
        Here’s a glimpse into YouTube services:
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
              Comprehensive Audience Research
              </h4>
            </Link>
            <p className="text-center py-2 text-[15px]">
            We research industry trends and examine the business model to determine the target audience. We use one or more of the following ads: Display Ads, Overlay Ads, Skippable Video Ads, Non-Skippable Video Ads, Sponsored Cards, Bumper Ads, etc.
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
              Campaign Setup
              </h4>
            </Link>
            <p className="text-center py-2 text-[15px]">
            We create a Google Ads and Google Analytics account and select campaign goals. These include lead generation, product/service promotion, audience reach, brand awareness, or web traffic generation, among others.
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
              Ad Optimization
              </h4>
            </Link>
            <p className="text-center py-2 text-[15px]">
            Once your ads are up and running, we optimize them periodically to ensure maximum reach and lead generation. Our optimization strategies include incorporating clear CTAs, creating a YouTube end slate, and using well-placed cards, among several others.
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
              Monitoring and Evaluation
              </h4>
            </Link>
            <p className="text-center py-2 text-[15px]">
            We carefully track all metrics (watch time, average view duration, audience engagement and retention, impressions click-through rate, etc.) to ensure the ads are yielding powerful results. We make adjustments to the campaign accordingly and manage each aspect of the project.
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
              Timely and Transparent Reporting
              </h4>
            </Link>
            <p className="text-center py-2 text-[15px]">
            You’ll receive timely and transparent performance updates, so you know exactly how your business is benefiting!
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
              Dedicated Project Manager
              </h4>
            </Link>
            <p className="text-center py-2 text-[15px]">
            We assign a dedicated project manager to each client. From creating engaging ads to leveraging video remarketing, we cover all the bases.
            </p>
            
          </div>
          
        </div>
        <YouTubeCallUs/>
      </section>
    );
};

export default YouTubeAdvertisingOffer;