import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import SeoServices from "./pages/SeoServices/SeoServices";
import PaidMarketing from "./pages/PaidMarketing/PaidMarketing";
import ContentMarketing from "./pages/ContentMarketing/ContentMarketing";
import WebDesignAndDev from "./pages/WebDesignAndDev/WebDesignAndDev";
import NavbarTop from "./components/NavbarTop";
import Navbar from "./components/Navbar";
import InternetMarketing from "./pages/IntenetMarketing/InternetMarketing";
import GoogleAdsMarketing from "./subPages1/GoogleAdsMarketing";
import FacebookAdvertising from "./subPages1/FacebookAdvertising";
import InstagramMarketing from "./subPages1/InstagramMarketing";
import YoutubeAdvertising from "./subPages1/YoutubeAdvertising";
import TwitterMarketing from "./subPages1/TwitterMarketing";
import LinkedinMarketing from "./subPages1/LinkedinMarketing";
import PinterestMarketing from "./subPages1/PinterestMarketing";
import AmazonMarketing from "./subPages1/AmazonMarketing";
import SeoContentWriting from "./subPages2/SeoContentWriting";
import ArticleWriting from "./subPages2/ArticleWriting";
import BlogWriting from "./subPages2/BlogWriting";
import EmailMarketing from "./subPages2/EmailMarketing";
import GuestBlogging from "./subPages2/GuestBlogging";
import WebDesignPackages from "./subPages3/WebDesignPackages";
import B2BWebDesign from "./subPages3/B2BWebDesign";
import B2CWebDesign from "./subPages3/B2CWebDesign";
import EcommerceWebDesign from "./subPages3/EcommerceWebDesign";
import WordPressWebDesign from "./subPages3/WordPressWebDesign";
import ResponsiveWebDesign from "./subPages3/ResponsiveWebDesign";
import LandingPageDesign from "./subPages3/LandingPageDesign";
import WebsiteMaintenance from "./subPages3/WebsiteMaintenance";
import WebsiteOptimization from "./subPages3/WebsiteOptimization";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Request from "./pages/Request/Request";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path="/seo-services" element={<SeoServices />}></Route>
        <Route path="/" element={<SeoServices />}></Route>
        <Route
          path="/internet-marketing"
          element={<InternetMarketing />}
        ></Route>
        <Route path="/paid-marketing" element={<PaidMarketing />}></Route>
        <Route path="/content-marketing" element={<ContentMarketing />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev/>}></Route>
        <Route
          path="/google-ads-marketing"
          element={<GoogleAdsMarketing />}
        ></Route>
        <Route path="/facebook-ads" element={<FacebookAdvertising />}></Route>
        <Route
          path="/instagram-marketing"
          element={<InstagramMarketing />}
        ></Route>
        <Route path="/youtube-ads" element={<YoutubeAdvertising />}></Route>
        <Route path="/twitter-marketing" element={<TwitterMarketing />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route
          path="/linkedin-marketing"
          element={<LinkedinMarketing />}
        ></Route>
        <Route
          path="/pinterest-marketing"
          element={<PinterestMarketing />}
        ></Route>
        <Route path="/amazon-marketing" element={<AmazonMarketing />}></Route>
        <Route
          path="/seo-content-writing"
          element={<SeoContentWriting />}
        ></Route>
        <Route path="/article-writing" element={<ArticleWriting />}></Route>
        <Route path="/blog-writing" element={<BlogWriting />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/email-marketing" element={<EmailMarketing />}></Route>
        <Route path="/guest-marketing" element={<GuestBlogging />}></Route>
        <Route
          path="/web-design-packages"
          element={<WebDesignPackages />}
        ></Route>
        <Route path="/b2b-web-design" element={<B2BWebDesign />}></Route>
        <Route path="/b2c-web-design" element={<B2CWebDesign />}></Route>
        <Route
          path="/ecommerce-web-design"
          element={<EcommerceWebDesign />}
        ></Route>
        <Route
          path="/wordpress-web-design"
          element={<WordPressWebDesign />}
        ></Route>
        <Route
          path="/responsive-web-design"
          element={<ResponsiveWebDesign />}
        ></Route>
        <Route
          path="/landing-page-design"
          element={<LandingPageDesign />}
        ></Route>
        <Route
          path="/website-maintenance"
          element={<WebsiteMaintenance />}
        ></Route>
        
        <Route
          path="/website-optimization"
          element={<WebsiteOptimization />}
        ></Route>
        <Route
          path="*"
          element={<NotFound />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
