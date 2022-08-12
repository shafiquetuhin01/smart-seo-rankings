import React from "react";
import { useState } from "react";

const SeoContentDependable = () => {
    
  const agencies = (
    <>
      <div>
        <p className="mt-4 text-sm">
          There’s so much on your plate already, and one of the biggest hurdles
          in front of you is getting quality content at scale for all your
          clients.
        </p>
        <p className="mt-4 text-sm">
          You’ve worked with freelance SEO content writers and you’ve tried
          hiring in-house. The time spent running after and managing resources
          is time you could’ve spent on more productive endeavors like building
          strategies and parsing through analytics.
        </p>
        <p className="mt-4 text-sm">
          What you need is a responsible, dedicated and experienced SEO service
          provider to take up the challenge. Our SEO writers stay on top of the
          latest SEO developments to make sure you get optimized, quality
          content like clockwork.
        </p>
      </div>
    </>
  );
  const marketers = (
    <>
      <div>
        <p className="mt-4 text-sm">
          Whether you’re a marketer, or a business owner doing your own
          marketing, there’s just so much you can do alone.
        </p>
        <p className="mt-4 text-sm">
          You may have the expertise to develop an SEO strategy yourself, but do
          you have the time to create quality content regularly?
        </p>
        <p className="mt-4 text-sm">
          This is where Search Berg’s SEO content writing services come in
          handy. We have a diverse team of experienced writers, able to take on
          all manner of projects and provide results.
        </p>
      </div>
    </>
  );
  const brands = (
    <>
      <div>
        <p className="mt-4 text-sm">
          A vital part of your brand’s ability to compete is having well-written
          content representing it on the website and social media channels.
        </p>
        <p className="mt-4 text-sm">
          The credibility of a brand in front of its target audience can make or
          break it. SEO content helps build this credibility.
        </p>
        <p className="mt-4 text-sm">
          Your need for content may vary from time to time. You need a versatile
          team of writers that is able to give your blog attention if needed on
          one day, and provide quality social media posts the other.
        </p>
        <p className="mt-4 text-sm">
          If you're not yet investing resources on content, now is the time to
          start. Your brand will thank you for it!
        </p>
      </div>
    </>
  );
  const [click, setClick] = useState(agencies);
  
  const [isActive, setIsActive] = useState(true);
  const handleClick = (e) =>{
    setClick(e);
    setIsActive(current => current);
  }
  return (
    <section className="w-11/12 mx-auto">
      <div>
        <h3 className="py-3 text-info text-center text-3xl font-bold">
          Dependable{" "}
          <span className="text-secondary">SEO Content Writing </span> Services
          For Your Needs!
        </h3>
        <p className="text-info text-center font-bold mx-14">
          It doesn’t matter if you need eye-catching, high-converting copy for
          the bottom of your sales funnel or authority building content to get
          eyes on your website, we do it all. From landing pages, articles,
          blogs to social media, newsletters and emails, our writers are adept
          at providing pristine content quickly.
        </p>
        <p className="w-[200px] mx-auto border-4 border-secondary my-3 mb-10 "></p>
        <p className="text-center font-bold my-10 lg:mx-28 bg-[#F9F1EC]">
          Our efficient client dashboard, dedicated project managers, and large
          team of SEO content writers with subject-matter expertise in various
          industries enable us to provide seamless service highly customizable
          and scalable content for:
        </p>
        <div className="lg:flex justify-evenly bg-[#FFFFFF]">
          <h3 style={{backgroundColor:isActive?"#FFE5D3":""}}
            onClick={() => handleClick(agencies)}
            className={`text-[#7A7A93]  cursor-pointer text-lg uppercase text-center`}
          >
            AGENCIES
          </h3>
          <h3 style={{backgroundColor:isActive?"#FFE5D3":""}}
            onClick={() => handleClick(marketers)}
            className={`text-[#7A7A93]  cursor-pointer text-lg uppercase text-center`}
          >
            MARKETERS AND DIYERS
          </h3>
          <h3 style={{backgroundColor:isActive?"#FFE5D3":""}} onClick={() => handleClick(brands)} className={`text-[#7A7A93]  cursor-pointer text-lg uppercase text-center`}>
            BRANDS
          </h3>
        </div>
        <div className="mx-auto w-8/12 my-6">
            {click}
        </div>
      </div>
    </section>
  );
};

export default SeoContentDependable;
