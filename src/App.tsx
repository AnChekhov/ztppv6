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
          
          {/* LOGO & TITLE SECTION */}
          <div className="flex items-center">
             <Link to="/" className="flex items-center gap-3 group">
                {/* Логотип */}
                <img 
                  src="images/logo-TPP-white.png" 
                  alt="ТПП Забайкальского края" 
                  className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" 
                />
                
                {/* Текст названия */}
                <div className="flex flex-col justify-center">
                  <span className="text-xs md:text-sm font-bold leading-tight text-white max-w-[160px] md:max-w-none">
                    Торгово-промышленная палата Забайкальского края
                  </span>
                </div>
             </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="hover:text-tpp-primary transition-colors text-sm font-semibold">О Палате</Link>
            <Link to="/services" className="hover:text-tpp-primary transition-colors text-sm font-semibold">Услуги</Link>
            <Link to="/news" className="hover:text-tpp-primary transition-colors text-sm font-semibold">Новости</Link>
            <Button variant="lime" to="/join" className="text-sm px-5 py-2">Вступить</Button>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-tpp-dark border-b border-slate-800 p-4 flex flex-col gap-4 shadow-2xl">
            <Link to="/" className="text-lg py-2 hover:text-tpp-primary font-semibold">О Палате</Link>
            <Link to="/services" className="text-
