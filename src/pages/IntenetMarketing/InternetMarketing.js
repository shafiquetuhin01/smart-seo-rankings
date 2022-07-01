import React from 'react';
import InternetClientReview from './InternetClientReview/InternetClientReview';
import InternetClientReviewSlider from './InternetClientReviewSlider/InternetClientReviewSlider';
import InternetHero from './InternetHero/InternetHero';

const InternetMarketing = () => {
    return (
        <div>
            <InternetHero />
            <InternetClientReview />
            <InternetClientReviewSlider />
        </div>
    );
};

export default InternetMarketing;