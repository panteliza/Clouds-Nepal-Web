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
import ApplicationDevelopmentService from './pages/ApplicationDevelopmentService';
import MobileAppDevelopmentService from './pages/MobileAppDevelopmentService';
import EnterpriseSoftwareService from './pages/EnterpriseSoftwareService';
import CloudConsultingService from './pages/CloudConsultingService';
import MaintenanceSupportService from './pages/MaintenanceSupportService';
import CrmHrPayrollService from './pages/CrmHrPayrollService';
import AccountingBillingService from './pages/AccountingBillingService';
import InvoicingPaymentService from './pages/InvoicingPaymentService';
import PosImsErpService from './pages/PosImsErpService';
import SeoSemPpcService from './pages/SeoSemPpcService';
import MarketingAutomationService from './pages/MarketingAutomationService';
import MeanStackCourse from './pages/MeanStackCourse';
import DigitalMarketingCourse from './pages/DigitalMarketingCourse';
import PythonDjangoCourse from './pages/PythonDjangoCourse';
import UIUXDesignCourse from './pages/UIUXDesignCourse';
import QATrainingCourse from './pages/QATrainingCourse';
import EthicalHackingCourse from './pages/EthicalHackingCourse';
import BusinessAnalysisCourse from './pages/BusinessAnalysisCourse';
import FlutterTrainingCourse from './pages/FlutterTrainingCourse';
import ReactNativeAppDevelopmentCourse from './pages/ReactNativeAppDevelopmentCourse';
import PythonAiTrainingCourse from './pages/PythonAiTrainingCourse';
import CCppCourse from './pages/CCppCourse';
import DataScienceWithPythonCourse from './pages/DataScienceWithPythonCourse';
import ASPNetCoreTrainingCourse from './pages/ASPNetCoreTrainingCourse';
import ReactJSTrainingCourse from './pages/ReactJSTrainingCourse';
import VideoEditingTrainingCourse from './pages/VideoEditingTrainingCourse';
import AWSSolutionsArchitectureTraining from './pages/AWSSolutionsArchitectureTraining';
import MachineLearningPythonTraining from './pages/MachineLearningPythonTraining';

import DevOpsTrainingCourse from './pages/DevOpsTrainingCourse';
import PHPTrainingCourse from './pages/PHPTrainingCourse';
import PythonTrainingCourse from './pages/PythonTrainingCourse';
import ServicesComponent from './components/ServicesComponent';
import SEOTrainingCourse from './pages/SEOTrainingCourse';
import SEOADVANCEDTrainingCourse from './pages/SEOADVANCEDTrainingCourse';
import NodeJSTrainingCourse from './pages/NodeJSTrainingCourse';
import ExpressJsTrainingCourse from './pages/ExpressJsTrainingCourse';
import AboutCloudsNepal from './pages/AboutCloudsNepal';
import CloudsContactUsPage from './pages/CloudsContactUsPage';
import StudentTestimonialsPage from './pages/StudentTestimonialsPage';
import OurMission from './pages/OurMission';
import OurVission from './pages/OurVission';




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
          <Route path="/about" element={<AboutCloudsNepal />} />
          <Route path="/contact-us" element={<CloudsContactUsPage />} />
          <Route path="/testimonials" element={<StudentTestimonialsPage />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/vision" element={<OurVission/>} />
         {/* Courses */}
          <Route path="/frontend-development" element={<FrontendDevelopmentCourse />} />
          <Route path="/backend-development" element={<BackendDevelopmentCourse />} />
          <Route path="/fullstack-development" element={<FullStackDevelopmentCourse />} />
          <Route path="/mean-stack" element={<MeanStackCourse />} />
          <Route path="/digital-marketing" element={<DigitalMarketingCourse />} />
          <Route path="/python-django" element={<PythonDjangoCourse />} />
          <Route path="/uiux-design" element={<UIUXDesignCourse />} />
          <Route path="/qa-training" element={<QATrainingCourse />} />
          <Route path="/ethical-hacking" element={<EthicalHackingCourse />} />
          <Route path="/business-analysis" element={<BusinessAnalysisCourse />} />
          <Route path="/flutter-training" element={<FlutterTrainingCourse />} />
          <Route path="/python-ai-training" element={<PythonAiTrainingCourse />} />
          <Route path="/data-science-python" element={<DataScienceWithPythonCourse />} />
          <Route path="/react-native-training" element={<ReactNativeAppDevelopmentCourse />} />
          <Route path="/c-cpp-training" element={<CCppCourse />} />
          <Route path="/aspnet-core" element={<ASPNetCoreTrainingCourse />} />
          <Route path="/reactjs-training" element={<ReactJSTrainingCourse />} />
          <Route path="/video-editing" element={<VideoEditingTrainingCourse />} />
          <Route path="/aws-training" element={<AWSSolutionsArchitectureTraining />} />
          <Route path="/ml-python" element={<MachineLearningPythonTraining />} />
          <Route path="/devops-training" element={<DevOpsTrainingCourse />} />
          <Route path="/php-training" element={<PHPTrainingCourse />} />
          <Route path="/python-training" element={<PythonTrainingCourse />} />
          <Route path="/seo-basic" element={<SEOTrainingCourse />} />
          <Route path="/seo-advanced" element={<SEOADVANCEDTrainingCourse />} />
          <Route path="/nodejs-training" element={<NodeJSTrainingCourse />} />
          <Route path="/expressjs-training" element={<ExpressJsTrainingCourse />} />
          

         
         
          {/* Services Page */}
          <Route path="/website-development" element={<WebsiteDevelopmentService />} />
          <Route path="/seo-sem-ppc" element={<SeoSemPpcService />} />
          <Route path="/marketing-automation" element={<MarketingAutomationService />} />
          <Route path="/pos-ims-erp" element={<PosImsErpService />} />
          <Route path="/invoicing-payment" element={<InvoicingPaymentService />} />
          <Route path="/accounting-billing" element={<AccountingBillingService />} />
          <Route path="/crm-hr-payroll" element={<CrmHrPayrollService />} />
          <Route path="/cloud-it-consulting" element={<CloudConsultingService />} />
          <Route path="/maintenance-support" element={<MaintenanceSupportService />} />
          <Route path="/enterprise-software" element={<EnterpriseSoftwareService />} />
          <Route path="/application-development" element={<ApplicationDevelopmentService />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopmentService />} />
            <Route path="/website-development" element={<WebsiteDevelopmentService />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;