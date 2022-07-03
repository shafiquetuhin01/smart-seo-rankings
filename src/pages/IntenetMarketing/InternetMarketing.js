import React from 'react';
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