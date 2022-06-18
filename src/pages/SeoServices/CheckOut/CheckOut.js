import React from "react";

const CheckOut = () => {
  return (
    <div className="bg-accent py-10">
      <div className="w-9/12 mx-auto">
        <h3 className="text-white text-4xl font-bold text-center">
          Check Out Our <span className="text-secondary"> Work Samples!</span>
        </h3>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="6/12">
          <div
            style={{
              width: "319px",
              height: "377px",
              backgroundImage: 'url("https://i.ibb.co/dfnHYqY/bg-sample.png")',
            }} className="w-6/12"
          >
            <h3>
              <img
                className="mx-auto mt-5 pt-5"
                src="https://i.ibb.co/vkBvGcL/web-dd.webp"
                alt=""
              />
            </h3>
            <h3 className="text-white text-lg font-bold mt-12 text-center">
              Website Design & Development
            </h3>
            <h3 className="text-center">
              <button className="btn btn-warning mt-24">view samples</button>
            </h3>
          </div>
          <div className="w-6/12">
            
          </div>
        </div>

        <div className="w-6/12"></div>
      </div>
    </div>
  );
};

export default CheckOut;
