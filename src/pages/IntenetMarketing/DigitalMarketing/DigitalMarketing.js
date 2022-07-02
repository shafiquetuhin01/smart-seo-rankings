import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
    return (
        <div className='w-11/12 mx-auto my-3 py-5 bg-[#F3F3F3]'>
          <h3 className='my-5 text-4xl font-bold text-center text-secondary'>Digital Marketing Solutions</h3>  
          <div className='lg:grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10'>
            <div className='text-center mt-4'>
                <img className='mx-auto h-20' src="https://i.ibb.co/t8QDFbt/icon1.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>SEARCH ENGINE OPTIMIZATION</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Off-page and On-page SEO activties that bring new traffic, high rankings and more conversions to your website.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore SEO Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4 lg:border-x-[1px] lg:border-secondary lg:border-dashed'>
                <img className='mx-auto h-20' src="https://i.ibb.co/2ybCWqz/icon2.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>WEB DESIGN & DEVELOPMENT</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Establish your business online with confidence, with stunning, this is a new idea, a conversion driven, elegant website design.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore Web Design Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4'>
                <img className='mx-auto h-20' src="https://i.ibb.co/0njgtW2/icon3.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>SOCIAL MEDIA MARKETING</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Build a solid clientele from the ground-up by letting us manage all the social media platforms that matter to your business.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore Social Media Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4'>
                <img className='mx-auto h-20' src="https://i.ibb.co/fqnr9nc/icon4.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>PAY PER CLICK MANAGEMENT</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Cut through the noise and get straight to the first page of SERPs with ad campaigns that target lead generation and conversions.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore PPC Management Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4 lg:border-x-[1px] lg:border-secondary lg:border-dashed'>
                <img className='mx-auto h-20' src="https://i.ibb.co/HzM4Vxt/icon5.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>REPUTATION MANAGEMENT</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Protect your brand and company reputation from negative press and black hat SEO to reestablish yourself in the industry.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Check Reputation Management Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4'>
                <img className='mx-auto h-20' src="https://i.ibb.co/G7BrYLG/icon6.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>CONTENT MARKETING</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>High-quality, SEO-optimized blog posts, articles, infographics, videos, PRs and product descriptions that boost traffic.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore Content Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4'>
                <img className='mx-auto h-20' src="https://i.ibb.co/cN1Z5xt/icon7.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>SOFTWARE DEVELOPMENT</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Our team of expert software developers will create an elegant mobile app or web app within weeks for your business.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore Software Development Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4 lg:border-x-[1px] lg:border-secondary lg:border-dashed'>
                <img className='mx-auto h-20' src="https://i.ibb.co/C52kWxM/icon8.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>LOGO DESIGN</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>Give your brand an identity. Get a stunning logo for your website that best desribes your brand and your values. This is an additional line.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore Logo Design Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            <div className='text-center mt-4'>
                <img className='mx-auto h-20' src="https://i.ibb.co/cN1Z5xt/icon7.webp" alt="icon" />
                <Link className=' text-accent' to="#">
                <h4 className='text-xl font-bold hover:underline py-2'>VIDEOS</h4>
                </Link>
                <p className='text-center py-2 text-[15px]'>We create stunning videos that engages your target audience and promotes your brand, your products and services.</p>
                <Link className='text-secondary' to="#">
                <h5 className='flex items-center text-lg justify-center my-2 font-bold'>Explore Video Services <span><FaAngleDoubleRight className='ml-1'/></span></h5>
                </Link>
            </div>
            
          </div>
        </div>
    );
};

export default DigitalMarketing;