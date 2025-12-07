import React from 'react';
// Импортируем только нужные иконки
import { ArrowRight, FileText, Scale, Shield, MapPin, CheckSquare } from 'lucide-react'; 
// Предполагаем, что этот компонент Button корректно импортируется
import { Button } from './ui/Button'; 

// Вспомогательный компонент для карточки услуги
const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center p-5 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-full border border-slate-200">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-4 flex-shrink-0">
            {icon}
        </div>
        <div className="flex-grow">
            <p className="font-bold text-sm text-slate-900">{title}</p>
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
        </div>
        <ArrowRight size={16} className="text-slate-400 ml-4 flex-shrink-0" />
    </div>
);


export const Hero: React.FC = () => {
  return (
    {/* СЕКЦИЯ: min-h-[65vh] для высоты, items-center для вертикальной центровки */}
    <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
          {/* 1. Текстура (Для лучшего соответствия скриншоту, может быть, лучше использовать чисто синий фон) */}
          <div className="w-full h-full bg-slate-900/90"></div> 
          
          {/* 2. Градиент для глубины (Deep Blue) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-blue-900/40"></div>
          
          {/* 3. Синее свечение (Для эффекта, как на скриншоте) */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-900/30 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
      </div>
      
      {/* Content Container (GRID 7/5) - pt/pb для минимального отступа от краев */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                
                {/* 1. Left Column: Headline and Buttons (md:col-span-7) */}
                <div className="md:col-span-7 text-left"> 
                    
                    {/* Badge: Amber Accent */}
                    <div className="inline-flex items-center mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl animate-in fade-in zoom-in duration-700">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-3 shadow-md shadow-yellow-500/50"></div>
                        <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
                            Официальный партнер бизнеса
                        </span>
                    </div>
                    
                    {/* Headline - Текст взят из Снимка экрана 21.09.04.jpg */}
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-lg max-w-xl">
                        Бизнес без границ <br />
                        и юридических рисков
                    </h1>
                    
                    {/* Paragraph */}
                    <p className="text-xl text-slate-300 mb-6 max-w-xl leading-relaxed">
                        Союз «Забайкальская ТПП» — ваш надежный проводник в ВЭД, сертификации и защите прав предпринимателей с 1993 года.
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold">
                            <CheckSquare size={16} className="mr-2 text-yellow-500" /> Гос. аккредитация
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold">
                            <MapPin size={16} className="mr-2 text-yellow-500" /> Связи с Китаем
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button variant="lime" className="h-14 px-8 text-lg !rounded-lg shadow-lg shadow-yellow-500/20 bg-yellow-500 text-slate-900 hover:bg-yellow-400 hover:-translate-y-1 transition-transform duration-300">
                            Получить консультацию <ArrowRight size={20} className="ml-2"/>
                        </Button>
                        <Button variant="outline" className="h-14 px-8 text-lg !rounded-lg border-2 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300">
                            Стать партнером <ArrowRight size={20} className="ml-2"/>
                        </Button>
                    </div>

                </div>
                
                {/* 2. Right Column: Popular Services Block (md:col-span-5) */}
                <div className="md:col-span-5 w-full flex-shrink-0 self-center"> 
                    <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-widest text-right md:text-left">
                        Популярные услуги
                    </p>
                    
                    <div className="space-y-4">
                        <ServiceCard 
                            icon={<FileText size={24} />} 
                            title="Сертификаты происхождения (СТ-1)"
                            subtitle="Для экспорта и госзакупок. Оформление за 1 день."
                        />
                        <ServiceCard 
                            icon={<Scale size={24} />} 
                            title="Товарная экспертиза"
                            subtitle="Приказы по 44-ФЗ, оценка качества и ущерба."
                        />
                        <ServiceCard 
                            icon={<Shield size={24} />} 
                            title="Юридическая защита"
                            subtitle="Форсмажор, арбитраж, проверка контрагентов."
                        />
                    </div>
                    
                    <div className="text-right mt-5">
                        <a href="#" className="text-sm font-medium text-slate-400 hover:text-yellow-500 transition-colors">
                            Смотреть все 45+ услуг
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Hero;
