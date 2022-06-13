import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  return (
    <>
      <div className="test-carousel py-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="test-carousel-img">
                <img src="https://i.ibb.co/7pVLf9n/crane-warning-atlanata.webp" alt="" />
              </div>
              <div className="mx-5 text-left">
                <p className="">
                  "They are great at keeping me updated and they produce new
                  content fast. Their work has generated improvements in several
                  keyword rankings on search results with a corresponding boost
                  in organic site traffic. Search Berg is a communicative and
                  reliable team."
                </p>
                <h3 className="text-2xl font-bold mt-2 text-primary">
                  Jeff Beardsley
                </h3>
                <h4>Sales Manager, Crane Warning System, Atlanta</h4>
                <a
                  href="https://www.cranewarningsystemsatlanta.com/"
                  className="text-primary underline"
                >
                  cranewarningsystematlanta.com
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
            <div className="test-carousel-img">
                <img src="https://i.ibb.co/RbFjFJv/loishollis.webp" alt="" />
              </div>
              <div className="mx-5 text-left">
                <p className="">
                  "They are great at keeping me updated and they produce new
                  content fast. Their work has generated improvements in several
                  keyword rankings on search results with a corresponding boost
                  in organic site traffic. Search Berg is a communicative and
                  reliable team."
                </p>
                <h3 className="text-2xl font-bold mt-2 text-primary">
                  Jeff Beardsley
                </h3>
                <h4>Sales Manager, Crane Warning System, Atlanta</h4>
                <a
                  href="https://www.cranewarningsystemsatlanta.com/"
                  className="text-primary underline"
                >
                  cranewarningsystematlanta.com
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
            <div className="test-carousel-img">
                <img src="https://i.ibb.co/LCh6Pgq/afluencer.webp" alt="" />
              </div>
              <div className="mx-5 text-left">
                <p className="">
                  "They are great at keeping me updated and they produce new
                  content fast. Their work has generated improvements in several
                  keyword rankings on search results with a corresponding boost
                  in organic site traffic. Search Berg is a communicative and
                  reliable team."
                </p>
                <h3 className="text-2xl font-bold mt-2 text-primary">
                  Jeff Beardsley
                </h3>
                <h4>Sales Manager, Crane Warning System, Atlanta</h4>
                <a
                  href="https://www.cranewarningsystemsatlanta.com/"
                  className="text-primary underline"
                >
                  cranewarningsystematlanta.com
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
            <div className="test-carousel-img">
                <img src="https://i.ibb.co/7Ky14qx/maria-silver-butterfly.webp" alt="" />
              </div>
              <div className="mx-5 text-left">
                <p className="">
                  "They are great at keeping me updated and they produce new
                  content fast. Their work has generated improvements in several
                  keyword rankings on search results with a corresponding boost
                  in organic site traffic. Search Berg is a communicative and
                  reliable team."
                </p>
                <h3 className="text-2xl font-bold mt-2 text-primary">
                  Jeff Beardsley
                </h3>
                <h4>Sales Manager, Crane Warning System, Atlanta</h4>
                <a
                  href="https://www.cranewarningsystemsatlanta.com/"
                  className="text-primary underline"
                >
                  cranewarningsystematlanta.com
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
            <div className="test-carousel-img">
                <img src="https://i.ibb.co/vH4XT3L/automotive.webp" alt="" />
              </div>
              <div className="mx-5 text-left">
                <p className="">
                  "They are great at keeping me updated and they produce new
                  content fast. Their work has generated improvements in several
                  keyword rankings on search results with a corresponding boost
                  in organic site traffic. Search Berg is a communicative and
                  reliable team."
                </p>
                <h3 className="text-2xl font-bold mt-2 text-primary">
                  Jeff Beardsley
                </h3>
                <h4>Sales Manager, Crane Warning System, Atlanta</h4>
                <a
                  href="https://www.cranewarningsystemsatlanta.com/"
                  className="text-primary underline"
                >
                  cranewarningsystematlanta.com
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialCarousel;
