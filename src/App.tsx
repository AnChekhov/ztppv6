import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Globe, Shield, Award, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/Button';

// Layout компонент (Шапка и Подвал)
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header: Dark Slate Background */}
      <header className="fixed w-full z-50 bg-tpp-dark/95 backdrop-blur border-b border-slate-800 text-white">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            ZAB<span className="text-tpp-primary">TPP</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-tpp-primary transition-colors">О Палате</Link>
            <Link to="/services" className="hover:text-tpp-primary transition-colors">Услуги</Link>
            <Link to="/news" className="hover:text-tpp-primary transition-colors">Новости</Link>
            <Button variant="lime" to="/join">Вступить</Button>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-tpp-dark border-b border-slate-800 p-4 flex flex-col gap-4 shadow-2xl">
            <Link to="/" className="text-lg py-2 hover:text-tpp-primary">О Палате</Link>
            <Link to="/services" className="text-lg py-2 hover:text-tpp-primary">Услуги</Link>
            <Button variant="lime" className="w-full">Вступить</Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-tpp-dark text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-white font-bold">Торгово-промышленная палата Забайкальского края</p>
          <p>© 2025 ZTPP v6. Cyber-Industrial Edition.</p>
        </div>
      </footer>
    </div>
  );
};

// Главная страница
const HomePage = () => {
  return (
    <>
      {/* Hero Section: Dark Theme + Lime Accents */}
      <section className="relative bg-tpp-dark text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-tpp-primary text-tpp-primary text-sm font-bold mb-6 tracking-wide uppercase">
            Стратегия 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Бизнес-навигация <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tpp-primary to-cyan-400">
              Забайкалья
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Цифровая платформа для экспортеров, производителей и предпринимателей региона.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="lime">Стать партнером</Button>
            <Button variant="outline">Наши услуги</Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-tpp-dark mb-12 text-center">Ключевые направления</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-tpp-primary group-hover:text-tpp-dark transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">ВЭД и Китай</h3>
              <p className="text-slate-600 mb-6">Поиск партнеров, организация бизнес-миссий и таможенное консультирование.</p>
              <Link to="/services" className="text-tpp-secondary font-bold flex items-center gap-2 group-hover:text-cyan-700">
                Подробнее <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 - Highlighted (Cyber Style) */}
            <div className="p-8 rounded-2xl bg-tpp-dark text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-tpp-primary/10 rounded-full blur-3xl"></div>
              <div className="w-12 h-12 rounded-full bg-tpp-primary flex items-center justify-center mb-6 text-tpp-dark">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Сертификация</h3>
              <p className="text-slate-300 mb-6">Экспертиза происхождения товаров, выдача сертификатов СТ-1.</p>
              <Button variant="lime" className="w-full">Заказать услугу</Button>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-tpp-primary group-hover:text-tpp-dark transition-colors">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Защита бизнеса</h3>
              <p className="text-slate-600 mb-6">Юридическая поддержка, медиация и арбитраж для членов палаты.</p>
              <Link to="/services" className="text-tpp-secondary font-bold flex items-center gap-2 group-hover:text-cyan-700">
                Подробнее <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">Раздел Услуг (В разработке)</h1></div>} />
        <Route path="/news" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">Новости (В разработке)</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
