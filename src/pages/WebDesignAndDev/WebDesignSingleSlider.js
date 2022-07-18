import React from "react";
import Slider from "react-slick";

const WebDesignSingleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <section
      style={{
        backgroundImage: 'url("https://i.ibb.co/m5xRrs8/portfolio-back.jpg")',
      }}
      className="py-10"
    >
      <div>
        <h3 className="text-white text-5xl font-bold text-center">
          Some Of Our <span className="text-secondary">Work</span>
        </h3>
      </div>
      <p className="text-center text-lg text-white my-5">
        We pride ourselves on creating visually attractive websites that
        represent your brand. <br />
        Take a look at our Website Development portfolio
      </p>
      <div>
        <Slider {...settings}>
          <div className="">
            <img className="w-9/12 mx-auto" src="https://i.ibb.co/gD3n1pL/01.webp" alt="" />
          </div>
          <div className="">
            <img className="w-9/12 mx-auto" src="https://i.ibb.co/6mVKnNN/02.webp" alt="" />
          </div>
          <div className="">
            <img className="w-9/12 mx-auto" src="https://i.ibb.co/Gn07XRB/03.webp" alt="" />
          </div>
          <div className="">
            <img className="w-9/12 mx-auto" src="https://i.ibb.co/1mHbGc7/04.webp" alt="" />
          </div>
          <div className="">
            <img className="w-9/12 mx-auto" src="https://i.ibb.co/M6q6xWf/05.webp" alt="" />
          </div>
          <div className="">
            <img className="w-9/12 mx-auto" src="https://i.ibb.co/vDW7z2J/06.webp" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default WebDesignSingleSlider;
