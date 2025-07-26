import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth.jsx';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import JobsPage from '@/pages/JobsPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import BlogsPage from '@/pages/BlogsPage';
import CookiePolicyPage from '@/pages/CookiePolicyPage';
import NotFoundPage from '@/pages/NotFoundPage';

import TalentServicesPage from '@/pages/services/TalentServicesPage';
import HireTrainDeployPage from '@/pages/services/HireTrainDeployPage';
import MicrosoftServicesPage from '@/pages/services/MicrosoftServicesPage';
import AiPage from '@/pages/services/AiPage';
import AnalyticsBiPage from '@/pages/services/AnalyticsBiPage';
import CyberSecurityPage from '@/pages/services/CyberSecurityPage';
import ExclusiveSearchPage from '@/pages/services/ExclusiveSearchPage';

import ContractPlacementsPage from '@/pages/training/ContractPlacementsPage';
import PermanentPlacementsPage from '@/pages/training/PermanentPlacementsPage';
import ProjectConsultingPage from '@/pages/training/ProjectConsultingPage';

function App() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Clarifox - Premier IT & Staffing Solutions</title>
        <meta name="description" content="Clarifox delivers top-tier IT and staffing solutions, including talent services, corporate training, and cutting-edge technology consulting in AI, Cybersecurity, and more." />
        <meta name="keywords" content="IT staffing, IT solutions, corporate training, talent services, AI, cybersecurity, Microsoft services, Clarifox" />
        <meta name="author" content="Clarifox Solutions" />
        <meta property="og:title" content="Clarifox - Premier IT & Staffing Solutions" />
        <meta property="og:description" content="Partner with Clarifox for innovative IT staffing, training, and technology services to accelerate your business growth." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://clarifox.com" />
      </Helmet>
      
      <ScrollToTop />
      <Navigation />
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />

          {/* Main Services */}
          <Route path="/talent-services" element={<TalentServicesPage />} />
          <Route path="/hire-train-deploy" element={<HireTrainDeployPage />} />
          <Route path="/microsoft-services" element={<MicrosoftServicesPage />} />
          <Route path="/artificial-intelligence" element={<AiPage />} />
          <Route path="/analytics-bi" element={<AnalyticsBiPage />} />
          <Route path="/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/exclusive-search" element={<ExclusiveSearchPage />} />

          {/* Training Solutions */}
          <Route path="/training/contract-placements" element={<ContractPlacementsPage />} />
          <Route path="/training/permanent-placements" element={<PermanentPlacementsPage />} />
          <Route path="/training/project-consulting" element={<ProjectConsultingPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </AuthProvider>
  );
}

export default App;