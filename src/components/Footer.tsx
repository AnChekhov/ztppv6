import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-12">
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
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Контакты</h4>
          <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                  <div className="min-w-[20px] pt-1 text-tpp-primary group-hover:text-white transition-colors"><Globe size={18} /></div>
                  <span>672000, г. Чита,<br/> ул. Шилова, 100</span>
              </li>
              <li className="flex items-center gap-3 group">
                  <Phone size={18} className="text-tpp-primary group-hover:text-white transition-colors" />
                  <span>+7 (3022) 12-34-56</span>
              </li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Навигация</h4>
           <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Об организации</Link></li>
              <li><Link to="/members" className="hover:text-white transition-colors">Реестр членов</Link></li>
              <li><Link to="/committees" className="hover:text-white transition-colors">Комитеты</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Услуги</h4>
           <ul className="space-y-2 text-sm">
              <li><Link to="/services/cert" className="hover:text-white transition-colors">Сертификация</Link></li>
              <li><Link to="/services/expert" className="hover:text-white transition-colors">Товарная экспертиза</Link></li>
              <li><Link to="/services/law" className="hover:text-white transition-colors">Юридические услуги</Link></li>
           </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-xs text-slate-500">
          <p>© 2025 Союз «Торгово-промышленная палата Забайкальского края».</p>
          <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300">Политика конфиденциальности</a>
              <a href="#" className="hover:text-slate-300">Карта сайта</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
