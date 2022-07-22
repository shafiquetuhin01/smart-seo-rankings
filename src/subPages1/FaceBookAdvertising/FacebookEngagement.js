import React from "react";

const FacebookEngagement = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://i.ibb.co/3532K5x/fb-advertising-bg.webp")',
      }}
      className="py-6 bg-cover bg-no-repeat pb-8"
    >
      <div className="w-11/12 mx-auto">
        <h3 className="text-4xl text-center text-info font-bold my-5">
          Increase{" "}
          <span className="text-secondary">
            Engagement And Conversions <br />
          </span>{" "}
          for a Winning Online Presence
        </h3>
        <div className="lg:flex justify-center items-center">
          <div className="w-[75%] lg:mr-16">
            <h3 className="text-2xl text-info font-bold mt-5">
              Need help building digital word-of-mouth for your small business?
            </h3>
            <h3 className="text-2xl text-info font-bold mt-5">Is Google Ads not yielding the results you expected?</h3>
            <p className="text-black text-lg mt-5">Turn to the Facebook advertising experts!</p>
            <p className="text-black text-lg mt-5">
              At Search Berg, we craft an engaging Facebook marketing campaign
              and develop winning Facebook ads; from dynamic ads to carousel
              ads, we make sure that both the format and content of your ad
              strategy is engineered for results!
            </p>
            <p className="text-black text-lg mt-3">
              Powered by superior tracking using Facebook Pixel, expect
              conversions to come flooding in!
            </p>
          </div>
          <div className="w-[25%]">
            <img src="https://i.ibb.co/jbTn0PD/fb-mobile.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookEngagement;
