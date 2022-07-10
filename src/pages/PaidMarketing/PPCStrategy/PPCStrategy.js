import React from "react";
import { Link } from "react-router-dom";

const PPCStrategy = () => {
  return (
    <div className="bg-accent">
      <div className="w-11/12 mx-auto py-8">
        <h3 className="py-4 text-2xl lg:text-4xl font-bold text-center text-secondary lg:w-8/12 mx-auto">
          Tailor Your PPC{" "}
          <span className="text-white">
            Strategy According To Your Business’s Goals
          </span>
        </h3>
        <p className="text-sm text-white lg:text-2xl font-bold italic text-center lg:w-8/12 mx-auto">
          89% of marketers say brand awareness is the most important goal,
          followed by sales and lead generation.
        </p>
        <p className="text-sm text-secondary lg:text-2xl font-bold italic text-center lg:w-8/12 mx-auto">
          elect A Paid Marketing Goal And We’ll Tell You What’s Going To Work
          For You:
        </p>
        <div className="lg:grid grid-cols-1 lg:grid-cols-3 mt-3 justify-items-center items-center w-full text-center">
          <div className="flex flex-col justify-center items-center mx-auto">
            <div>
              <img
                className="bg-secondary rounded-full"
                src="https://i.ibb.co/L94pcRY/ppc-img1.webp"
                alt=""
              />
            </div>
            <div className="mt-2 mx-auto">
              <h3 className="text-2xl text-white">Increase</h3>
              <h3 className="text-2xl font-bold text-white">Brand Awareness</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto">
            <div>
              <img src="https://i.ibb.co/TRMDLzj/ppc-img2.webp" alt="" />
            </div>
            <div className="mt-2 mx-auto">
              <h3 className="text-2xl text-white">Drive</h3>
              <h3 className="text-2xl font-bold text-white">Sales</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto">
            <div>
              <img src="https://i.ibb.co/LCYSMst/ppc-img3.webp" alt="" />
            </div>
            <div className="mt-2 mx-auto">
              <h3 className="text-2xl text-white">Generate</h3>
              <h3 className="text-2xl font-bold text-white">Leads</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="stretagy-pstretagy-p lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-10 py-5 w-11/12 mx-auto">
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/N9fpMQz/ppc-icon1.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">
                  Search Ads
                </h3>
              </div>
              <p className="mt-2 text-white">
                Create brand awareness and drive more sales and leads to your
                website with text or call ads that show on search results of
                Google, Bing, and more.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/Z6M4cW9/ppc-icon2.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">
                  Display Ads
                </h3>
              </div>
              <p className="mt-2 text-white">
                Build brand awareness and get more sales with visually appealing
                text, image or video ads across the web, on websites, mobile
                sites and apps.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/g3bVJzS/ppc-icon3.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">
                  Facebook Ads
                </h3>
              </div>
              <p className="mt-2 text-white">
                Create Facebook ads for brand awareness and leads by diverting
                potential Facebook users to your website. Target relevant
                audience based on their location, demographic, and profile
                information.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/jDKvbDB/ppc-icon4.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">
                  Re-marketing
                </h3>
              </div>
              <p className="mt-2 text-white">
                Don’t lose your website’s past visitors. Remind them about your
                products/services by remarketing banner ads that will appear to
                them while browsing the web.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/vXV6X38/ppc-icon5.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">Gmail Ads</h3>
              </div>
              <p className="mt-2 text-white">
                Spread your brand awareness and increase sales and leads by
                advertising on Gmail. These ads show up in Gmail users' inbox
                with text, images, videos or forms.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/dQdwdNy/ppc-icon6.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">Video Ads</h3>
              </div>
              <p className="mt-2 text-white">
                Raise awareness of your brand and get sales with video ad
                formats by showing ads in the YouTube search results or before,
                during, and after videos on YouTube and other display networks.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/vXV6X38/ppc-icon5.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">
                  App promotion
                </h3>
              </div>
              <p className="mt-2 text-white">
                Get more installs and interactions for your app. App promotion
                makes it easy to promote your iOS or Android app.
              </p>
            </div>
            <div className="">
              <div className="flex justify-start items-center ">
                <img src="https://i.ibb.co/vXV6X38/ppc-icon5.webp" alt="" />
                <h3 className="text-white text-xl font-bold ml-2">
                  App promotion
                </h3>
              </div>
              <p className="mt-2 text-white">
                Get more installs and interactions for your app. App promotion
                makes it easy to promote your iOS or Android app.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-2 lg:mx-20 mt-5 pb-10">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl text-center text-white font-bold italic">
              Ready To Get Started? Call 
            </h2>
            <p className="text-3xl mt-2 lg:mb-8 mb-3 text-accent text-center italic font-bold">
              <Link to="/phone" className="ml-2 inline text-white lg:text-6xl text-3xl">
                855-444-4777
              </Link>
            </p>
          </div>
          <div className="mx-auto lg:flex justify-center">
            <button className="btn btn-primary text-white mr-4">
              start a live chat
            </button>
            <button className="btn btn-secondary text-white">
              contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCStrategy;
