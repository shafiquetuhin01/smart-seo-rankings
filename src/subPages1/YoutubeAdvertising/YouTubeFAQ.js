import React from 'react';
import Faq from "react-faq-component";
import { FaPlus } from 'react-icons/fa';
const YouTubeFAQ = () => {
    const data = {
        
        rows: [
            {

                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   What Is YouTube Advertising?</div>,
                content: `YouTube advertising is the process of advertising your business on YouTube. It involves creating an account on Google Ads (formerly Google AdWords), selecting the target audience and ad placement, and submitting your video ads. With a high ROI, YouTube ads help clients increase brand visibility and make impressive sales.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   Is Advertising on YouTube Effective?</div>,
                content:
                    "Yes! In fact, Google states that users who engage with YouTube ads are 23 times more likely to visit/subscribe to a brand’s channel and share their videos.",
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   What Is the Cost of Advertising on YouTube?</div>,
                content: `With an average cost-per-view of $0.010–$0.030, YouTube ads are well worth the investment. At Search Berg, we offer affordable packages to help you make the most of YouTube ads at extremely low prices!`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   Can Anybody Advertise on YouTube? </div>,
                content: <p>YouTube allows businesses from a wide range of industries to share their ads. Whether you run a small business or recently launched a startup, YouTube ads are right up your alley.</p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    How Can I Start YouTube Advertising?</div>,
                content: <p>Our YouTube advertising specialists are equipped with the tools, resources, experience, and expertise required to help you kick-start a winning campaign! Click here to request a free proposal. We’ll get in touch with you shortly! </p>,
            },
        ],
    };
    const data2 = {
        
        rows: [
            {

                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    Is YouTube Advertising Effective for Small Businesses?</div>,
                content: `Yes, YouTube advertising helps small businesses reach a wide audience and increase sales.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    Should I Advertise on YouTube?</div>,
                content:
                    "If you’re looking to target a wide audience and increase sales, YouTube advertising is for you.",
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    How Can I Optimize My YouTube Page?</div>,
                content: `At Search Berg, we use actionable strategies to optimize your YouTube page and drive more views. From using high-volume keywords to updating your channel trailer, we leave no stone unturned.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    How Can I Make Money on YouTube?</div>,
                content: <p>Content creators can make money on YouTube by monetizing their videos. At Search Berg, we can help you get started.</p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />     How Can I Promote My Products/Services on YouTube?</div>,
                content: <p> Creating high-quality videos, sharing engaging posts, and using YouTube’s additional features are a handful of the many ways to promote your products/services on the platform. We’ll identify the top strategies based on your industry to ensure your products/services reach your target audience on YouTube.</p>,
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "accent",
        rowTitleColor: "#0E2E67",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    return (
        <section className='w-11/12 mx-auto'>
            <div className='my-10'>
                <h5 className='text-accent'>Frequently Asked <span className='text-secondary'>Questions</span></h5>
                <div className='w-full lg:w-10/12 mx-auto lg:flex justify-center gap-5'>
                    <div className='w-full lg:w-6/12 mx-auto'>
                        <Faq 
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                    <div className='w-full lg:w-6/12 mx-auto'>
                        <Faq 
                            data={data2}
                            styles={styles}
                            config={config}
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default YouTubeFAQ;