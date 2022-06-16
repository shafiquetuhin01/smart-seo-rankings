import React from "react";
import "./ImgChanger.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useEffect } from "react";
const ImgChanger = () => {
    
    const sliderRef = useRef(null);
    useEffect(()=>{
        console.log('This is slider ref',sliderRef.current);
    },[]);
  return (
    <div className="w-90">
        <div className="mx-auto w-11/12">
            <Slider
            ref={sliderRef}
            slidesToShow={5}
            slidesToScroll={5}
            >
                {
                    Array(18)
                    .fill("")
                    .map(()=>(
                    <div className="flex items-center justify-center mx-auto w-12">
                        <h3 className="text-3xl text-center">I am Shafique</h3>
                    </div>))
                }
            </Slider>
        </div>
      <div className="flex items-center gap-5 justify-center">
        <div onClick={()=>sliderRef.current.slickPrev()}>
            <button className="btn btn-primary">Prev</button></div>
        <div onClick={()=>sliderRef.current.slickNext()}>
            <button className="btn btn-accent">Next</button></div>
      </div>
    </div>
  );
};

export default ImgChanger;
