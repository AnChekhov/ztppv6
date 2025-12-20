import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Импорт компонентов главной страницы
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import CallToAction from './components/CallToAction';
import NewsSection from './components/NewsSection';
import SeoTextSection from './components/SeoTextSection';
import Footer from './components/Footer';

// Импорт страниц услуг
import CertificationPage from './pages/CertificationPage'; 
import ExpertisePage from './pages/ExpertisePage';
// ✅ Импорт новых страниц
import VedPage from './pages/VedPage';
import ConstructionPage from './pages/ConstructionPage';
import CustomsPage from './pages/CustomsPage';
import LegalServicesPage from './pages/LegalServicesPage'; // Юристы
import EventsPage from './pages/EventsPage'; // Мероприятия

// 1. КОМПОНЕНТ: Прокрутка наверх при переходе
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 2. КОМПОНЕНТ: Универсальная страница-заглушка
interface PlaceholderProps {
  title: string;
  description?: string;
}

const PagePlaceholder: React.FC<PlaceholderProps> = ({ title, description }) => (
  <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-[60vh]">
    <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
      Раздел в разработке
    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
      {title}
    </h1>
    <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-yellow-500 pl-6">
      {description || "Мы работаем над наполнением этого раздела. Актуальную информацию вы можете получить по телефону +7 (3022) 12-34-56."}
    </p>
  </div>
);

// 3. КОМПОНЕНТ: Главная страница
const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CallToAction />
      <NewsSection />
      <SeoTextSection />
    </>
  );
};

// 4. ОСНОВНОЕ ПРИЛОЖЕНИЕ
const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          {/* ГЛАВНАЯ СТРАНИЦА */}
          <Route path="/" element={<HomePage />} />

          {/* ОСНОВНЫЕ РАЗДЕЛЫ */}
          <Route path="/services" element={<PagePlaceholder title="Каталог услуг" description="Полный перечень услуг для бизнеса." />} />
          <Route path="/membership" element={<PagePlaceholder title="Членство в Союзе" description="Как вступить в ТПП, преимущества и реестр членов." />} />
          <Route path="/ved" element={<VedPage />} /> {/* ✅ ВЭД */}
          
          {/* ✅ МЕРОПРИЯТИЯ: Ссылка может быть /news или /events. 
             В шапке ссылка на /news. Давайте подключим EventsPage туда. */}
          <Route path="/news" element={<EventsPage />} /> 

          {/* СТРАНИЦЫ УСЛУГ */}
          <Route path="/services/cert" element={<CertificationPage />} />
          <Route path="/services/expert" element={<ExpertisePage />} />
          <Route path="/services/construction" element={<ConstructionPage />} />
          <Route path="/services/customs" element={<CustomsPage />} />
          <Route path="/services/law" element={<LegalServicesPage />} /> {/* ✅ Юристы */}

          {/* СЛУЖЕБНЫЕ */}
          <Route path="/about" element={<PagePlaceholder title="Об организации" description="История Палаты, руководство и документы." />} />
          <Route path="/members" element={<PagePlaceholder title="Реестр членов" description="Список компаний, входящих в Союз «ТПП Забайкальского края»." />} />
          <Route path="/committees" element={<PagePlaceholder title="Комитеты и комиссии" description="Отраслевые объединения для решения системных проблем бизнеса." />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
