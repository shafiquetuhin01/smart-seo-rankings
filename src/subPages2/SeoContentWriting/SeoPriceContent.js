import React, { useState } from "react";

const SeoPriceContent = () => {

  const [count, setCount] = useState(1);
  
   
  const increaseCount = () => {
    if (count <= 24) {
      setCount(count + 1);
    }
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const [word, setWord] = useState(300);
  const increaseWord = () => {
    if (word <= 2400) {
      setWord(word + 100);
    }
  };
  const decreaseWord = () => {
    if (word > 300) {
      setWord(word - 100);
    }
  };
  return (
    <section className="w-11/12 mx-auto lg:flex justify-center gap-5">
      <div className="w-4/12 mx-auto card shadow-xl">
        <div className="card-body">
          <h2
            style={{
              backgroundImage:
                'url("https://i.ibb.co/7YFCQfb/starter-pkg-back.webp")',
            }}
            className="bg-no-repeat bg-cover card-title text-info text-3xl text-center mx-auto py-3 h-24"
          >
            SEO BLOGS
          </h2>
          <div className="bg-info p-5 text-center">
            <button className="bg-secondary text-center text-white p-2 rounded-md text-lg ">
              Starting from
            </button>
            <h4 className="mt-2 text-3xl font-bold text-center text-white">
              <span className="text-secondary">$</span>19.50
            </h4>
          </div>
          <div className="mt-2">
            <p className="inline font-bold">Quantity: </p>
            <div className="ml-5 relative inline border border-[gray] p-2">
              <button
                onClick={increaseCount}
                className="absolute text-secondary font-bold text-xl"
              >
                +
              </button>
              <input
                className="text-center inline focus:outline-none seo-input-edit w-[200px] text-xl font-bold"
                type="number"
                id="inc"
                min={1}
                max={25}
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button onClick={decreaseCount} className="text-secondary right-3 inline absolute font-bold text-xl">
                -
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="inline font-bold">Words: </p>
            <div className="ml-[35px] relative inline border border-[gray] p-2">
              <button
                onClick={increaseWord}
                className="absolute text-secondary font-bold text-xl"
              >
                +
              </button>
              <input
                className="text-center inline focus:outline-none seo-input-edit w-[200px] text-xl font-bold"
                type="number"
                id="inc"
                min={300}
                max={2500}
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <button onClick={decreaseWord} className=" text-secondary right-3 inline absolute font-bold text-xl">
                -
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className=" font-bold">Turnaround Time: </p>
            <p className="text-xl w-15 bg-gray-300 p-1 rounded-md text-center mr-9">
           <span >{count<=8 && word <=300?2:count<=16 && word<=300?3:count<=25 && word<=300?4:count<=5 && word<=300?2:count<=10 && word<=1000?3:count<=15 && word<=1500?4:count<=20 && word<=2000?5:count<=25 && word<=2500?6:7}</span>
              <span className="ml-1">Days</span>
            </p>
          </div>
          <div className="mt-7">
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>100% Original Content (Copyscape Verified)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>SEO Tags</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>SEO Optimized</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>100% Original Content (Copyscape Verified)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Content Edited and Proofread to Perfection</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Royalty Free (CC0 Images)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Money-Bank Gurantee</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Unlimited Revisions</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Round-the-Clock Support</span>
            </p>
          </div>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="flex justify-between text-xl font-bold text-secondary">
            <h4>Total:</h4>
            <h4>
              $<span>19.50</span>
            </h4>
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-secondary hover:bg-info hover:border-0 text-white text-xl rounded-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/12 mx-auto card shadow-xl">
        <div className="card-body">
          <h2
            style={{
              backgroundImage:
                'url("https://i.ibb.co/7YFCQfb/starter-pkg-back.webp")',
            }}
            className="bg-no-repeat bg-cover card-title text-info text-3xl text-center mx-auto py-3 h-24"
          >
            WEB CONTENT
          </h2>
          <div className="bg-info p-5 text-center">
            <button className="bg-secondary text-center text-white p-2 rounded-md text-lg ">
              Starting from
            </button>
            <h4 className="mt-2 text-3xl font-bold text-center text-white">
              <span className="text-secondary">$</span>24.00
            </h4>
          </div>
          <div className="mt-2">
            <p className="inline font-bold">Quantity: </p>
            <div className="ml-5 relative inline border border-[gray] p-2">
              <button
                onClick={increaseCount}
                className="absolute text-secondary font-bold text-xl"
              >
                +
              </button>
              <input
                className="text-center inline focus:outline-none seo-input-edit w-[200px] text-xl font-bold"
                type="number"
                id="inc"
                min={1}
                max={25}
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button onClick={decreaseCount} className="text-secondary right-3 inline absolute font-bold text-xl">
                -
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="inline font-bold">Words: </p>
            <div className="ml-[35px] relative inline border border-[gray] p-2">
              <button
                onClick={increaseWord}
                className="absolute text-secondary font-bold text-xl"
              >
                +
              </button>
              <input
                className="text-center inline focus:outline-none seo-input-edit w-[200px] text-xl font-bold"
                type="number"
                id="inc"
                min={300}
                max={2500}
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <button onClick={decreaseWord} className=" text-secondary right-3 inline absolute font-bold text-xl">
                -
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className=" font-bold">Turnaround Time: </p>
            <p className="text-xl w-15 bg-gray-300 p-1 rounded-md text-center mr-9">
           <span >{count<=8 && word <=300?2:count<=16 && word<=300?3:count<=25 && word<=300?4:count<=5 && word<=300?2:count<=10 && word<=1000?3:count<=15 && word<=1500?4:count<=20 && word<=2000?5:count<=25 && word<=2500?6:7}</span>
              <span className="ml-1">Days</span>
            </p>
          </div>
          <div className="mt-7">
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>100% Original Content (Copyscape Verified)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>SEO Tags</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>SEO Optimized</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>100% Original Content (Copyscape Verified)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Content Edited and Proofread to Perfection</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Royalty Free (CC0 Images)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Money-Bank Gurantee</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Unlimited Revisions</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Round-the-Clock Support</span>
            </p>
          </div>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="flex justify-between text-xl font-bold text-secondary">
            <h4>Total:</h4>
            <h4>
              $<span>19.50</span>
            </h4>
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-secondary hover:bg-info hover:border-0 text-white text-xl rounded-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/12 mx-auto card shadow-xl">
        <div className="card-body">
          <h2
            style={{
              backgroundImage:
                'url("https://i.ibb.co/7YFCQfb/starter-pkg-back.webp")',
            }}
            className="bg-no-repeat bg-cover card-title text-info text-3xl text-center mx-auto py-3 h-24"
          >
            PRODUCT DESCRIPTIONS
          </h2>
          <div className="bg-info p-5 text-center">
            <button className="bg-secondary text-center text-white p-2 rounded-md text-lg ">
              Starting from
            </button>
            <h4 className="mt-2 text-3xl font-bold text-center text-white">
              <span className="text-secondary">$</span>2.00
            </h4>
          </div>
          <div className="mt-2">
            <p className="inline font-bold">Quantity: </p>
            <div className="ml-5 relative inline border border-[gray] p-2">
              <button
                onClick={increaseCount}
                className="absolute text-secondary font-bold text-xl"
              >
                +
              </button>
              <input
                className="text-center inline focus:outline-none seo-input-edit w-[200px] text-xl font-bold"
                type="number"
                id="inc"
                min={1}
                max={25}
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button onClick={decreaseCount} className="text-secondary right-3 inline absolute font-bold text-xl">
                -
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="inline font-bold">Words: </p>
            <div className="ml-[35px] relative inline border border-[gray] p-2">
              <button
                onClick={increaseWord}
                className="absolute text-secondary font-bold text-xl"
              >
                +
              </button>
              <input
                className="text-center inline focus:outline-none seo-input-edit w-[200px] text-xl font-bold"
                type="number"
                id="inc"
                min={300}
                max={2500}
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <button onClick={decreaseWord} className=" text-secondary right-3 inline absolute font-bold text-xl">
                -
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className=" font-bold">Turnaround Time: </p>
            <p className="text-xl w-15 bg-gray-300 p-1 rounded-md text-center mr-9">
           <span >{count<=8 && word <=300?2:count<=16 && word<=300?3:count<=25 && word<=300?4:count<=5 && word<=300?2:count<=10 && word<=1000?3:count<=15 && word<=1500?4:count<=20 && word<=2000?5:count<=25 && word<=2500?6:7}</span>
              <span className="ml-1">Days</span>
            </p>
          </div>
          <div className="mt-7">
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>100% Original Content (Copyscape Verified)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>SEO Tags</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>SEO Optimized</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>100% Original Content (Copyscape Verified)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Content Edited and Proofread to Perfection</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Royalty Free (CC0 Images)</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Money-Bank Gurantee</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Unlimited Revisions</span>
            </p>
            <p className="leading-6">
              <i
                className="fa fa-check-square-o text-secondary mr-2 font-bold"
                aria-hidden="true"
              ></i>
              <span>Round-the-Clock Support</span>
            </p>
          </div>
          <hr className="border-t border-gray-300 mt-2" />
          <div className="flex justify-between text-xl font-bold text-secondary">
            <h4>Total:</h4>
            <h4>
              $<span>19.50</span>
            </h4>
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-secondary hover:bg-info hover:border-0 text-white text-xl rounded-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoPriceContent;
