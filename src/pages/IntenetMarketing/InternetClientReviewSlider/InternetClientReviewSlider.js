import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { FaAngleUp, FaAngleDown, FaStar } from "react-icons/fa";
import "./InternetClientReviewSlider.css";
const InternetClientReviewSlider = () => {
  const firstItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            Our Company is getting First-Rate SEO...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "Our company is getting first-rate SEO support from Search Berg
            through Jake Fernandez. He is one of the most energetic and
            responsive professionals we’ve worked with, and a genuine pleasure
            to interact with personally. Seeing to all the details of
            coordinating our SEO campaign for the past two years, and the
            writing of promotional blogs and articles for another organization
            is not easy, especially for a business with an unusual focus and
            purpose. Jake’s creativity and professionalism have truly helped the
            Search Berg team adapt to our unique and complex needs in an
            outstanding fashion, and we recommend Search Berg."
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img
              src="https://i.ibb.co/FmjxSfH/bs1-compressed.webp"
              alt="thumnail-img"
            />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const secondItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            I needed to add content to my website...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "I needed to add content to my website. This company did an awesome
            job with that.It also helped my website come up more when clients
            are looking for specific services that we offer. I tried the Premium
            package and it was totally worth it. Yes, there was some reasonable
            delays and we had to go back and forth to make adjustments to the
            content, etc. It’s very important to be involved with the project.
            These guys can’t read your mind, so please be as communicative as
            possible and you will eventually get what you want and need. Omar
            Gonzalez was awesome! Thank you."
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/2nkqWR0/bs2.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const thirdItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            Adam Brooks has helped take my business...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "Adam Brooks has helped take my business to the next level with SEO
            on my business website. Thanks to them my google rating has gone up
            significantly, I have received more clients and my website has been
            completely upgraded. Definitely recommend!"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/DDSB6Vr/bs3.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const fourthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            I was looking for some SEO agency...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "I was looking for some SEO agency for a long time, hired many
            companies in Brazil, but it was only a waste of money. Then I
            decided to take the risk of hiring a company abroad and find FINALLY
            found Search Berg. An AMAZING partnership that took my BUSSINESS TO
            ANOTHER LEVEL. Thank you very much Search Berg!!!!!!"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/bbjwBhX/bs4.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const fifthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            My company contactedSearch Berg to...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "My company contactedSearch Berg to get a quote on there seo
            services after a very reasonable quote we decided to go with there
            service, my project manager Hudson has been wonderful to work with
            answering all my questions and concerns. I definitely recommend them
            to anyone looking for digital marketing services."
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/fXbV6w3/bs5.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const sixthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            Jake has been my project manager for...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "Jake has been my project manager for reaching success for SEO and
            making our company known. He was been so hands on, taking the time
            to answer any question (big or small) and sending detailed
            information of progression and a game plan for the coming months. We
            have been really impressed and would recommend!"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/BKWLFzp/bs6.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const seventhItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            Good value for a professional logo...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "Good value for a professional logo. Very responsive. Thanks so
            much"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/HCHVw3H/bs7.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const eighthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            I'm a self-taught wannabe website builder...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "I'm a self-taught wannabe website builder that does not have the
            expertise and could not devote the time to get my project off the
            ground. Having never done this before I didn't know what to expect.
            My Project Manager, Jake Fernandez, has been an awesome resource!
            He's easy to work with and doesn't mind revising content, while
            keeping me informed of the impact of my proposed changes. Jake is
            also a great cat herder who keeps it all moving forward!"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/VCgGZfv/b1.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const ninethItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            I am so happy to work with Search Berg...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "I am so happy to work with Search Berg. They really care about you
            and invest a lot of effort helping you with anything you need. They
            listen, they care and deliver results! Jake assisted me with my
            website and he was so patient i really felt I'm in the best hands.
            Don't think twice, hire Search Berg for your website and SEO needs!"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/th81Mcr/b2.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const tenthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            These folks have done a marvelous job...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "These folks have done a marvelous job pointing out the strengths
            and weaknesses of our website. They jumped onboard and immediately
            started to make positive changes that I could see where it
            counts....in my bottom line. I would highly recommend Search
            Berg!!".
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/t3w0nVf/b3.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const eleventhItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            I've been working withSearch Berg ...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "I've been working withSearch Berg over the past few years for
            website and SEO work, and they have been fantastic. Scarlet is super
            responsive, and she does incredible work. I'm exciting to continue
            working with these guys. 5-stars all the way!".
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/XyGNTkt/b4.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const twelvethItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            I just received my completed website...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "I just received my completed website. I was nervous in the
            beginning since it was my first time developing a website. Walter,
            Matt and their team were excellent. They listened to my ideas, they
            were great in turning my vision into reality. They communicated with
            me throughout the entire process. They were on time with the
            promised delivery of the site. The site looks first class. I would
            highly recommend Search Berg with no hesitation."
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/CbpbWRP/b5.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const thirteenthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            Adam came up with a great web site...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            " Adam came up with a great web site for us and the time did a great
            job with the move over to the lisra.org site"
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/8PHjzqn/b6.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
  const fourteenthItem = (
    <>
      <div className="flex ml-5">
        <div className="w-9/12 border-r-[1px] border-[#d6d2d2] pr-5 my-5">
          <h3 className="text-xl font-bold">
            Adam and team did a wonderful Job...
          </h3>
          <h3 className="text-secondary flex text-[1.1rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
          <p className="slider-p">
            "Adam and team did a wonderful Job on my site. I’ve had great
            success with them in the past and was certain they would do great
            work. I don’t know how they dealt with me constantly busy never able
            to reply or answer the phone, regardless of my nonsense, they stayed
            positive, on track and kept all deadlines associated with this
            project. My site is gorgeous I can’t wait for it to explode all over
            the internet!!! Thanks again for your hard work, and attention to
            detail, oh also don’t worry if you don’t have enough content! They
            will help with that as well."
          </p>
        </div>
        <div className="w-3/12 justify-items-center relative">
          <div className="absolute bottom-5 left-2">
            <img src="https://i.ibb.co/xH1r5n0/b7.webp" alt="thumnail-img" />
            <img
              src="https://i.ibb.co/RyfmC01/google-client-reviews.png"
              alt="review-img"
            />
          </div>
        </div>
      </div>
    </>
  );

  const sliderRef = useRef(null);
  // useEffect(() => {
  //   console.log(sliderRef.current);
  // }, []);
  const [items, setItems] = useState(firstItem);
  const [ setNewItems] = useState(items);
  const changeNewItems = (newItems) => {
    setNewItems(newItems);
  };
  const changeSlideItems = (items) => {
    setItems(items);
  };

  const changeItems = [
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(firstItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white hover:text-accent rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/72S6zgt/rs1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Karl Mollison</h6>
              <p>getwisdom.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(secondItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/vjwp9BC/rs2.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(thirdItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/2dTMy3f/rs3.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Violet Huskey</h6>
              <p>meneseslegal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(fourthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/xhxkDXB/rs4.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Philipe Augostu</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(fifthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/Brdbzdk/rs5.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Dometic Lewis</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(sixthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/JjNkr1X/rs6.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Twesday Sandars</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(seventhItem)}
            className=" flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/ftqsr7s/rs7.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Sandra Williams</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(eighthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/R4bP0n4/reviewer-1.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John Henson</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(ninethItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/1Xbp3zK/reviewer-3.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Ora Greenstien</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(tenthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/vDSDZjv/reviewer-4.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Eric Dent</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(eleventhItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/j5ZnZvJ/reviewer-5.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Charles Waller</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(twelvethItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/6H1HqFj/reviewer-6.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Lou Orth</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(thirteenthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[gray] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/cxJS2PJ/reviewer-8.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>John </h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
    {
      name: (
        <>
          <li
            onClick={() => changeSlideItems(fourteenthItem)}
            className="flex items-center gap-2 p-3 border-[#d2d4d8] hover:bg-white rounded-lg hover:border-[#968f8f] border-[1px]"
          >
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover"
                src="https://i.ibb.co/fS8JgPP/reviewer-2.webp"
                alt="reviewer"
              />
            </div>
            <div>
              <h6>Reveka Oliwoch</h6>
              <p>Moveinlikealocal.com</p>
            </div>
          </li>
        </>
      ),
    },
  ];

  return (
    <section className="hidden lg:block w-11/12 mx-auto py-6 mb-10">
      <div className="flex justify-center gap-5">
        <div className="w-3/12 flex justify-center px-2 items-center mr-2">
          <div className="flex flex-col items-center gap-2 justify-center">
            <div
              onClick={() => {
                sliderRef.current.slickPrev();
                // changeNewItems(items);
                // sliderRef.current.slickGoTo();
              }}
            >
              <button className="p-1 rounded-full hover:bg-white hover:text-accent border-primary border btn-primary">
                <FaAngleUp className="text-3xl font-bold" />
              </button>
            </div>
            <div
              onClick={() => {
                sliderRef.current.slickNext();
                // changeNewItems(items);
                // sliderRef.current.slickGoTo();
              }}
            >
              <button className="p-1 rounded-full hover:bg-white hover:text-accent border-primary border btn-primary">
                <FaAngleDown className="text-3xl font-bold" />
              </button>
            </div>
          </div>
          <div className="w-full">
            <Slider
              className="min-h-max"
              ref={sliderRef}
              slidesToShow={4}
              slidesToScroll={1}
              vertical={true}
              arrows={false}
            >
              {changeItems.map((item, index) => (
                <div key={index} className="">
                  <ul className="current-bg-change h6-color cursor-pointer">
                    <h3
                      onClick={() => {
                        changeNewItems(items);
                        sliderRef.current.slickGoTo(index);
                      }}
                      className=""
                    >
                      {item.name}
                    </h3>
                  </ul>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex w-9/12 border border-[#d6d2d2]">{items}</div>
      </div>
    </section>
  );
};

export default InternetClientReviewSlider;
