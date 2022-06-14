import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./ReviewCarousel.css";

const ReviewCarousel = () => {
  return (
    <>
      <div className="review-carousel py-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper"
        >
          <SwiperSlide>
            <div className="pt-6 py-10" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="block">
                <img
                  className="mx-auto py-6"
                  src="https://i.ibb.co/wYRG4Z9/western-mass-auto-insurance.webp"
                  alt=""
                />
              </div>
              <div className="mx-10 text-left">
                <p className=" text-justify">
                  <a
                    className="text-primary"
                    href="https://westernmassautoinsurance.com/"
                    target="_blank"
                  >
                    Western Mass Auto Insurance{" "}
                  </a>
                  provides auto, motorcycle, apartment, and home insurance. They
                  offer affordable services through low cost and low down
                  payment insurance services. When we started working with
                  Western Mass Auto Insurance, we conducted a thorough analysis
                  of their business, understood their vision, and identified
                  their marketing objectives. They wanted our help to rank for
                  several industry-specific keywords to get more traction on
                  their website.
                </p>
                <p className=" text-justify mt-2">
                  We devised a multi-tiered SEO strategy that included content
                  marketing, Google My Business optimization, social media
                  marketing, and engaging infographics to divert traffic to
                  their website through multiple channels. Soon enough, they
                  were ranking number 1 in Google results for several of their
                  keywords. Click below to view the detailed case study.
                </p>
                <h3 className="text-2xl font-bold mt-2 mb-5 text-primary text-center">
                  <button className="btn btn-secondary text-white">
                    Detailed Case Study
                  </button>
                </h3>
              </div>
              <div className="lg:flex justify-center gap-5">
                <div className="">
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>car insurance Western Mass</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>car insurance Indian Orchard</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Commercial Vehicle Insurance Indian Orchard</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Home and Apartment Insurance Indian Orchard</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Get your Car insured Indian Orchard</td>
                        <td>01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Content Developed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://westernmassautoinsurance.com/renters-insurance-things-you-should-know/"
                          >
                            View Infographics
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://westernmassautoinsurance.com/tips-to-follow-when-buying-a-car/"
                          >
                            View Blog Post 1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://westernmassautoinsurance.com/understanding-home-insurance-in-massachusetts/"
                          >
                            View Blog Post 2
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://westernmassauto.tumblr.com/post/190290418104/why-is-it-essential-to-have-auto-insurance"
                          >
                            View Article 1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://westernmassauto.tumblr.com/post/190422013183/financial-goals-for-homeowners-this-new-yearall"
                          >
                            View Article 2
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 py-10" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="block">
                <img
                  className="mx-auto py-6"
                  src="https://i.ibb.co/8bmw1T0/lice-troopers-transparent.webp"
                  alt=""
                />
              </div>
              <div className="mx-10 text-left">
                <p>
                  <a
                    href="https://www.licetroopers.com/"
                    rel="nofollow"
                    target="_blank"
                  >
                    Lice Troopers
                  </a>{" "}
                  is a professional, all-natural-lice removal service operating
                  in several parts of Florida, New York and New Jersey. When we
                  started working with the company, we understood their vision:
                  they wanted to rank # 1 on certain, very specific keywords and
                  regions.{" "}
                </p>
                <p className="mt-2">
                  An in-depth analysis had begun; our digital marketing experts
                  spearheaded multiple targeted content, video and social media
                  marketing campaigns to achieve successful results.{" "}
                </p>
                <h3 className="text-2xl font-bold mt-2 mb-5 text-primary text-center">
                  <button className="btn btn-secondary text-white">
                    Detailed Case Study
                  </button>
                </h3>
              </div>
              <div className="lg:flex justify-center gap-5">
                <div className="">
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>lice clinic plantation</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Lice removal miami</td>
                        <td>02</td>
                      </tr>
                      <tr>
                        <td>lice treatment center</td>
                        <td>04</td>
                      </tr>
                      <tr>
                        <td>lice clinic near me</td>
                        <td>05</td>
                      </tr>
                      <tr>
                        <td>lice removal clinic</td>
                        <td>07</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Content Developed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.licetroopers.com/blog/Getting+Rid+of+Lice"
                            rel="nofollow"
                          >
                            View Infograph
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.licetroopers.com/blog/Keeping+Lice+Off+Field"
                            rel="nofollow"
                          >
                            View Blog Post
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://techcrunch.com/2011/05/17/almost-half-of-all-online-orders-now-include-free-shipping/"
                            rel="nofollow"
                          >
                            View Press Release
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.apsense.com/archive/why-is-it-extremely-important-to-address-a-lice-outbreak.html"
                            rel="nofollow"
                          >
                            View Article
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=4o-FdhtZLzA&amp;feature=youtu.be"
                            rel="nofollow"
                          >
                            View Video
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 py-10" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="block">
                <img
                  className="mx-auto py-6"
                  src="https://i.ibb.co/Hxs7NBk/336-productsion-transparent.webp"
                  alt=""
                />
              </div>
              <div className="mx-10 text-left">
                <p>
                  An award-winning, full service video production company led by
                  a husband-wife duo in Orange County; In a market that’s
                  already saturated with similar service providers,{" "}
                  <a
                    href="https://336productions.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    336 Productions
                  </a>{" "}
                  needed a team with the right expertise to help them stand out
                  among competitors—and that’s where Search Berg came in.
                </p>
                <p className="mt-2">
                  Our SEO experts built a long-term content roadmap based on
                  thorough keyword analysis of the industry and leading
                  competitors. We used that to target content gaps and
                  systematically improved the client’s rankings substantially!
                </p>
                <h3 className="text-2xl font-bold mt-2 mb-5 text-primary text-center">
                  <button className="btn btn-secondary text-white">
                    Detailed Case Study
                  </button>
                </h3>
              </div>
              <div className="lg:flex justify-center gap-5">
                <div className="">
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>orange county business video production</td>
                        <td>02</td>
                      </tr>
                      <tr>
                        <td>orange county corporate video services</td>
                        <td>02</td>
                      </tr>
                      <tr>
                        <td>corporate video services in orange county</td>
                        <td>02</td>
                      </tr>
                      <tr>
                        <td>Promotional Marketing video San Diego CA</td>
                        <td>03</td>
                      </tr>
                      <tr>
                        <td>Promotional videos service in San Diego CA</td>
                        <td>03</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Content Developed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/37855236567/photos/a.58130516567.80601.37855236567/10154904304001568/?type=3&amp;theater"
                            rel="nofollow"
                          >
                            View Infograph
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://336productions.com/tips-designing-effective-educational-videos/"
                            rel="nofollow"
                          >
                            View Blog Post 1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://336productions.com/creative-video-content-ideas-promote-event/"
                            rel="nofollow"
                          >
                            View Blog Post 2
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://prsync.com/-productions/-productions-acquires-new-cameras-and-video-equipment-to-maintain-their-competitive-edge-2292152/"
                            rel="nofollow"
                          >
                            View Press Release
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://336-productions.blogspot.com/2018/02/commercial-successthe-magic-behind.html"
                            rel="nofollow"
                          >
                            View Article
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 py-10" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="block">
                <img
                  className="mx-auto py-6"
                  src="https://i.ibb.co/yy3JJP6/hair-extension-of-houston-transparent.webp"
                  alt=""
                />
              </div>
              <div className="mx-10 text-left">
                <p>
                  <a
                    href="https://www.hairextensionsofhouston.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Hair Extensions of Houston
                  </a>{" "}
                  is a full-service salon, providing expert hair extension
                  installation and maintenance, coloring, and styling services.
                  Much like their clear brand vision, they also had specific
                  marketing objectives in mind, and we were more than ready to
                  deliver.
                </p>
                <p className="my-2">
                  After conducting extensive competitor research and thorough
                  keyword analysis, we devised a data-driven and comprehensive
                  SEO strategy that included social media marketing and content
                  management for Hair Extensions of Houston.{" "}
                </p>
                <p>
                  Now, the home page ranks on the third page of search engine
                  results.
                </p>
                <h3 className="text-2xl font-bold mt-2 mb-5 text-primary text-center">
                  <button className="btn btn-secondary text-white">
                    Detailed Case Study
                  </button>
                </h3>
              </div>
              <div className="lg:flex justify-center gap-5">
                <div className="">
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Original hair-loc system Houston</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Premium hair extensions Houston</td>
                        <td>04</td>
                      </tr>
                      <tr>
                        <td>Houston hair extensions</td>
                        <td>03</td>
                      </tr>

                      <tr>
                        <td>Quality hair extensions Houston</td>
                        <td>03</td>
                      </tr>

                      <tr>
                        <td>Hair extensions salon Houston TX</td>
                        <td>04</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Content Developed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.hairextensionsofhouston.com/things-you-need-to-know-about-loc-extensions/"
                            rel="nofollow"
                          >
                            View Infograph
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://hairextensionsofhouston.wordpress.com/2019/09/02/7-must-haves-in-your-hair-care-tool-kit/"
                            rel="nofollow"
                          >
                            View Article
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.hairextensionsofhouston.com/youre-ruining-your-extensions-by-doing-these-things/"
                            rel="nofollow"
                          >
                            View Blog Post
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.pr.com/press-release/787248"
                            rel="nofollow"
                          >
                            View Press Release
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=VMyT9K0AQvU"
                            rel="nofollow"
                          >
                            View Video
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 py-10" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="block">
                <img
                  className="mx-auto py-6"
                  src="https://i.ibb.co/JB2SHgn/varicone-veins-transparent.webp"
                  alt=""
                />
              </div>
              <div className="mx-10 text-left">
                <p>
                  <a
                    href="https://www.varicoseveinsdoctorsnewyork.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Varicose Veins Doctors New York
                  </a>{" "}
                  is a Manhattan-based clinic. They offer treatments for a range
                  of vein diseases and wanted to hire a team of SEO experts to
                  spread awareness about the treatment and prevention of vein
                  diseases.
                </p>
                <p className="mt-2">
                  Search Berg designed a holistic SEO strategy for them. From
                  creating their website to providing comprehensive content
                  management and social media management services to the client,
                  we helped Varicose Veins Doctors New York rank high for
                  industry-specific keywords in search engine results!{" "}
                </p>

                <h3 className="text-2xl font-bold mt-2 mb-5 text-primary text-center">
                  <button className="btn btn-secondary text-white">
                    Detailed Case Study
                  </button>
                </h3>
              </div>
              <div className="lg:flex justify-center gap-5">
                <div className="">
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Leg heaviness treatment NYC</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td>Pеrірhеrаl Vascular Vein treatment NYC</td>
                        <td>01</td>
                      </tr>

                      <tr>
                        <td>New York Varicose Veins Doctors</td>
                        <td>05</td>
                      </tr>

                      <tr>
                        <td>Trained veins doctors NYC</td>
                        <td>07</td>
                      </tr>
                      <tr>
                        <td>Certified vascular vein specialist in NYC</td>
                        <td>08</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Content Developed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.varicoseveinsdoctorsnewyork.com/varicose-veins-infographic/"
                            rel="nofollow"
                          >
                            View Infograph
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://varicoseveinsdoctors.tumblr.com/post/613640779535171584/body-contouring-through-emsculpt-all-you-need-to"
                            rel="nofollow"
                          >
                            View Article
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.varicoseveinsdoctorsnewyork.com/what-to-do-if-your-leg-cramps-feel-heavy-all-the-time/"
                            rel="nofollow"
                          >
                            View Blog Post
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.pr.com/press-release/801888"
                            rel="nofollow"
                          >
                            View Press Release
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://youtu.be/MGv2O898vSM"
                            rel="nofollow"
                          >
                            {" "}
                            View Video
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pt-6 py-10" style={{ backgroundColor: "#F0F0F0" }}>
              <div className="block">
                <img
                  className="mx-auto py-6"
                  src="https://i.ibb.co/YQjTP94/ancient-hair-secrets-transparent.webp"
                  alt=""
                />
              </div>
              <div className="mx-10 text-left">
                <p>
                  <a
                    href="https://ancienthairsecrets.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Ancient Hair Secrets
                  </a>{" "}
                  has been selling organic hair products to those struggling
                  with a range of hair problems since 2003. In a saturated
                  marketing landscape, the client wanted their unique products
                  to stand out instead of getting lost in a sea of generic
                  keywords—and SearchBerg stepped in to give them a complete
                  makeover!
                </p>
                <p className="mt-2">
                  Our SEO company used a mix of impeccable SEO strategies such
                  as social media marketing, website development, content
                  marketing, and infographics to generate keyword rankings for
                  the client. Our data-driven strategies ultimately led to
                  increased conversions and more sales for Ancient Hair Secrets.
                </p>

                <h3 className="text-2xl font-bold mt-2 mb-5 text-primary text-center">
                  <button className="btn btn-secondary text-white">
                    Detailed Case Study
                  </button>
                </h3>
              </div>
              <div className="lg:flex justify-center gap-5">
                <div className="">
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Keyword</th>
                        <th>Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>African american hair loss products</td>
                        <td>02</td>
                      </tr>

                      <tr>
                        <td>African americans hair growth serum</td>
                        <td>04</td>
                      </tr>

                      <tr>
                        <td>Hair growth products for african american hair</td>
                        <td>05</td>
                      </tr>
                      <tr>
                        <td>Buy beard growth shampoo online</td>
                        <td>06</td>
                      </tr>
                      <tr>
                        <td>
                          Natural hair growth products for African American
                        </td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <table className="mx-auto">
                    <thead>
                      <tr>
                        <th>Content Developed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.pinterest.com/pin/324681454390263333"
                            rel="nofollow"
                          >
                            View Infograph
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://ancienthaircaresecrets.blogspot.com/2020/04/4-beard-growing-mistakes-and-how-to.html"
                            rel="nofollow"
                          >
                            View Article 1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://medium.com/@freddixon11154/all-about-greasy-hair-and-how-to-manage-it-be3c52a63e4c"
                            rel="nofollow"
                          >
                            View Article 2
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.ancienthairsecrets.com/2020/03/15/test-3/"
                            rel="nofollow"
                          >
                            View Blog Post 1
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            href="https://www.ancienthairsecrets.com/2020/03/15/test-2/"
                            rel="nofollow"
                          >
                            View Blog Post 2
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ReviewCarousel;
