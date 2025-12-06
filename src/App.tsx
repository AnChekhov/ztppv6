import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Убедитесь, что файлы лежат именно по этому пути: src/components/ИмяФайла.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import CallToAction from './components/CallToAction';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesGrid />
      <CallToAction />
      <NewsSection />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<div className="max-w-7xl mx-auto p-10 pt-32"><h1 className="text-3xl font-bold">Раздел Услуг</h1><p>В разработке...</p></div>} />
          <Route path="/news" element={<div className="max-w-7xl mx-auto p-10 pt-32"><h1 className="text-3xl font-bold">Новости</h1><p>В разработке...</p></div>} />
          <Route path="/join" element={<div className="max-w-7xl mx-auto p-10 pt-32"><h1 className="text-3xl font-bold">Вступление</h1><p>В разработке...</p></div>} />
          <Route path="/ved" element={<div className="max-w-7xl mx-auto p-10 pt-32"><h1 className="text-3xl font-bold">ВЭД</h1><p>В разработке...</p></div>} />
          <Route path="/membership" element={<div className="max-w-7xl mx-auto p-10 pt-32"><h1 className="text-3xl font-bold">Членство</h1><p>В разработке...</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
