import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Globe, 
  MessageCircle, Facebook, Instagram, Send, Building
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. ОБ ОРГАНИЗАЦИИ */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/ztppv6/images/logo-TPP-white.png" alt="ZTPP" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest uppercase">Торгово-промышленная палата</span>
                <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest">Забайкальского края</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Официальное бизнес-сообщество региона. Поддержка предпринимательства, экспертиза и развитие ВЭД.
            </p>
            <div className="text-[10px] text-slate-500 space-y-1">
              <p>ИНН: 7536034170</p>
              <p>ОГРН: 1027501148419</p>
              <p>Приказ ТПП РФ №14 от 28.12.2023</p>
            </div>
          </div>

          {/* 2. НАВИГАЦИЯ */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Навигация</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Услуги бизнесу</Link></li>
              <li><Link to="/membership" className="hover:text-yellow-400 transition-colors">Как вступить в Палату</Link></li>
              <li><Link to="/ved" className="hover:text-yellow-400 transition-colors">Работа с Китаем</Link></li>
              <li><Link to="/knowledge" className="hover:text-yellow-400 transition-colors">База знаний и статьи</Link></li>
              <li><Link to="/news" className="hover:text-yellow-400 transition-colors">Новости и анонсы</Link></li>
            </ul>
          </div>

          {/* 3. ДОКУМЕНТЫ И ПОДДЕРЖКА */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Инфо-центр</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Официальные документы</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">Устав и реквизиты</Link></li>
              <li><Link to="/services/events" className="hover:text-yellow-400 transition-colors">Конференц-сервис</Link></li>
              <li><Link to="/committees" className="hover:text-yellow-400 transition-colors">Отраслевые комитеты</Link></li>
            </ul>
          </div>

          {/* 4. КОНТАКТЫ */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <p className="text-slate-400 text-sm">672000, г. Чита, ул. Бутина, 111, 2 этаж</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <a href="tel:+79243733330" className="text-white font-bold hover:text-yellow-400 transition-colors">+7 (924) 373-33-30</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <a href="mailto:info@zabtpp.ru" className="text-slate-400 text-sm hover:text-white transition-colors">info@zabtpp.ru</a>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://t.me/chitatpp" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all">
                  <Send size={18} />
                </a>
                <a href="https://vk.com/zabtpp" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-all text-sm font-bold">
                  VK
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>© 2025 Союз «Забайкальская торгово-промышленная палата»</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/services" className="hover:text-white transition-colors">Карта сайта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
