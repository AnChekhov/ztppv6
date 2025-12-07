import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white min-h-[75vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* BACKGROUND LAYERS (Слой глубокого синего и градиент) */}
      <div className="absolute inset-0 z-0">
          {/* 1. Текстура */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Business Background" 
            className="w-full h-full object-cover opacity-20"
          />
          
          {/* 2. Градиент для читаемости (Deep Blue) */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
          
          {/* 3. Синее свечение */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-900/20 to-transparent blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge: Amber Accent */}
        <div className="inline-flex items-center mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl animate-in fade-in zoom-in duration-700">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-3 shadow-md shadow-yellow-500/50"></div>
          
          <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
            Официальный представитель бизнеса
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white tracking-tight drop-shadow-lg">
          Укрепляем позиции <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Вашего бизнеса
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Помогаем предпринимателям выходить на рынок Китая, оформляем сертификаты происхождения и защищаем ваши интересы на государственном уровне.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          {/* Кнопка - Amber Accent */}
          <Button variant="lime" className="h-14 px-8 text-lg !rounded-lg shadow-lg shadow-yellow-500/20 bg-yellow-500 text-slate-900 hover:bg-yellow-400 hover:-translate-y-1 transition-transform duration-300">
             Получить консультацию <ArrowRight size={20} className="ml-2"/>
          </Button>
          <Button variant="outline" className="h-14 px-8 text-lg !rounded-lg border-2 border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300">
             Стать партнером
          </Button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="font-semibold text-slate-500">Популярное:</span>
            {['Сертификат СТ-1', 'Поиск партнеров в КНР', 'Экспертиза товаров'].map((item) => (
                <a key={item} href="#" className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-yellow-500 transition-colors border border-transparent hover:border-yellow-500/50">
                    {item}
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
