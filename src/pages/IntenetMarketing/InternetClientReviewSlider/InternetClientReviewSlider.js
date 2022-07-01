import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useEffect } from "react";
import { FaAngleUp, FaAngleDown, FaStar } from "react-icons/fa";
import "./InternetClientReviewSlider.css";
const InternetClientReviewSlider = () => {

  const firstItem = <>
      <div>
        <h3>Our Company is getting First-Rate SEO...</h3>
        <h3 className="text-secondary flex"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h3>
        <p>"Our company is getting first-rate SEO support from Search Berg through Jake Fernandez. He is one of the most energetic and responsive professionals we’ve worked with, and a genuine pleasure to interact with personally. Seeing to all the details of coordinating our SEO campaign for the past two years, and the writing of promotional blogs and articles for another organization is not easy, especially for a business with an unusual focus and purpose. Jake’s creativity and professionalism have truly helped the Search Berg team adapt to our unique and complex needs in an outstanding fashion, and we recommend Search Berg."</p>
      </div>
</>
  const secondItItem = <>
      <div>
        <h3>Our Company is getting First-Rate SEO...skjdfhweilho 98739467</h3>
        <h3 className="text-secondary flex"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h3>
        <p>"Our company is getting first-rate SEO support from Search Berg through Jake Fernandez. He is one of the most energetic and responsive professionals we’ve worked with, and a genuine pleasure to interact with personally. Seeing to all the details of coordinating our SEO campaign for the past two years, and the writing of promotional blogs and articles for another organization is not easy, especially for a business with an unusual focus and purpose. Jake’s creativity and professionalism have truly helped the Search Berg team adapt to our unique and complex needs in an outstanding fashion, and we recommend Search Berg."</p>
      </div>
</>


  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef.current);
  }, []);
  const [items, setItems] = useState("");
  
  const changeSlideItems = (items) => {
    setItems(items);
  };
  
  const changeItems = [
    {
      name: (
        <>
          <li onClick={()=>changeSlideItems(firstItem)} className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white hover:text-accent rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/72S6zgt/rs1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Karl Mollison</h6>
              <p>getwisdom.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li onClick={()=>changeSlideItems(secondItItem)} className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/m52dt5b/rs2.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Fabian Meneses</h6>
              <p>meneseslegal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className=" flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/BftmQmC/rs4.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Filippe Agusto</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[#968f8f] border-[1px]">
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/KFnJMzg/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
  ];

  return (
    <section className="w-11/12 mx-auto py-6 mb-10">
      <div className="flex justify-center gap-5">
        <div className="w-3/12 flex justify-center px-2 items-center mr-2">
          <div className="flex flex-col items-center gap-2 justify-center">
            <div onClick={() => sliderRef.current.slickPrev()}>
              <button className="p-1 rounded-full hover:bg-white hover:text-accent hover:border-accent hover:border btn-primary">
                <FaAngleUp className="text-3xl font-bold" />
              </button>
            </div>
            <div onClick={() => sliderRef.current.slickNext()}>
              <button className="p-1 rounded-full hover:bg-white hover:text-accent hover:border-accent hover:border btn-primary">
                <FaAngleDown className="text-3xl font-bold" />
              </button>
            </div>
          </div>
          <div className="w-full">
            <Slider
              className="mb-3"
              ref={sliderRef}
              slidesToShow={4}
              slidesToScroll={1}
              vertical={true}
              arrows={false}
            >
              {changeItems.map((item, index) => (
                <div key={index} className="">
                  <ul className="current-bg-change h6-color cursor-pointer">
                    <h3
                      onClick={() => sliderRef.current.slickGoTo(index)}
                      className=""
                    >
                      {item.name}
                    </h3>
                  </ul>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-9/12 border border-[#d6d2d2]">
          <div className="w-8/12 mx-8">
              {items}
          </div>
          <div className="w-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default InternetClientReviewSlider;
