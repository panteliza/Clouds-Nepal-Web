import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';

import BackendDevelopmentCourse from './pages/BackendDevelopmentCourse';
import FullStackDevelopmentCourse from './pages/FullStackDevelopmentCourse';
import FrontendDevelopmentCourse from './pages/FrontendDevelopmentCourse';
import WebsiteDevelopmentService from './pages/WebsiteDevelopmentService';



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
         
          {/* Services Page */}
          <Route path="/website-development" element={<WebsiteDevelopmentService />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;