import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutCarbonCrePage from './pages/AboutCarbonCrePage';
import PageNotFound from './components/PageNotFound';
import AboutusPage from './pages/AboutusPage';
import InsightPage from './pages/InsightPage';
import Bookconsultant from './pages/BookConsultant';
import FAQpage from './pages/FAQpage';
import BlogOpenPage from './pages/BlogOpenPage'
import TermsAndConditionPage from './pages/TermsAndConditionPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';


const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutusPage />} />
      <Route path="/aboutcarboncredit" element={<AboutCarbonCrePage />} />
      <Route path="/getintouch" element={<Bookconsultant />} />
      <Route path="/insights" element={<InsightPage/>}/>
      <Route path="/blog" element={<BlogOpenPage/>} />
      <Route path="/faqs" element={<FAQpage/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/privacypolicy" element={<PrivacyPolicyPage/>} />
      <Route path="/termsandcondition" element={<TermsAndConditionPage/>} />
    </Routes>
  </Router>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);
  


