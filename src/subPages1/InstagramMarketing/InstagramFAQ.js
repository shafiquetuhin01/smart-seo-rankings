import React from 'react';
import Faq from "react-faq-component";
import { FaPlus } from 'react-icons/fa';
const InstagramFAQ = () => {
    const data = {
        
        rows: [
            {

                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   What Is Instagram Marketing?</div>,
                content: `Instagram marketing is the process of using Instagram to sell your products/services and promote your brand. As one of the leading social media platforms, Instagram is a goldmine for businesses.

                And not just large corporations either. Whether you run a small business or recently launched a startup, leveraging Instagram marketing strategies can help you get more customers and skyrocket your sales.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   How Can Instagram Be Used for Marketing?</div>,
                content:
                    "Creating Facebook ads can help you earn a substantially larger sum than what you initially invested. In short, the traffic, sales, and profit are definitely worth it. Our Facebook marketing professionals can help you get started!!",
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   How Effective Is Instagram Marketing?</div>,
                content: `Brands that have leveraged Instagram marketing have grown at an average rate of 163% over the span of two years. As Instagram continues to increase in popularity, it’s easily becoming one of the most effective social media applications for marketing purposes.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   How Do I Promote My Business on Instagram? </div>,
                content: <p>Promoting your business on Instagram involves creating a profile, sharing high-quality images and videos, posting compelling ads, and engaging with customers on a regular basis. At Search Berg, we take care of it all. Give us a call and we’ll help take your business to new heights!</p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    Are Instagram Ads Worth It?</div>,
                content: <p>Instagram’s advertising reach is a whopping 849.3 million users. Simply put, investing in Instagram ads can help your business reach a wide demographic and maximize sales. </p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />     How Can I Start Marketing Through Instagram?</div>,
                content: <p>At Search Berg, we’re equipped with the insights, expertise, and social media optimization tools required to help you establish a winning online presence on Instagram. If you’re ready to get more calls and dominate your industry by leveraging Instagram, we’re right here to help you make it happen! Give us a call to kick things off. </p>,
            },
        ],
    };
    const data2 = {
        
        rows: [
            {

                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    Does Instagram Marketing Work for Small Businesses? </div>,
                content: `Instagram marketing is extremely effective for both small and medium-sized businesses.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    How Can I Reach More People on Instagram? </div>,
                content:
                    "There are many ways to maximize reach on Instagram, including posting optimized content on a regular basis. At Search Berg, we identify the best ways to reach more people based on your industry, business model, and demographic.",
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    My Instagram Posts Aren’t Doing Well. What Am I Doing Wrong?</div>,
                content: `Have you optimized your posts? Are you posting frequently? Are you leveraging Instagram’s additional features? We’ll identify all potential lapses and correct them to ensure your posts reach a wide audience. `,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   Does Instagram Promotion Increase Followers?</div>,
                content: <p>Yes, Instagram promotion helps you gain more followers and get more likes. These factors increase visibility, engagement, and sales.</p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />     Can I Sell My Products/Services on Instagram?</div>,
                content: <p> Yes! All businesses can sell their products/services on the popular platform. You can redirect customers to your website or make direct sales through Instagram direct messages (DMs).</p>,
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

export default InstagramFAQ;