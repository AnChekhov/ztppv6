import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* 1. ЛОГОТИП И НАЗВАНИЕ */}
        <Link to="/" className="flex items-center gap-4 group shrink-0">
           <img 
             src="images/logo-TPP-indigo.png" 
             alt="ТПП Забайкальского края" 
             className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
           />
           <div className="hidden md:flex flex-col justify-center ml-2">
             <span className="text-sm font-extrabold text-slate-900 leading-tight max-w-[220px] uppercase">
               Торгово-промышленная палата <br/>
               <span className="text-blue-700">Забайкальского края</span>
             </span>
           </div>
        </Link>
        
        {/* 2. НАВИГАЦИЯ */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-bold text-slate-600">
            <Link to="/" className="hover:text-blue-700 transition-colors duration-200">Услуги</Link>
            <Link to="/membership" className="hover:text-blue-700 transition-colors duration-200">Членство</Link>
            <Link to="/ved" className="hover:text-blue-700 transition-colors duration-200">ВЭД и Китай</Link>
            <Link to="/news" className="hover:text-blue-700 transition-colors duration-200">Пресс-центр</Link>
        </nav>
          
        {/* 3. КОНТАКТЫ И КНОПКА */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right hidden xl:block">
             <a href="tel:+73022123456" className="block text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
               +7 (3022) 12-34-56
             </a>
             <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">пн-пт 9:00 - 18:00</span>
          </div>

          {/* Кнопка - Amber/Yellow Accent */}
          <Button variant="lime" className="!rounded-lg shadow-md px-6 py-2.5 text-sm font-bold bg-yellow-500 text-slate-900 hover:bg-yellow-400 hover:-translate-y-0.5 transition-all">
              Вступить в палату
          </Button>
        </div>

        {/* Мобильное меню */}
        <button className="lg:hidden text-slate-900 hover:text-blue-700 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Выпадающее меню (Мобильное) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          <Link to="/" className="text-lg font-semibold py-2 text-slate-800 hover:text-blue-700">Услуги</Link>
          <Link to="/membership" className="text-lg font-semibold py-2 text-slate-800 hover:text-blue-700">Членство</Link>
          <Link to="/ved" className="text-lg font-semibold py-2 text-slate-800 hover:text-blue-700">ВЭД и Китай</Link>
          <hr className="border-slate-100"/>
          <div className="py-2">
              <div className="font-bold text-slate-900">+7 (3022) 12-34-56</div>
              <div className="text-xs text-slate-500">пн-пт 9:00 - 18:00</div>
          </div>
          <Button variant="lime" className="w-full justify-center !rounded-lg font-bold">Вступить в палату</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
