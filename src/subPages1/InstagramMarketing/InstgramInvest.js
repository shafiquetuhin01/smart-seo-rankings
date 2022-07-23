import React from 'react';
import { FaCheck } from 'react-icons/fa';

const InstgramInvest = () => {
    return (
        <section className='w-11/12 mx-auto py-10'>
            <h3 className='text-3xl font-bold text-center text-info'>Why You Should Invest in <span className='text-secondary'>Instagram Marketing</span></h3>
            <div className='my-5 w-full mx-auto flex gap-5'>
                <div className='w-1/2 mx-auto '>
                    <p className='text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>33% more engagement than any other social media platform by hours spent</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Re-invest existing marketing materials from other platforms</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Humanize your brand using a visual medium</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Benefit from the largest targetable social media market</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Leverage the power of viral hashtags</p>
                </div>
                <div className='w-1/2 mx-auto '>
                    <p className='text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Benefit from cross platform-advertising software (Facebook connectivity)</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Optimize Instagram posts for increased discoverability</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Track conversions, use A/B testing, and more</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Increase brand awareness</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Gain an edge over your competition</p>
                </div>
            </div>
        </section>
    );
};

export default InstgramInvest;