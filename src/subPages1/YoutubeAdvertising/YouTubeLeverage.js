import React from 'react';
import { Link } from 'react-router-dom';

const YouTubeLeverage = () => {
    return (
        <section
      style={{
        backgroundImage: 'url("https://i.ibb.co/3532K5x/fb-advertising-bg.webp")',
      }}
      className="py-6 bg-cover bg-no-repeat pb-8 border-t border-black"
    >
      <div className="w-11/12 mx-auto">
        <h3 className="text-4xl text-center text-info font-bold my-5">
        Leverage {" "}
          <span className="text-secondary">
          YouTube Ads to Attract Leads  <br />
          </span>{" "}
          and Get More Traffic!
        </h3>
        <div className="lg:flex justify-center items-center">
          <div className="w-[75%] lg:mr-16">
            <h3 className="text-2xl text-info font-bold mt-5">
            Struggling to get seen by your target audience?
            </h3>
            <h3 className="text-2xl text-info font-bold mt-5">Stuck with dwindling sales?</h3>
            <h3 className="text-2xl text-info font-bold mt-5">Looking for an impressive return on investment?</h3>
            <p className="text-black text-lg mt-5">
            As the second-largest search engine, YouTube isn’t just a cool platform for creators; it’s a goldmine for businesses.
            </p>
            <p className="text-black text-lg mt-3">
            Whether you run a small business or recently launched a startup, investing in YouTube ads can help increase your brand’s visibility in major ways. It’s no surprise that a whopping <Link to="#">48% of marketers use YouTube</Link> to generate more leads and grow their business!
            </p>
            <p className="text-black text-lg mt-3">
            Kick-start your YouTube advertising campaign to watch your goals become a concrete reality. We’re ready when you are!
            </p>
          </div>
          <div className="w-[25%]">
            <img src="https://i.ibb.co/JBbfhjd/yt-banner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    );
};

export default YouTubeLeverage;