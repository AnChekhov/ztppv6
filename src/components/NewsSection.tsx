import React from 'react';
import { ArrowRight } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-12">
              <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Новости и События</h2>
                  <p className="text-slate-500">Будьте в курсе деловой жизни региона</p>
              </div>
              <a href="#" className="text-blue-600 font-bold hover:text-blue-800 transition hidden md:block">Все новости</a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              {/* News 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-900 uppercase tracking-wide">Законодательство</span>
                  </div>
                  <div className="p-6">
                      <div className="text-xs text-slate-400 mb-3 font-medium">24 Окт 2025</div>
                      <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">Изменения в таможенном кодексе: что нужно знать экспортерам в 2024 году</h3>
                      <span className="text-sm font-bold text-blue-600 flex items-center mt-4 group-hover:gap-2 transition-all">Читать далее <ArrowRight size={14} className="ml-1"/></span>
                  </div>
              </div>
              
              {/* News 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e3169?q=80&w=2000&auto=format&fit=crop" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-900 uppercase tracking-wide">Мероприятия</span>
                  </div>
                  <div className="p-6">
                      <div className="text-xs text-slate-400 mb-3 font-medium">22 Окт 2025</div>
                      <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">Итоги бизнес-миссии в Маньчжурию: подписано 5 новых контрактов</h3>
                      <span className="text-sm font-bold text-blue-600 flex items-center mt-4 group-hover:gap-2 transition-all">Читать далее <ArrowRight size={14} className="ml-1"/></span>
                  </div>
              </div>

              {/* News 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-900 uppercase tracking-wide">Обучение</span>
                  </div>
                  <div className="p-6">
                      <div className="text-xs text-slate-400 mb-3 font-medium">18 Окт 2025</div>
                      <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">Семинар: «Маркировка товаров легкой промышленности». Регистрация открыта</h3>
                      <span className="text-sm font-bold text-blue-600 flex items-center mt-4 group-hover:gap-2 transition-all">Читать далее <ArrowRight size={14} className="ml-1"/></span>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default NewsSection;
