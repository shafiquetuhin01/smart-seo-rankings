import React from "react";
import DesktopFeature from "./DesktopFeature";

const CheckOut = () => {
  return (
    <div className="bg-accent py-10">
      <div>
        <h3 className="text-white text-4xl font-bold text-center">
          Check Out Our <span className="text-secondary"> Work Samples!</span>
        </h3>
      </div>
      <div className="lg:grid grid-cols-2 w-11/12 mx-auto mt-6">
        <div className="lg:grid grid-cols-2">
          <div
            className="first-left border-4 border-accent flex-col "
            style={{
              minHeight: 370,
              backgroundImage: 'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
            }}
          >
            <div className="mt-5">
              <img
                className="mx-auto"
                src="https://i.ibb.co/vkBvGcL/web-dd.webp"
                alt=""
              />
            </div>
            <div
              className="text-white font-bold mt-8 px-1 pb-4 items-center text-center"
              style={{ fontSize: "18px" }}
            >
              Website Design & Development
            </div>
            <div className="text-center mt-24">
              <button className="btn btn-sm btn-secondary text-white">view samples</button>
            </div>
          </div>
          <div className="first-right">
            <div
              className="first-right-top border-4 border-accent"
              style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}
            >
              <div className="">
                <img
                  className="mx-auto py-3"
                  src="https://i.ibb.co/QbPvTHt/infographic-samples.png"
                  alt=""
                />
              </div>
              <div
                className="pb-2 text-white font-bold px-1 items-center text-center"
                style={{ fontSize: "18px" }}
              >
                Infographics Design
              </div>
              <div className="text-center">
                <button className="btn btn-secondary text-white btn-sm">
                  view samples
                </button>
              </div>
            </div>
            <div
              className="first-right-bottom border-4 border-accent"
              style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}
            >
              <div className="">
                <img
                  className="mx-auto py-3"
                  src="https://i.ibb.co/tH9JsLb/social-media.webp"
                  alt=""
                />
              </div>
              <div
                className="text-white pb-2 font-bold px-1 items-center text-center"
                style={{ fontSize: "18px" }}
              >
                Social Media
              </div>
              <div className="text-center">
                <button className="btn btn-secondary text-white btn-sm">
                  view samples
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div
            className="second-top border-4 border-accent"
            style={{
              minHeight: 185,
              backgroundImage: 'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
            }}
          >
            <div className="">
              <img
                className="mx-auto py-3"
                src="https://i.ibb.co/2h05Yns/ar-s.webp"
                alt=""
              />
            </div>
            <div
              className="text-white pb-2 font-bold px-1 items-center text-center"
              style={{ fontSize: "18px" }}
            >
              Article Writing
            </div>
            <div className="text-center">
              <button className="btn btn-secondary text-white btn-sm">view samples</button>
            </div>
          </div>
          <div className="second-bottom lg:grid grid-cols-2">
            <div
              className="second-left-top border-4 border-accent"
              style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}
            >
              <div className="">
              <img
                className="mx-auto py-3"
                src="https://i.ibb.co/mcfgzQ4/bw-s.webp"
                alt=""
              />
            </div>
            <div
              className="text-white pb-3 font-bold px-1 items-center text-center"
              style={{ fontSize: "18px" }}
            >
              Blog Writing
            </div>
            <div className="text-center">
              <button className="btn btn-secondary text-white btn-sm">view samples</button>
            </div>
            </div>
            <div
              className="second-right-bottom border-4 border-accent"
              style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}
            >
              <div className="">
              <img
                className="mx-auto py-2"
                src="https://i.ibb.co/HBSPxYy/pr-s.webp"
                alt=""
              />
            </div>
            <div
              className="text-white py-3 font-bold px-1 items-center text-center"
              style={{ fontSize: "18px" }}
            >
              Press Release
            </div>
            <div className="text-center">
              <button className="btn btn-secondary text-white btn-sm">view samples</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <DesktopFeature />
    </div>
  );
};

export default CheckOut;
