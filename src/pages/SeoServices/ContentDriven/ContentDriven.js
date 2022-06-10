import React from "react";
import { Link } from "react-router-dom";
import "./ContentDriven.css";
const ContentDriven = () => {
  return (
    <div className="bg-accent py-10 text-white">
      <div className="mx-16">
        <div>
          <h2 className="text-4xl text-center ">
            <span className="text-secondary">Content-Driven SEO </span>Services
            That Deliver
          </h2>
          <h2 className="text-4xl text-center ">Results Every Time!</h2>
          <h2 className=" mt-4 italic text-center text-2xl">
            Salient Features Of Our{" "}
            <span className="text-secondary">Content Marketing Mix:</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-8">
          <div className="justify-center items-center">
            <div className="flex items-center">
              <p className="w-10 content-border mr-3"></p>
              <img src="https://i.ibb.co/JzHpsBP/blog-icon.webp" alt="" />
              <h2 className="text-2xl ml-2">
                <Link to="/blog-writing">Blog Posts</Link>
              </h2>
            </div>
            <div className="ml-2">
              <p className="blog-p-text">
                Well-written, Quality Blog Posts That Bring Traffic and Improve
                Domain Authority
              </p>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="flex items-center">
              <p className="w-10 content-border mr-3"></p>
              <img src="https://i.ibb.co/JtGHhpQ/gp.webp" alt="" />
              <h2 className="text-2xl ml-2">
                <Link to="/blog-writing">Guests Posts</Link>
              </h2>
            </div>
            <div className="ml-2">
              <p className="blog-p-text">
              Detailed, High Quality Guest Posts That Bring Google Rankings and Strengthen Branding
              </p>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="flex items-center">
              <p className="w-10 content-border mr-3"></p>
              <img src="https://i.ibb.co/fdBGz9N/pr.webp" alt="" />
              <h2 className="text-2xl ml-2">
                <Link to="/blog-writing-services">Press Releases</Link>
              </h2>
            </div>
            <div className="ml-2">
              <p className="blog-p-text">
              Industry Specific Press Releases That Promote Products/Services and Company Brand
              </p>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="flex items-center">
              <p className="w-10 content-border mr-3"></p>
              <img src="https://i.ibb.co/K7sxjcG/infographics.webp" alt="" />
              <h2 className="text-2xl ml-2">
                <Link to="/blog-writing-services">Infographics</Link>
              </h2>
            </div>
            <div className="ml-2">
              <p className="blog-p-text">
              Visually Stunning Infographics That Showcase Your Company Products and Services
              </p>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="flex items-center">
              <p className="w-10 content-border mr-3"></p>
              <img src="https://i.ibb.co/j5yxv7D/video.webp" alt="" />
              <h2 className="text-2xl ml-2">
                <Link to="/blog-writing-services">Videos</Link>
              </h2>
            </div>
            <div className="ml-2">
              <p className="blog-p-text">
              Professionally Designed Videos That Go Viral, Create Interest and Generate Buzz
              </p>
            </div>
          </div>
          <div className="justify-center items-center">
            <div className="flex items-center">
              <p className="w-10 content-border mr-3"></p>
              <img src="https://i.ibb.co/fkBcST7/smp.webp" alt="" />
              <h2 className="text-2xl ml-2">
                <Link to="/blog-writing-services">Social Media Posts</Link>
              </h2>
            </div>
            <div className="ml-2">
              <p className="blog-p-text">
              Engaging Content that lets you Connect with your Target Audience…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDriven;
