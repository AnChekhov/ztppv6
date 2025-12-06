import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
          {/* 1. Текстура */}
          <img 
            src="images/hero-background.jpg" // Заменил URL на локальный путь
            alt="Business Background" 
            className="w-full h-full object-cover opacity-20"
          />
          
          {/* 2. Градиент для читаемости */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
          
          {/* 3. Синее свечение */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-900/20 to-transparent blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge: Добавлен лаймовый кружок и flex-контейнер */}
        <div className="inline-flex items-center mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl animate-in fade-in zoom-in duration-700">
          {/* Лаймовый кружок */}
          <div className="w-2.5 h-2.5 rounded-full bg-tpp-primary mr-3 shadow-md shadow-tpp-primary/50"></div>
          
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
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Помогаем предпринимателям выходить на рынок Китая, оформляем сертификаты происхождения и защищаем ваши интересы на государственном уровне.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Button variant="lime" className="h-14 px-8 text-lg !rounded-lg shadow-lg shadow-tpp-primary/20 hover:-translate-y-1 transition-transform duration-300">
             Получить консультацию <ArrowRight size={20} className="ml-2"/>
          </Button>
          <Button variant="outline" className="h-14 px-8 text-lg !rounded-lg border-2 border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300">
             Стать партнером
          </Button>
        </div>

        {/* Popular Links */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-3xl">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <span className="text-slate-400 font-medium">Популярное:</span>
                {['Сертификат СТ-1', 'Поиск партнеров в КНР', 'Экспертиза товаров'].map((item) => (
                    <a key={item} href="#" className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-transparent hover:border-white/20">
                        {item}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
