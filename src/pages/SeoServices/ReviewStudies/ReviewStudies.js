import React from 'react';
import ReviewCarousel from './ReviewCarousel';

const ReviewStudies = () => {
    return (
        <div className='py-10' style={{backgroundColor:'#F6F6F6'}}>
            <div className='w-8-12'>
            <h1 className='text-3xl font-bold text-center'>Review Our <span className='text-secondary'> Client Case Studies!</span></h1>
            <ReviewCarousel />
            </div>
            
        </div>
    );
};

export default ReviewStudies;