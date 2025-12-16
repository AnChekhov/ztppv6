import React from 'react';
import { Link } from 'react-router-dom';
// Добавил MapPin (вместо Globe для адреса) и Mail для почты
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-12">
        
        {/* 1. Логотип и описание */}
        <div>
          <div className="flex items-center gap-3 mb-6">
              <img src="images/logo-TPP-white.png" alt="Logo" className="h-10 w-auto opacity-90" />
              <div className="text-sm font-bold leading-tight text-white">
                  Торгово-промышленная<br/>палата<br/>Забайкальского края
              </div>
          </div>
          <p className="text-sm mb-4 leading-relaxed text-slate-400">
            Союз предпринимателей, работающий на благо развития экономики региона с 1994 года.
          </p>
        </div>
        
        {/* 2. Контакты (Обновлено) */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Контакты</h4>
          <ul className="space-y-4 text-sm text-slate-400">
              {/* Адрес */}
              <li className="flex items-start gap-3">
                  <div className="min-w-[20px] pt-1 text-yellow-500"><MapPin size={18} /></div>
                  <span>
                    672000, г. Чита, ул. Бутина, 111,<br/>
                    2 этаж, пом. 6
                  </span>
              </li>
              
              {/* Телефон */}
              <li className="flex items-center gap-3">
                  <Phone size={18} className="text-yellow-500" />
                  <a href="tel:+79243733330" className="hover:text-yellow-500 transition">
                    +7 (924) 373-33-30
                  </a>
              </li>

              {/* Почта (Новая) */}
              <li className="flex items-center gap-3">
                  <Mail size={18} className="text-yellow-500" />
                  <a href="mailto:info@zabtpp.ru" className="hover:text-yellow-500 transition">
                    info@zabtpp.ru
                  </a>
              </li>
          </ul>
        </div>

        {/* 3. Навигация */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Навигация</h4>
           <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-yellow-500 transition">Об организации</Link></li>
              <li><Link to="/members" className="hover:text-yellow-500 transition">Реестр членов</Link></li>
              <li><Link to="/committees" className="hover:text-yellow-500 transition">Комитеты</Link></li>
           </ul>
        </div>

        {/* 4. Услуги */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Услуги</h4>
           <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services/cert" className="hover:text-yellow-500 transition">Сертификация</Link></li>
              <li><Link to="/services/expert" className="hover:text-yellow-500 transition">Товарная экспертиза</Link></li>
              <li><Link to="/services/law" className="hover:text-yellow-500 transition">Юридические услуги</Link></li>
           </ul>
        </div>
      </div>

      {/* Копирайт */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-xs text-slate-500">
          <p>© 2025 Союз «Торгово-промышленная палата Забайкальского края».</p>
          <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Карта сайта</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
