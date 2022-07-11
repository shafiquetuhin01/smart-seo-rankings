import React from "react";
import { Link } from "react-router-dom";
const PaidHire = () => {
  return (
    <div className="py-6 w-11/12 mx-auto">
      <div className="lg:flex items-center justify-center gap-4">
        <div className="text-xl w-full lg:w-6/12">
          <h2 className="font-bold text-info text-4xl">
            Hire Search Berg for Cutting-Edge PPC Management Services Today!
          </h2>
          <p className="mt-3 text-2xl text-secondary font-bold">
            Optimize Every Step Of Your Customer’s PPC Sales Journey
          </p>
          <p className="mt-3 ">
            At Search Berg, we have a complete PPC package. From generating
            leads with compelling copy to optimizing Google Ads for targeted
            keywords, we leave no stone unturned when devising your PPC
            campaign.
          </p>
          <p className="mt-3 ">
            Add 24/7 monitoring, daily optimization, and state-of-the-art click
            fraud detection and prevention to the mix, and you have a guaranteed
            approach to generating more leads, profits, and sales for your
            business than ever before.
          </p>
          <p className="mt-3 ">
            Small businesses that are serious about long-term growth for their
            website need PPC. The good news is that our Pay Per Click
            Advertising services are affordable, requiring no contractual
            obligations. They’re also fully customizable for each website and
            industry to get more ad impressions, CTRs, and conversions.
          </p>
          <p className="mt-3 ">
            Utilize PPC to its full potential and generate more revenue from
            your website than ever!
          </p>
        </div>
        <div
          className="right w-full lg:w-6/12 relative"
          style={{
            backgroundImage: `url("https://i.ibb.co/vJKgSjM/banner-2.webp")`,

            height: "442px",
            maxWidth: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-right text-white p-4 absolute top-[10%] right-0">
            <h4 className="text-2xl">Give us a call to Transform</h4>
            <h4 className="text-2xl">an ordinary website into a</h4>
            <h4 className="text-4xl mt-2 font-bold">Revenue</h4>
            <h4 className="text-4xl font-bold">Generating</h4>
            <h4 className="text-6xl font-bold mt-1">
              Money <span className="text-2xl">site!</span>
            </h4>
            <h4 className="text-xl mt-1">Call SearchBerg at</h4>
            <Link to="#">
              <h4 className="text-4xl hover:underline text-accent font-bold my-2">
                834-444-5666
              </h4>
            </Link>
            <h4 className="text-xl">
              or Start a{" "}
              <Link className="text-white underline" to="#">
                Live Chat!
              </Link>
            </h4>
            <h4 className="text-xl mt-1">
              Click here for a free{" "}
              <Link className="text-white underline" to="#">
                audit report
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidHire;
