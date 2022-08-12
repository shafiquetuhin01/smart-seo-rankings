import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import ArticleWritingHero from '../ArticleWriting/ArticleWritingHero';
import CustomSeoContent from '../SeoContentWriting/CustomSeoContent';
import SeoContentAgency from '../SeoContentWriting/SeoContentAgency';
import SeoContentDependable from '../SeoContentWriting/SeoContentDependable';
import SeoContentHelped from '../SeoContentWriting/SeoContentHelped';
import SeoContentHire from '../SeoContentWriting/SeoContentHire';
import SeoContentHowWork from '../SeoContentWriting/SeoContentHowWork';
import SeoContentOr from '../SeoContentWriting/SeoContentOr';
import SeoContentSlider from '../SeoContentWriting/SeoContentSlider';
import SeoFeaturedContent from '../SeoContentWriting/SeoFeaturedContent';
import SeoPriceContent from '../SeoContentWriting/SeoPriceContent';
import SeoProblemTogether from '../SeoContentWriting/SeoProblemTogether';
import WhatClientSay from '../SeoContentWriting/WhatClientSay';
import WhySmartSeo from '../SeoContentWriting/WhySmartSeo';

const EmailMarketing = () => {
    return (
        <div>
            <PageTitle title="Email Marketing"/>
            <ArticleWritingHero/>
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
        </div>
    );
};

export default EmailMarketing;