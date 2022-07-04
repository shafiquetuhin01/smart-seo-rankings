import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import InternetClientReview from './InternetClientReview/InternetClientReview';
import InternetClientReviewSlider from './InternetClientReviewSlider/InternetClientReviewSlider';
import InternetConfused from './InternetConfused/InternetConfused';
import InternetFAQ from './InternetFAQ/InternetFAQ';
import InternetGetInTouch from './InternetGetInTouch/InternetGetInTouch';
import InternetHero from './InternetHero/InternetHero';

const InternetMarketing = () => {
    return (
        <div>
            <PageTitle title="Internet Marketing"></PageTitle>
            <InternetHero />
            <InternetClientReview />
            <InternetClientReviewSlider />
            <DigitalMarketing />
            <InternetConfused />
            <InternetFAQ />
            <InternetGetInTouch />
            
        </div>
    );
};

export default InternetMarketing;