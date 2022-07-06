import React from "react";
import ReactPlayer from "react-player";
import DrivenCallUs from "./DrivenCallUs";
import DrivenGrow from "./DrivenGrow";

const DataDriven = () => {
  return (
    <div className="w-full border border-t-black">
      <div className="mx-auto w-11/12">
        <h2 className="text-center text-4xl font-bold text-[#0E2E67] mt-3 py-6">
          Why Do SEO? It’s{" "}
          <span className="text-secondary">Scalable & Data-Driven!</span>
        </h2>
        <div className="mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-full mx-auto lg:w-4/12">
                <ReactPlayer className='' height={350} width={400} controls url="https://youtu.be/nkZAm413MdA" />
            </div>
            
            <div className="w-full lg:w-8/12">
              <h3 className="text-xl font-bold justify">
                SEO’s importance in a digital-first world is indisputable.
                According to Ahrefs, it helps businesses (regardless of their
                scale) cut through the noise by making them visible on the front
                page of the internet—search engine results pages (SERPs).
              </h3>
              <p className="py-6 text-xl justify">
                Great SEO leverages powerful analytics and keyword research to
                attract qualified, local traffic to your business’s website,
                supercharging its sales potential and making it a money-making
                machine! And that’s exactly what SearchBerg does as an
                award-winning digital marketing agency! From a complete website
                audit that identifies potential ranking obstacles to systematic
                on-page optimization based on exhaustive keyword research, we
                leave no stone unturned in guaranteeing your business’s
                long-term success!
              </p>
              <p className="mt-3 text-xl justify">
                Complemented by a robust content development strategy that
                includes blogs, articles hosted on third party website, PRs,
                guest blogs, infographics, videos, and more, your business will
                dominate SERPs in no time.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <DrivenGrow />
      <DrivenCallUs />
    </div>
  );
};

export default DataDriven;
