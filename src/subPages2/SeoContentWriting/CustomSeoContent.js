import React from 'react';
import SeoContentPrice from './SeoContentPrice';
import SeoContentPriceSummary from './SeoContentPriceSummary';

const CustomSeoContent = () => {
    return (
        <section className='w-10/12 mx-auto py-6'>
            <div>
            <h3 className='text-info text-center font-bold text-3xl'>Create Your Custom <span className='text-secondary'>Content Writing Package</span></h3>
            <p className="w-[200px] mx-auto border-4 border-secondary my-3"></p>
            </div>
            <div className='lg:flex justify-center items-center py-5'>
                <div className='w-7/12 mx-auto'>
                    <SeoContentPrice/>
                </div>
                <div className='w-5/12 mx-auto'>
                    <SeoContentPriceSummary/>
                </div>
            </div>
        </section>
    );
};

export default CustomSeoContent;