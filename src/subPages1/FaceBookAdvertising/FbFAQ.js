import React from 'react';
import Faq from "react-faq-component";
import { FaPlus } from 'react-icons/fa';

const FbFAQ = () => {
    const data = {
        
        rows: [
            {

                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />  How Do You Advertise on Facebook?</div>,
                content: `Advertising on Facebook requires selecting an objective, setting up your ad account, finalizing your budget, and posting your ads. At Search Berg, our Facebook advertising experts willtake care of everything for you so you can attract high-quality traffic and watch the numbers go up!`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />  Is Advertising on Facebook Worth It?</div>,
                content:
                    "Creating Facebook ads can help you earn a substantially larger sum than what you initially invested. In short, the traffic, sales, and profit are definitely worth it. Our Facebook marketing professionals can help you get started!!",
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />  What Is Facebook Paid Advertising?</div>,
                content: `Facebook paid advertising is the process of posting paid ads on Facebook. At a small sum, you can generate more leads and rack up impressive profits. As more potential customers engage with your ads, you’ll manage to successfully grow your business in the long run! Our Facebook advertising agency can help you with all your paid advertising needs! `,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />  How Can I Invest In Affordable Facebook Advertising Services? </div>,
                content: <p>Our affordable Facebook advertising servicesare designed to help you get quick results without breaking the bank. Click here to request a free quote. </p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   How Long Does It Take To See Results With Facebook Ads? </div>,
                content: <p>Once you sign up for our Facebook AD management services, we’ll plan and launch your Facebook advertising campaign. Facebook ads work fast and they work well. You’ll begin to notice an improvement in lead generation within a few weeks. As your campaign gets more traction, the numbers will continue to improve. Within a month, you’ll view concrete results and an impressive boost in sales. </p>,
            },
        ],
    };
    const data2 = {
        
        rows: [
            {

                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   What Is The Best Way to Advertise on Facebook? </div>,
                content: `Writing engaging ads, focusing on mobile-first content, and carefully choosing placements are a few of the many ways to successfully advertise on Facebook. Our Facebook marketing specialists will determine the best strategy based on your business model and project parameters.`,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   Does Facebook Advertising Work For Small Business?</div>,
                content:
                    "Facebook advertising strategies are extremely effective for both small and medium-sized businesses.",
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />   Does My Business Need Facebook Advertising? </div>,
                content: `Over 2.7 billion people use Facebook. If you’re looking to convert your Facebook target audience into customers, Facebook advertising is for you, and our Facebook marketing company can help you get started! `,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />  How Do I Promote My Business on Facebook? </div>,
                content: <p>We use actionable Facebook advertising strategies to promote your business on Facebook. From setting up your ad account to creating high-quality ads, our professional Facebook advertising services cover all the bases to maximize reach and engagement on the platform.</p>,
            },
            {
                title: <div className='flex justify-center'><FaPlus className='mr-2 mt-1 text-secondary' />    How Long Will It Take Before I See Results With Facebook Ads?</div>,
                content: <p> While results vary based on your preexisting Facebook reach and industry, most businesses see results in under two weeks.</p>,
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

export default FbFAQ;