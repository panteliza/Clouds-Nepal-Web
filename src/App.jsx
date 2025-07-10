import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import DigitalMarketing from './pages/DigitalMarketing';
import PayPerClick from './pages/PayPerClick';
import ContentWriting from './pages/ContentWriting';
import GraphicDesign from './pages/GraphicDesign';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import Seo from './pages/Seo';
import UIUX from './pages/UIUX';
import SystemSoftware from './pages/SystemSoftware';
import AppDevelopment from './pages/AppDevelopment';
import WebsiteDevelopment from './pages/WebsiteDevelopment';



const App = () => {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <FloatingButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/ppc" element={<PayPerClick />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/smm" element={<SocialMediaMarketing />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/ui-ux" element={<UIUX />} />
          <Route path="/system-development" element={<SystemSoftware />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
         
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;