import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

import HomePage from './pages/HomePage';
import { CertificationPage } from './pages/CertificationPage'; 
import { ExpertisePage } from './pages/ExpertisePage';
import { VedPage } from './pages/VedPage';
import { ConstructionPage } from './pages/ConstructionPage';
import { CustomsPage } from './pages/CustomsPage';
import { LegalServicesPage } from './pages/LegalServicesPage';
import { EventsPage } from './pages/EventsPage';
import { AllServicesPage } from './pages/AllServicesPage';
import MembershipPage from './pages/MembershipPage';
import KnowledgePage from './pages/KnowledgePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ApecCardPage from './pages/ApecCardPage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/ved" element={<VedPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/news" element={<NewsPage />} /> 
          <Route path="/news/:id" element={<ArticleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Услуги */}
          <Route path="/services/cert" element={<CertificationPage />} />
          <Route path="/services/expert" element={<ExpertisePage />} />
          <Route path="/services/construction" element={<ConstructionPage />} />
          <Route path="/services/customs" element={<CustomsPage />} />
          <Route path="/services/law" element={<LegalServicesPage />} />
          <Route path="/services/events" element={<EventsPage />} /> 
          <Route path="/services/apec" element={<ApecCardPage />} />

          {/* Заглушки для оставшихся разделов */}
          <Route path="/members" element={<div className="pt-32 px-6">Реестр членов в разработке</div>} />
          <Route path="/committees" element={<div className="pt-32 px-6">Комитеты в разработке</div>} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
