import React from "react";
import './DesktopFeature.css';
const DesktopFeature = () => {
   
  return (
    <div className="min-h-screen lg:flex w-11/12 mx-auto py-20">
      <div className="left w-full">
        <div className="flex items-center justify-center">
          <img src="https://i.ibb.co/y6B7Pqt/badge.webp" alt="badge" />
          <h3 className="text-white text-4xl font-bold">
            Here is How We’re Ranking{" "}
            <span className="text-secondary">On Google</span>
          </h3>
        </div>
        <div
          className="float-right"
          style={{ marginTop: -60, marginRight: 60 }}
        >
          <img src="https://i.ibb.co/khB0Yk9/badge-arrow.webp" alt="arrow" />
        </div>
        <div>
          <p className="text-white font-bold text-lg mx-10 mt-3">The keyword rankings highlighted here are a testament to Search Berg’s expertise in Organic SEO. These rankings speak volumes about our expert SEO services and the vast body of expertise we bring to the table.</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/gZwzWQH/tv.webp")`,

          height: "484px",
          maxWidth: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="right w-full p-2 "
      >
        <div className="text-xl font-bold mt-7 w-8/12 float-right">
          <h3 className=" inline">Keywords</h3>
          <h3 className="float-right mr-12">Rankings</h3>
        </div>
        <div className="relative overflow-y-scroll overflow-item h-64 mr-6 overflow-auto" style={{width:'97%'}} >
          <img className=" mx-auto" style={{width:540,height:560,maxWidth:"100%"}} src="https://i.ibb.co/kSrt5s1/home-keywords.webp" alt="" />
        </div>
       
        
      </div>
    </div>
  );
};

export default DesktopFeature;
