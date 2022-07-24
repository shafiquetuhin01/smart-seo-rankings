import React from 'react';
import TwitterAdHowTo from './TwitterAdHowTo';

const TwitterTypesOf = () => {
    return (
        <section className='w-10/12 mx-auto my-8'>
            <div>
                <h3 className='text-4xl text-center font-bold text-info mb-4'>Types of <span className='text-secondary'>Twitter Ad</span> Formats</h3>
                <p className='text-accent py-5 text-center text-xl'>Thinking of investing in Twitter paid advertising? Here are some options!</p>
                <img className='mx-auto' src="https://i.ibb.co/JKLQrjd/twitter-img3.png" alt="" />
            </div>
            <TwitterAdHowTo/>
        </section>
    );
};

export default TwitterTypesOf;