import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const ExpertiseContacts: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Эксперты Палаты</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-6 bg-white p-6 rounded-2xl w-full md:w-auto md:min-w-[400px] shadow-sm hover:shadow-md transition-all">
            <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-slate-100">
                <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-2xl font-bold">Э</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Экспертный отдел</h3>
              <p className="text-blue-600 font-medium text-sm mb-3">Прием заявок</p>
              <div className="flex flex-col gap-1 text-sm text-slate-600">
                <a href="tel:+73022355599" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Phone size={14}/> +7 (3022) 35-55-99</a>
                <a href="mailto:expert@ztpp.ru" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail size={14}/> expert@ztpp.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
