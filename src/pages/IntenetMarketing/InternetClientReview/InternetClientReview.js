import React from 'react';

const InternetClientReview = () => {
    return (
        <div className='bg-white my-8'>
           <h2 className='text-4xl text-accent font-bold text-center'>What Our <span className='text-secondary'>Clients Say</span></h2> 
           <div className='bg-[#E0F0FF] py-8 mt-7'>
                <div className='w-10/12 grid grid-cols-2 gap-5 lg:flex justify-evenly mx-auto'>
                    <img src="https://i.ibb.co/Nspt0BW/google-review-new.webp" alt="google-review" />
                    <img src="https://i.ibb.co/Z20xHqM/site-jabber-logo-new.webp" alt="site-jabber" />
                    <img src="https://i.ibb.co/84bSTVm/cluch-review.webp" alt="clutch review" />
                    <img src="https://i.ibb.co/wh8PkwC/bark-ratings-new.webp" alt="bark review" />
                </div>
           </div>
        </div>
    );
};

export default InternetClientReview;