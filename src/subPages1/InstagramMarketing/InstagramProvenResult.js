import React from "react";
import { Link } from "react-router-dom";

const InstagramProvenResult = () => {
  return (
    <section className="w-11/12 mx-auto py-6">
      <div>
        <h3 className="text-info text-4xl font-bold my-3 text-center">
                    <span className="text-secondary ">
          Instagram Marketing{" "}
          </span>{" "}
          With Proven Results—Build Followers, Attract Leads, And Get Seen On A Massive Platform!
        </h3>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="w-1/2 mx-auto">
          <h3 className="text-2xl font-bold text-secondary text-left">
          From hashtag-optimized posts and sponsored
content, we go the extra mile to electrify your
Instagram presence
          </h3>
          <p className="text-lg text-justify my-3">
          Instagram is the next big thing. If your business is stuck in a rut, building a winning Instagram presence can help you turn things around quickly.
          </p>
          <p className="text-lg text-justify my-3">
          But how should you get started?
          </p>
          <p className="text-lg text-justify my-3">
          Search Berg can help you out in all of these cases. We offer a complete suite of Instagram account management services, taking over and optimizing posting schedules, content creation, Instagram advertising, and even Insta story video content.
          </p>
          <p className="text-lg text-justify my-3">
          Once your business account is set-up, we leverage Instagram’s cross-platform analytics capability with Facebook to design strategies that
maximize your ROI for minimum spend.
          </p>
          <p className="text-lg text-justify my-3">
          Our content is always visually compelling, humanizing your brand and making it far more likely to net you some lucrative conversions.
          </p>
          <p className="text-lg text-justify my-3">
          <Link className="font-bold underline" to="#">Sign up</Link> for our Instagram marketing and advertising services today!
          </p>
        </div>
        <div className="w-1/2 mx-auto">
          <img src="https://i.ibb.co/St3b3Xs/ig-img2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default InstagramProvenResult;
