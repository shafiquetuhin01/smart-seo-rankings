import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./WebDesignProcess.css";

const WebDesignProcess = () => {
  const myContent = [
    {
      name: (
        <>
          <div className="lg:flex justify-center items-center w-11/12 mx-auto">
            <div className="w-1/2 mx-auto">
              <h3 className="process-h3 uppercase italic text-white text-6xl font-bold">
                your goals
              </h3>
              <p className="text-white text-justify mt-12 leading-8">
                Because your website is unique, we take the time to learn about
                the objectives you want to achieve. We research your needs,
                brand, and corporate identity before deciding on the best
                strategy for online success.
              </p>
            </div>
            <div className="w-1/2 mx-auto">
              <img
                className="mx-auto"
                src="https://i.ibb.co/gV9p5pS/goal.webp"
                alt=""
              />
            </div>
          </div>
        </>
      )},
      {name: (
        <>
          <div className="lg:flex justify-center items-center w-11/12 mx-auto">
            <div className="w-1/2 mx-auto">
              <h3 className="process-h3 uppercase italic text-white text-6xl font-bold">
              IDEATION
              </h3>
              <p className="text-white text-justify mt-12 leading-8">
              After we've done our research, our professional website designers will sketch up the fundamental design concepts. These designs are just blueprints or mockups that serve as a starting point for building great online experiences that will convey and connect your business with your customers.
              </p>
            </div>
            <div className="w-1/2 mx-auto">
              <img
                className="mx-auto"
                src="https://i.ibb.co/x6mDS9T/ideation.webp"
                alt=""
              />
            </div>
          </div>
        </>
      )}];

  const [content, setContent] = useState([]);
  const handleClick = () => {
    setContent(content);
  };
  return (
    <section className="bg-info py-10">
      <div>
        <h3 className="text-white text-5xl font-bold text-center">
          Our{" "}
          <span className="text-secondary my-10">
            Website Design & Development
          </span>{" "}
          Process
        </h3>

        <p className="text-white text-center my-3">
          Our expert designers focus on modern web design practices that
          facilitate the growth of your business. <br />
          Take a look at what goes behind in creating award winning websites
          that take <br />
          your business to the next level.
        </p>
      </div>
      <div className="w-11/12 mx-auto py-3 mt-5">
        <div className="lg:flex justify-center items-start">
          <div className="w-2/12 mx-auto border-r border-[#5c5757] pr-5">
            <NavLink to="#">
              <div
                className={`hover:cursor-pointer flex justify-start py-5 items-center hover:opacity-[100%] opacity-[40%] `}
                onClick={handleClick}
              >
                <p className="mr-2 p-2 w-[40px] h-[40px] text-center rounded-[100%] border border-secondary text-secondary">
                  01
                </p>
                <p className="text-white uppercase text-xl font-bold">
                  your goals
                </p>
              </div>
            </NavLink>
            <NavLink to="#">
              <div
                className="hover:cursor-pointer flex justify-start py-5 items-center hover:opacity-[100%] opacity-[40%]"
                onClick={handleClick}
              >
                <p className="mr-2 p-2 w-[40px] h-[40px] text-center rounded-[100%] border border-secondary text-secondary">
                  02
                </p>
                <p className="text-white uppercase text-xl font-bold">
                  ideation
                </p>
              </div>
            </NavLink>
            <NavLink to="#">
              <div
                className="hover:cursor-pointer flex justify-start py-5 items-center hover:opacity-[100%] opacity-[40%]"
                onClick={handleClick}
              >
                <p className="mr-2 p-2 w-[40px] h-[40px] text-center rounded-[100%] border border-secondary text-secondary">
                  03
                </p>
                <p className="text-white uppercase text-xl font-bold">design</p>
              </div>
            </NavLink>
            <NavLink to="#">
              <div
                className="hover:cursor-pointer flex justify-start py-5 items-center hover:opacity-[100%] opacity-[40%]"
                onClick={handleClick}
              >
                <p className="mr-2 p-2 w-[40px] h-[40px] text-center rounded-[100%] border border-secondary text-secondary">
                  04
                </p>
                <p className="text-white uppercase text-xl font-bold">
                  development
                </p>
              </div>
            </NavLink>
            <NavLink to="#">
              <div
                className="hover:cursor-pointer flex justify-start py-5 items-center hover:opacity-[100%] opacity-[40%]"
                onClick={handleClick}
              >
                <p className="mr-2 p-2 w-[40px] h-[40px] text-center rounded-[100%] border border-secondary text-secondary">
                  05
                </p>
                <p className="text-white uppercase text-xl font-bold">launch</p>
              </div>
            </NavLink>
          </div>
          <div className="w-10/12 mx-auto">
            {
              myContent.map((cont, index)=><div key={index}>
                <h3>{cont.name}</h3>
              </div>)
            }  
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignProcess;
