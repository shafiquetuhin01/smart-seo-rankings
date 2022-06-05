import React from "react";

import { Route, Routes } from "react-router-dom";
import SeoServices from "./pages/SeoServices/SeoServices";
import PaidMarketing from "./pages/PaidMarketing/PaidMarketing";
import ContentMarketing from "./pages/ContentMarketing/ContentMarketing";
import WebDesignAndDev from "./pages/WebDesignAndDev/WebDesignAndDev";
import NavbarTop from "./components/NavbarTop";
import Navbar from "./components/Navbar";
import InternetMarketing from "./pages/InternetMarketing";
import GoogleAdsMarketing from "./subPages1/GoogleAdsMarketing";
import FacebookAdvertising from "./subPages1/FacebookAdvertising";
import InstagramMarketing from "./subPages1/InstagramMarketing";
import YoutubeAdvertising from "./subPages1/YoutubeAdvertising";
import TwitterMarketing from "./subPages1/TwitterMarketing";
import LinkedinMarketing from "./subPages1/LinkedinMarketing";
import PinterestMarketing from "./subPages1/PinterestMarketing";
import AmazonMarketing from "./subPages1/AmazonMarketing";

const App = () => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path="/seo-services" element={<SeoServices />}></Route>
        <Route path="/internet-marketing" element={<InternetMarketing />}></Route>
        <Route path="/paid-marketing" element={<PaidMarketing />}></Route>
        <Route path="/content-marketing" element={<ContentMarketing />}></Route>
        <Route path="/google-ads-marketing" element={<GoogleAdsMarketing />}></Route>
        <Route path="/facebook-ads" element={<FacebookAdvertising />}></Route>
        <Route path="/instagram-marketing" element={<InstagramMarketing />}></Route>
        <Route path="/youtube-ads" element={<YoutubeAdvertising />}></Route>
        <Route path="/twitter-marketing" element={<TwitterMarketing />}></Route>
        <Route path="/linkedin-marketing" element={<LinkedinMarketing />}></Route>
        <Route path="/pinterest-marketing" element={<PinterestMarketing />}></Route>
        <Route path="/amazon-marketing" element={<AmazonMarketing />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
        <Route path="/web-design" element={<WebDesignAndDev />}></Route>
      </Routes>
    </>
  );
};

export default App;
