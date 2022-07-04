import React from 'react';
import {Link} from 'react-router-dom';
import Faq from "react-faq-component";
import { FaPlus } from 'react-icons/fa';
const InternetFAQ = () => {
    const data = {
        
        rows: [
            {

                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' /> What is digital marketing?</div>,
                content: `Digital marketing (also known as “internet marketing”) is the process of reaching, engaging, and converting potential customers on the internet. Presently, there are over 4.72 billion web users across the globe. By targeting the right subset(s) of their demographic through digital marketing, businesses can increase their revenue, improve their brand identity, and ensure long-term growth.`,
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' /> Does my business need digital marketing services?</div>,
                content:
                    "If you sell products/services (online or offline), you need digital marketing services. Whether you recently launched a startup, run a small business, or own a successful corporation, digital marketing can help you reach more people. As your brand connects with relevant web users on the web, you’ll broaden your audience base. The outcome? More conversions, better growth, and a stronger bottom line.",
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' /> What are the types of digital marketing?</div>,
                content: `Digital marketing is broken down into multiple subsets, including content marketing, search engine marketing, social media marketing, mobile marketing, email marketing, affiliate marketing, influencer marketing, etc. Based on your industry, business model, brand identity, and audience, the right digital marketing strategy will be created accordingly. `,
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' /> How can digital marketing benefit my business?</div>,
                content: <p>Digital marketing is a power-packed boost for businesses. As you gain greater visibility on the web, your audience will consistently grow. You’ll be able to achieve better conversion rates, improve customer satisfaction, maximize profit, gain brand credibility, tap into new demographics, increase brand recall, reduce customer attrition, and become a recognized name in your industry. </p>,
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' />  What is a digital marketing strategy?</div>,
                content: <p>A digital marketing strategy is an individualized strategy that’s created to help businesses reach a wide audience, rank higher on Google, get more conversions, and achieve their unique marketing goals. </p>,
            },
        ],
    };
    const data2 = {
        
        rows: [
            {

                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' />  Does digital marketing work for all industries?</div>,
                content: `Yes, digital marketing is recommended for all industries. Whether you provide tech support, sell beauty products, practice law, manufacture residential doors, or offer any other products/services, you can benefit from a strong digital marketing strategy. No matter how unique your industry may be, digital marketing will help your business get seen by potential customers online.`,
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' />  Can digital marketing help me outdo my competitors?</div>,
                content:
                    "Digital marketing is popularly used by businesses that wish to outrank and outperform their competitors. The right strategy will give you an edge in your respective industry. As industry-specific traffic is redirected to your site, you’ll make more sales. In the long run, your business will become one of the top contenders in your industry. We perform a digital marketing competitor analysis to identify the most effective ways to get your performance on par with your competitors. Shortly afterward, we help you outdo them.",
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' />  Why isn’t my digital marketing strategy working?</div>,
                content: `If your digital marketing strategy isn’t working, you’ve likely partnered with the wrong company. It’s also possible that you have an in-house digital marketing team that doesn’t possess the experience, expertise, skills, and know-how required to help your business perform exceptionally well in online spaces. `,
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' />  How soon can I see results from digital marketing?</div>,
                content: <p>At Search Berg, we go the extra mile to offer our clients actionable results that help them rank on Google in fewer than 30 days. We suggest that you wait a few weeks in order to view concrete results, especially if your project is in its initial stages. Considering the amount and type of online competition, it may take a little bit of time before you start achieving target KPIs and begin to notice an increase in quality traffic. </p>,
            },
            {
                title: <div className='flex items-center justify-center'><FaPlus className='mr-2 text-secondary' />   How can Search Berg help me get started?</div>,
                content: <p> to request a proposal and free SEO audit report. Simply enter your name, phone number, email address, website, chosen service, and project details. Submit the request and our digital marketing experts will get in touch with you shortly. For more information, give us a call at <Link to="tel:855-444-4777">855-444-4777</Link>  , and we’ll take it from there. </p>,
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
                <div className='w-full lg:w-10/12 mx-auto lg:flex justify-center items-center gap-5'>
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

export default InternetFAQ;