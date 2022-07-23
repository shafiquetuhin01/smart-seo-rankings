import React from "react";
import FbSingleFeatured from "../FaceBookAdvertising/FbSingleFeatured";
import { Link } from "react-router-dom";

const YouTubeFeaturedContent = () => {
  const contents = [
    {
      _id: 1,
      img: "https://i.ibb.co/M6mNFwp/blog1.webp",
      title: "Digital Marketing for Small Businesses | Small Businesses SEO Services – Video",
      description:
        "Search Berg have worked with many small businesses to strengthen their online presence in today’s fierce.",
    },
    {
      _id: 2,
      img: "https://i.ibb.co/gdWHbX2/featured-image.webp",
      title: "Why You Need Video Content for Your Website If You Want to Gain New Customers",
      description:
        "Content marketing is ever evolving in the sense that new and better forms of content have emerged and in some cases.",
    },
    {
      _id: 3,
      img: "https://i.ibb.co/xYh14g8/Effective-Social-Media-Management-1.webp",
      title: "What Social Media Strategies Can Boost my SEO?",
      description:
        "For businesses to succeed in the digital world, they need a foolproof social media strategy, backed with a sure-fire SEO plan! The world we live in is not.",
    },
    {
      _id: 4,
      img: "https://i.ibb.co/MnZpyvv/Social-Media-Here-is-why-your-business-need-it-1.webp",
      title: "Social Media, Here is Why your Business Needs It!",
      description:
        "In 2017, the total number of global social media users reached 2.8 billion. This means that social media platforms are used by a quarter of the earth's population.",
    },
  ];
  return (
    <section className="bg-info py-6">
      <div className="w-11/12 mx-auto ">
        <h3 className="text-4xl text-white font-bold text-center my-2">
        Our Featured Content on
        </h3>
        <h3 className="text-4xl text-secondary font-bold text-center my-2">
        Video Advertising and Marketing
        </h3>
        <p className="text-white text-xl text-center my-4">
        To read more featured content on video advertising and marketing, please visit our{" "}
          <Link className="underline text-secondary" to="#">
            blog
          </Link>
          .
        </p>
        <div className="lg:grid grid lg:grid-cols-4 grid-cols-1 gap-5">
          {contents.map((content) => (
            <FbSingleFeatured
              key={content._id}
              content={content}
            ></FbSingleFeatured>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeFeaturedContent;
