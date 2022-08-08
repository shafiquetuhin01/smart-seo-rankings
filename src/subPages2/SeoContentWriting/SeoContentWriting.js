import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import CustomSeoContent from './CustomSeoContent';
import SeoContentHero from './SeoContentHero';
import SeoContentOr from './SeoContentOr';
import SeoFeaturedContent from './SeoFeaturedContent';
import SeoPriceContent from './SeoPriceContent';
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
            <SeoPriceContent/>
            <SeoContentOr/>
            <CustomSeoContent/>
        </section>
    );
};

export default SeoContentWriting;