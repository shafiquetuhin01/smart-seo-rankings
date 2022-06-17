import React from "react";
import "./ImgChanger.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useEffect } from "react";
const ImgChanger = () => {
  const items = [
    {
      name: (
        <>
          <li>
            <div style={{maxWidth:'280px'}} className="flex li-items-span p-5 justify-center">
            <h4 style={{fontSize:'18px'}} className="flex ml-4 items-center text-white font-bold">
              <span className="bg-primary text-white font-bold"> 1</span>Keyword Research Document
            </h4>
            </div>
            <p style={{fontSize:'16px'}} className="justify mt-2">
              We identify important keyword terms relevant to your industry,
              service, region, target audience and competitors to optimize your
              website for traffic and rankings.
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>2</span>Website Audit
            </h4>
            <p>
              Here, an extensive analysis is performed that puts your site
              through multiple tests, identifying shortcomings and outlining
              results along with recommendations.
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>3</span>Content Plan
            </h4>
            <p>
              Our team of content marketing experts suggest engaging,
              keyword-rich topics, keeping in mind your marketing objectives,
              brand voice and target market.{" "}
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>4</span>Content Creation
            </h4>
            <p>
              Once you approve these suggested topics, our writers create
              keyword-optimized content using credible links and resources after
              thorough product and industry research.{" "}
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>5</span>Promotional Content
            </h4>
            <p>
              Depending on the SEO package you signed up for, you receive
              articles, blogs, press releases, social media posts, infographics
              and videos!
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>6</span>Weekly Activity Sheets
            </h4>
            <p>
              This is a report that outlines all activities—postings,
              back-linking activities, competitor analysis, business profile
              listing submissions—performed, and strategies implemented on your
              website during the week.
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>7</span>Weekly Ranking Sheets
            </h4>
            <p>
              This detailed document reports all progress on your website—the
              performance and ranking of your targeted keywords, the organic
              traffic on your website, conversion rate, page speed insights,
              bounce rate, future recommendations, etc.
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>8</span>Completion Report
            </h4>
            <p>
              We then send in an in-depth, extensive completion report outlining
              the progress of your website along with recommendations for the
              next cycle.
            </p>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <h4>
              <span>9</span>It’s Time to Renew!
            </h4>
          </li>
        </>
      ),
    },
  ];

  const sliderRef = useRef(null);
  if(sliderRef){

  }
  useEffect(() => {
    console.log("This is slider ref", sliderRef.current);
  }, []);
  return (
    <div className="w-90">
      <div className="mx-auto w-11/12">
        <Slider ref={sliderRef} slidesToShow={3} slidesToScroll={3}>
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-center w-12"
            >
              <ul class="flex items-center justify-center">
                <h2 className="m-6">{item.name}</h2>
              </ul>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <div onClick={() => sliderRef.current.slickPrev()}>
          <button className="btn btn-primary">Prev</button>
        </div>
        <div onClick={() => sliderRef.current.slickNext()}>
          <button className="btn btn-accent">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ImgChanger;
