import React from 'react';

const SeoContentPriceSummary = () => {
    return (
        <div className='h-[350px] mx-12 relative shadow-xl'>
            <h2 className='text-white text-2xl bg-info px-2 py-4  rounded-t-2xl'>Summary</h2>
            <div className='border-b border-gray-300'>
                <div className="flex justify-between mx-3 mt-2">
                    <p>Service Type</p>
                    <p className='text-info font-bold'>Article Writing </p>
                </div>
                <div className="flex justify-between mx-3 mt-3">
                    <p>Quantity</p>
                    <p  className='text-info font-bold'>1</p>
                </div>
                <div className="flex justify-between mx-3 mt-3">
                    <p>Word count</p>
                    <p  className='text-info font-bold'>250</p>
                </div>
                <div className="flex justify-between mx-3 mt-3">
                    <p>Turnaround Time</p>
                    <p  className='text-info font-bold'>2 <span>Days</span></p>
                </div>
                <div className="flex justify-between mx-3 mt-3 pb-3 ">
                    <p>Monthly Subscription</p>
                    <p  className='text-info font-bold'>x</p>
                </div>
            </div>
            <div className="flex justify-between mx-3 mt-3 ">
                <h3 className='text-info text-xl font-bold'>TOTAL</h3>
                <h3  className='text-info font-bold text-xl'>$ <span>16.25</span></h3>
            </div>
            <div className='absolute bottom-0 left-0 right-0 border-t border-gray-300 mt-2'>
                <button className="btn btn-secondary w-full rounded-none text-white text-xl">Order Now</button>
            </div>
        </div>
    );
};

export default SeoContentPriceSummary;