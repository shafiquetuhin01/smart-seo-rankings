import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
const PaidCarousel = () => {
  const sliderRef = useRef(null);
  const items = [
    {
      name: (
        <>
          <li className="bg-none">
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/L8G8Qnp/ppc-google.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/tJhmcx5/ppc-facebook.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/7GLvSqR/ppc-bing.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/tKtG2jQ/ppc-amazon.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/wNPSCzg/ppc-linkedin.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/k9JrQKK/ppc-twitter.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/C9hBY4t/ppc-youtube.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/tKtG2jQ/ppc-amazon.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },

    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/r5xP6QF/ppc-quora.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/F8D2dXX/ppc-pinterest.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/n1ZwMvc/ppc-yelp.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li>
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img className="" src="https://i.ibb.co/w79dxF1/ppc-ebay.webp" alt="" />
            </div>
          </li>
        </>
      ),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="py-3">
      <h3 className="text-accent text-4xl py-8 font-bold text-center">
        Platforms <span className="text-secondary">We Advertise On</span>
      </h3>
      <div className="mx-auto w-11/12">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center w-12">
              <ul className="flex items-center justify-center">
                <h2 className="mx-3">{item.name}</h2>
              </ul>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="flex items-center gap-5 justify-center">
        <div onClick={() => sliderRef.current.slickPrev()}>
          <button className="btn btn-primary">Prev</button>
        </div>
        <div onClick={() => sliderRef.current.slickNext()}>
          <button className="btn btn-accent">Next</button>
        </div>
      </div> */}
    </div>
  );
};

export default PaidCarousel;
