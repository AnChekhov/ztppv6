import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Логотип - выполняет роль кнопки "Главная" */}
          <Link to="/" className="flex items-center gap-4 px-5 py-3 bg-slate-900 rounded-xl transition-transform hover:scale-[1.02] group shadow-sm">
            <img 
              src="/ztppv6/images/logo-TPP-white.png" 
              alt="Logo ZTPP" 
              className="w-8 h-auto opacity-90 group-hover:opacity-100 transition-opacity" 
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest text-white uppercase leading-tight">
                Торгово-промышленная
              </span>
              <span className="text-[10px] font-bold tracking-widest text-white uppercase leading-tight">
                палата
              </span>
              <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-widest leading-tight">
                Забайкальского края
              </span>
            </div>
          </Link>

          {/* НАВИГАЦИЯ (Новая структура) */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/services" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Услуги</Link>
            <Link to="/membership" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Членство</Link>
            <Link to="/ved" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">ВЭД и Китай</Link>
            <Link to="/knowledge" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">База знаний</Link>
            <Link to="/news" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Новости</Link>
            <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">О палате</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <a href="tel:+79243733330" className="block text-slate-900 font-bold hover:text-blue-700 transition-colors">
                +7 (924) 373-33-30
              </a>
              <a href="mailto:info@zabtpp.ru" className="text-xs text-slate-500 hover:text-yellow-600 transition-colors flex items-center justify-end gap-1">
                info@zabtpp.ru
              </a>
            </div>
            <Link to="/membership">
              <Button variant="lime" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold shadow-md">
                Вступить в палату
              </Button>
            </Link>
          </div>

          <button 
            className="lg:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl lg:hidden flex flex-col p-6 gap-4">
          <Link to="/services" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Услуги</Link>
          <Link to="/membership" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Членство</Link>
          <Link to="/ved" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>ВЭД и Китай</Link>
          <Link to="/knowledge" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>База знаний</Link>
          <Link to="/news" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Новости</Link>
          <Link to="/about" className="text-lg font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>О палате</Link>
          
          <hr className="border-slate-100 my-2" />
          
          <div className="flex flex-col gap-3">
             <a href="tel:+79243733330" className="flex items-center gap-2 text-slate-900 font-bold">
               <Phone size={18} className="text-yellow-500" /> +7 (924) 373-33-30
             </a>
             <a href="mailto:info@zabtpp.ru" className="flex items-center gap-2 text-slate-600">
               <Mail size={18} className="text-yellow-500" /> info@zabtpp.ru
             </a>
          </div>
          
          <Link to="/membership" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="lime" className="bg-yellow-400 text-slate-900 w-full justify-center font-bold">
              Вступить в палату
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
