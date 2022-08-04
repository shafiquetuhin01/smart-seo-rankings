import React from 'react';
import SeoWritingReview from './SeoWritingReview';

const WhatClientSay = () => {
    return (
        <section className='py-6 bg-[#FFFFFF]'>
            <div>
                <h3 className='text-4xl text-center font-bold text-info'>Here’s What Our <span className='text-secondary'>Clients Are Saying!</span></h3>
                <p className='w-[150px] mx-auto mt-3 border-4 border-secondary'></p>
            </div>
            <div>
                <SeoWritingReview/>
            </div>
        </section>
    );
};

export default WhatClientSay;