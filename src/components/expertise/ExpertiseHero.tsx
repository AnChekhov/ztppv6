import React from 'react';
import { ClipboardCheck, FileText } from 'lucide-react';

export const ExpertiseHero: React.FC = () => {
  return (
    // Сохраняем min-h-[65vh], чтобы совпадало с главной страницей
    <section className="relative bg-slate-900 text-white overflow-hidden min-h-[65vh] flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1591382696684-38c427c7547a?q=80&w=2070&auto=format&fit=crop" 
          alt="Expertise Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
      
      {/* Сохраняем отступ pt-32, как на главной */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center">
          
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-3xl">
            {/* ✅ ИЗМЕНЕНО: Новый текст заголовка */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Товарная экспертиза в Чите и <span className="text-yellow-400">Забайкальском крае</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Защитите свой бизнес от убытков. Профессиональная приемка товаров, выявление брака и оценка ущерба. Акты ТПП признаются судами и таможней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                Вызвать эксперта
              </button>
              <button className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                <FileText size={20} />
                Прайс-лист услуг
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="relative transform transition-transform duration-500 hover:scale-105">
               <ClipboardCheck 
                 size={320} 
                 strokeWidth={1}
                 className="text-slate-700/50 drop-shadow-2xl" 
               />
               <ClipboardCheck 
                 size={320} 
                 strokeWidth={1}
                 className="absolute top-0 left-0 text-blue-500/30" 
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
