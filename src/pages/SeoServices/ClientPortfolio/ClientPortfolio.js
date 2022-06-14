import React from "react";
import "./ClientPortfolio.css";
const ClientPortfolio = () => {
  return (
    <div className="border-y py-10 border-black">
      <div className="w-9/12 mx-auto">
        <h2 className="text-4xl text-accent text-center font-bold py-3">
          Check Out Our{" "}
          <span className="text-secondary">Client Portfolio!</span>
        </h2>
        <div className="mt-6 lg:flex justify-between items-center">
          <div className="mr-8">
            <p className="text-lg">
              Our{" "}
              <span>
                <a href="#">100% Money Back Guarantee</a>
              </span>{" "}
              feature has allowed us to work with thousands of businesses
              worldwide. We have provided comprehensive internet marketing
              services to clients working in some of the most demanding,
              competitive industries today. See below:
            </p>
            <div>
              <div className="lg:flex mt-7 justify-evenly portfolio-icon items-center gap-5">
                <div>
                  <div className="portfolio-img-sizing">
                    <a>
                      <img
                        src="https://i.ibb.co/279SCSz/automotive-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>

                  <p className="text-center mt-2 text-lg font-bold">
                    Automotive
                  </p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                  <a href="#">
                      <img
                        src="https://i.ibb.co/qjZGz4t/bussiness-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">Business</p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/ByqCVP6/construction-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">
                    Construction
                  </p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/rwTvpTw/education-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">
                    Education
                  </p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/N1DjXkM/travel-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">Travel</p>
                </div>
              </div>
              <div className="lg:flex justify-evenly portfolio-icon items-center gap-5 mt-12">
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/JzMTY8X/health-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>

                  <p className="text-center mt-2 text-lg font-bold">Health</p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/X7sdJz2/real-state-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">
                    Real State
                  </p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/FD1BRSH/shopping-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">Shopping</p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/gPdvq18/technology-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">
                    Technology
                  </p>
                </div>
                <div>
                  <div className="portfolio-img-sizing">
                    <a href="#">
                      <img
                        src="https://i.ibb.co/v4D44fP/other-sp.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="text-center mt-2 text-lg font-bold">Other</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              className="portfolio-img"
              src="https://i.ibb.co/vH4XT3L/automotive.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortfolio;
