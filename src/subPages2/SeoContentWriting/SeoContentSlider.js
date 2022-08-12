import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SeoContentSlider = () => {
  const items = [
    {
      name: (
        <>
          <li className="bg-none">
            <div
              style={{ minWidth: "280px" }}
              className="flex  p-5 justify-center"
            >
              <img
                className=""
                src="https://i.ibb.co/L8G8Qnp/ppc-google.webp"
                alt=""
              />
              <h3 className="text-info text-xl">Blog Posts</h3>
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
              <img
                className=""
                src="https://i.ibb.co/tJhmcx5/ppc-facebook.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/7GLvSqR/ppc-bing.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/tKtG2jQ/ppc-amazon.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/wNPSCzg/ppc-linkedin.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/k9JrQKK/ppc-twitter.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/C9hBY4t/ppc-youtube.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/tKtG2jQ/ppc-amazon.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/r5xP6QF/ppc-quora.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/F8D2dXX/ppc-pinterest.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/n1ZwMvc/ppc-yelp.webp"
                alt=""
              />
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
              <img
                className=""
                src="https://i.ibb.co/w79dxF1/ppc-ebay.webp"
                alt=""
              />
            </div>
          </li>
        </>
      ),
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: true,
    cssEase: "linear",
  };
  return (
    <section className="w-10/12 mx-auto">
      <div className="my-5">
        <h3 className="text-info text-center font-bold text-3xl w-6/12 mx-auto">
          We Offer Top Rated{" "}
          <span className="text-secondary">SEO Content Writing</span> Services
        </h3>
      </div>
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
    </section>
  );
};

export default SeoContentSlider;
