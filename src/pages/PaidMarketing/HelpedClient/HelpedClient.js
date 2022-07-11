import React from 'react';

const HelpedClient = () => {
    return (
        <div className='bg-info py-6'>
            <div className='w-11/12 mx-auto'>
                <h3 className='text-center text-white text-4xl font-bold py-4'>How We’ve Helped <span className='text-secondary'>Our Clients</span></h3>
                <div className='lg:grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5'>
                    <img src="https://i.ibb.co/Zh06Mh7/ppc-img4.webp" alt="" />
                    <img src="https://i.ibb.co/gJyjyH4/ppc-img5.webp" alt="" />
                    <img src="https://i.ibb.co/bbqyRRC/ppc-img6.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HelpedClient;