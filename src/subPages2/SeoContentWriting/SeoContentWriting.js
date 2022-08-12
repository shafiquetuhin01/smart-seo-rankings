import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import CustomSeoContent from './CustomSeoContent';
import SeoContentAgency from './SeoContentAgency';
import SeoContentDependable from './SeoContentDependable';
import SeoContentHelped from './SeoContentHelped';
import SeoContentHero from './SeoContentHero';
import SeoContentHire from './SeoContentHire';
import SeoContentHowWork from './SeoContentHowWork';
import SeoContentOr from './SeoContentOr';
import SeoContentSlider from './SeoContentSlider';
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
            <SeoContentDependable/>
            <SeoContentAgency/>
            <SeoContentSlider/>
            <SeoContentHelped/>
            <SeoContentHowWork/>
            <SeoContentHire/>
        </section>
    );
};

export default SeoContentWriting;