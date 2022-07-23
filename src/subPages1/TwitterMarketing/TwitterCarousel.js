import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const TwitterCarousel = () => {
  const sliderRef = useRef(null);
  const items = [
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/0cCGjWQ/tw-screenshot1.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/f4vHT6K/tw-screenshot2.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/yF78npS/tw-screenshot3.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/FK1cR7w/tw-screenshot4.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/WPmyCTP/tw-screenshot5.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/BPkh0Vd/tw-screenshot6.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/gFq76qk/tw-screenshot7.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="relative" style={{backgroundImage:'url("https://i.ibb.co/zHZBF9P/mockup.png")'}}>
            <img
              className=""
              src="https://i.ibb.co/zHZBF9P/mockup.png"
              alt=""
            />
            <img
              className="absolute top-[90px] left-[37px] bottom-0"
              src="https://i.ibb.co/2Pj13Lg/tw-screenshot8.png"
              alt=""
            />
          </li>
        </>
      ),
    },
    
   
  ];
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: false,
    cssEase: "linear",
  };
  return (
    <section
      className="bg-cover bg-no-repeat py-10"
      style={{
        backgroundImage: 'url("https://i.ibb.co/wBgDvQZ/carousel-bg.jpg")',
      }}
    >
      <div className="lg:flex justify-center items-center w-10/12 mx-auto">
        <div className="w-[55%] mx-auto">
          <h3 className="text-white text-left text-4xl font-bold">
            A Glimpse Into Our
          </h3>
          <h3 className="text-secondary text-left text-4xl font-bold">
            A Twitter Marketing <span className="text-white">Services</span>
          </h3>
          <p className="my-6 text-white text-xl">
            Twitter is more than a hashtag game.
          </p>
          <p className="my-6 text-white text-xl">
            It helps you drive awareness, promote your products and services,
            engage in trending topics and discussions, and connect with your
            target audience.
          </p>
          <p className="my-6 text-white text-xl">
            In addition, you can touch base with your followers with
            hyper-targeted paid Twitter advertisements that can directly
            increase sales!
          </p>
        </div>
        <div className="w-[45%] mx-auto">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <ul className="flex items-center justify-center">
                  {item.name}
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TwitterCarousel;
