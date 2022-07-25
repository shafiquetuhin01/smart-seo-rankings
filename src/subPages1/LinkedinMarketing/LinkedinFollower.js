import React from "react";

const LinkedinFollower = () => {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://i.ibb.co/3532K5x/fb-advertising-bg.webp")',
      }}
      className="py-6 bg-cover bg-no-repeat pb-8"
    >
      <div className="w-11/12 mx-auto">
        <h3 className="mx-8 text-4xl text-center text-info font-bold my-5">
          You Can Count{" "}
          <span className="text-secondary">
            on the World’s Largest Professional Network
          </span>{" "}
          to Get the Job Done!{" "}
        </h3>
        <div className="lg:flex justify-center items-center">
          <div className="w-[70%] lg:mr-16">
            <h3 className="text-2xl text-info font-bold mt-5">
              Struggling to weed out uninterested visitors and generate quality
              leads?
            </h3>
            <h3 className="text-2xl text-info font-bold mt-5">
              Interested in connecting with professionals who could propel your
              business toward success?
            </h3>
            <p className="text-black text-lg mt-5">
              Looking to increase organic reach and ensure long-term business
              growth?
            </p>
            <p className="text-black text-lg mt-5">
              If you answered these questions in the affirmative, LinkedIn
              marketing is for you.
            </p>
            <p className="text-black text-lg mt-3">
              If you’re tired of attracting unqualified leads, leveraging
              LinkedIn is a surefire way to maximize conversions.
            </p>
            <p className="text-black text-lg mt-3">
              At Search Berg, we help clients establish a winning LinkedIn
              presence and attract high-quality leads. From developing a
              long-term strategy to LinkedIn content creation, monitoring, and
              advertising campaign management, we’ll take over every aspect of
              your presence on the platform.
            </p>
            <p className="text-black text-lg mt-3">Get started today.</p>
          </div>
          <div className="w-[30%]">
            <img src="https://i.ibb.co/27F8QXf/linkedin-img1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedinFollower;
