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

          <Route path="/c-cpp-training" element={<CCppCourse />} />
          <Route path="/react-native-training" element={<ReactNativeAppDevelopmentCourse />} />
         
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