import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid'; // Обновленный компонент
import CallToAction from './components/CallToAction'; // Обновленный компонент
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        {/* Блок статистики удален по запросу */}
        <ServicesGrid />
        <CallToAction />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
