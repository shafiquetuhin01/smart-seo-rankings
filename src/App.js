import React from 'react';
import NavbarTop from './components/NavbarTop';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SeoServices from './pages/SeoServices/SeoServices';
import PaidMarketing from './pages/PaidMarketing/PaidMarketing';
import ContentMarketing from './pages/ContentMarketing/ContentMarketing';
import WebDesignAndDev from './pages/WebDesignAndDev/WebDesignAndDev';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<SeoServices />}></Route>
          <Route path='/paid' element={<PaidMarketing />}></Route>
          <Route path='/content' element={<ContentMarketing />}></Route>
          <Route path='/webdesign' element={<WebDesignAndDev />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;