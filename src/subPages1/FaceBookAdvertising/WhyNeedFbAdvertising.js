import React from 'react';
import { FaCheck } from 'react-icons/fa';

const WhyNeedFbAdvertising = () => {
    return (
        <section className='w-11/12 mx-auto py-10'>
            <h3 className='text-3xl font-bold text-center text-info'>Why You Need to Invest in <span className='text-secondary'>Facebook Advertising</span></h3>
            <div className='my-5 w-full mx-auto flex gap-5'>
                <div className='w-1/2 mx-auto '>
                    <p className='text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Your customers spend a substantial amount of time on Facebook every day. Leverage their active browsing to drive conversions and maximize sales!</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Get quick results at low prices</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Reach interested buyers with hyper-targeted ads</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Benefit from the largest targetable social media market</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Redirect social media customers to your website for better sales</p>
                </div>
                <div className='w-1/2 mx-auto '>
                    <p className='text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Track data that allows you to build a systematic sales funnel</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Optimize your conversion rate with A/B testing</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Retarget ads to tap into their full potential</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Increase brand awareness</p>
                    <p className='my-5 text-lg'><span><FaCheck className='rounded-full inline mr-2 bg-secondary text-xl'/></span>Gain an edge over your competition</p>
                </div>
            </div>
        </section>
    );
};

export default WhyNeedFbAdvertising;