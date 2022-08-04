import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import SeoContentHero from './SeoContentHero';
import SeoFeaturedContent from './SeoFeaturedContent';
import SeoProblemTogether from './SeoProblemTogether';
import WhatClientSay from './WhatClientSay';
import WhySmartSeo from './WhySmartSeo';

const SeoContentWriting = () => {
    return (
        <section className='min-h-screen'>
            <PageTitle title="SEO Content Writing Services"/>
            <SeoContentHero/>
            <WhatClientSay/>
            <WhySmartSeo/>
            <SeoProblemTogether/>
            <SeoFeaturedContent/>
        </section>
    );
};

export default SeoContentWriting;