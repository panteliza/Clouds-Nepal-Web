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
import FrontendDevelopmentCourse from './pages/FrontendDevelopmentCourse';
import BackendDevelopmentCourse from './pages/BackendDevelopmentCourse';
import FullStackDevelopmentCourse from './pages/FullStackDevelopmentCourse';



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
         
          <Route path="/frontend-development" element={<FrontendDevelopmentCourse />} />
          <Route path="/backend-development" element={<BackendDevelopmentCourse />} />
          <Route path="/fullstack-development" element={<FullStackDevelopmentCourse />} />
         
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;