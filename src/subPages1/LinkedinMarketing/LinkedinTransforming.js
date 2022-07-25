import React from 'react';
import LinkedinCallUs from './LinkedinCallUs';

const LinkedinTransforming = () => {
    return (
        <section className='py-10 bg-no-repeat bg-cover min-h-screen' style={{backgroundImage:'url("https://i.ibb.co/n7WBMkX/fb-section4-bg.jpg")'}}>
            <div className='w-10/12 mx-auto'>
                <h3 className='lg:mx-20 text-4xl font-bold text-center text-white'>Transforming a <span className='text-secondary'>LinkedIn Marketing</span> Plan Into a Conversion-driven Strategy</h3>
                <p className='text-white text-center lg:w-9/12 mx-auto my-5 text-xl'>We’ve harnessed the power of social media, helping our clients rank higher on Google, increase leads and conversion rates to make winning sales.</p>
                <p className='text-white text-center lg:w-9/12 mx-auto my-5 text-xl'>Here’s a glimpse into what we’ve achieved so far:</p>
            </div>
            <div>
                <img className='mx-auto' src="https://i.ibb.co/5cWvmPK/screenshot.png" alt="" />
            </div>
            <LinkedinCallUs/>
        </section>
    );
};

export default LinkedinTransforming;