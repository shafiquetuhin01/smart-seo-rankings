import React from 'react';
import { Link } from 'react-router-dom';
import FbSingleFeatured from '../FaceBookAdvertising/FbSingleFeatured';

const InstagramFeatured = () => {
    const contents = [
        {
          _id: 1,
          img: "https://i.ibb.co/M6mNFwp/blog1.webp",
          title: "How to Get More Likes on Facebook in 2022",
          description:
            "Since its inception in 2004, Facebook has continued to grow exponentially and dominate the digital marketing landscape. With over 2.7 billion monthly...",
        },
        {
          _id: 2,
          img: "https://i.ibb.co/gdWHbX2/featured-image.webp",
          title: "Top 10 Ways to Grow a Small Business Through Facebook",
          description:
            "The ongoing COVID-19 pandemic has inevitably transformed how business is done across the globe. A recent Goldman Sachs report revealed that over.",
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
        <section className="w-11/12 mx-auto py-6">
          <div>
            <h3 className="text-3xl text-info font-bold text-center my-2">
            Our Featured Content on Instagram
            </h3>
            <h3 className="text-4xl text-secondary font-bold text-center my-2">
            Marketing and Social Media Management
            </h3>
            <p className="text-xl text-center my-4">
            To read more featured content on Instagram marketing and social media management, please visit our {" "}
              <Link className="underline" to="#">
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

export default InstagramFeatured;