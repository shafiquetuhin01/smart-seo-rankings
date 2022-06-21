import React from "react";

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
            <div className="text-white font-bold mt-8 px-1 items-center text-center" style={{fontSize:'18px'}}>
              Website Design & Development
            </div>
            <div className="text-center mt-24">
              <button className="btn btn-warning">view samples</button>
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
            ></div>
            <div className="first-right-bottom border-4 border-accent" style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}>

            </div>
          </div>
        </div>
        <div className="second">
          <div className="second-top border-4 border-accent" style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}>

          </div>
          <div className="second-bottom lg:grid grid-cols-2">
            <div className="second-left-top border-4 border-accent" style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}>

            </div>
            <div className="second-right-bottom border-4 border-accent" style={{
                minHeight: 185,
                backgroundImage:
                  'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
              }}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
