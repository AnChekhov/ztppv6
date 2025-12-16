import React from 'react';
// Импортируем все необходимые иконки
import { ArrowRight, FileText, Scale, Shield, MapPin, CheckSquare } from 'lucide-react'; 
import { Button } from './ui/Button';

// Компонент для карточки услуги
const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center p-5 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-full border border-slate-200">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mr-4 flex-shrink-0">
            {icon}
        </div>
        <div className="flex-grow">
            <p className="font-bold text-lg text-slate-900 leading-tight">{title}</p>
            <p className="text-sm text-slate-600 mt-1 leading-snug">{subtitle}</p>
        </div>
        <ArrowRight size={16} className="text-slate-400 ml-4 flex-shrink-0" />
    </div>
);


export const Hero: React.FC = () => {
  return (
    // ИЗМЕНЕНИЕ 1: min-h-[65vh] (Компактная высота, убирает лишнее пространство)
    <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Business Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-900/20 to-transparent blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      {/* Content Container */}
      {/* ИЗМЕНЕНИЕ 2: py-16 (Умеренные симметричные отступы сверху и снизу) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16">
            
            {/* ПРОВЕРКА: items-center гарантирует центрирование контента при любой высоте */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                
                {/* 1. Left Column: Headline and Buttons */}
                <div className="md:col-span-7 text-left flex flex-col justify-center">
                    
                    {/* Headline */}
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white tracking-tight drop-shadow-lg max-w-xl">
                        Укрепляем позиции <br />
                        Вашего бизнеса
                    </h1>
                    
                    {/* Paragraph */}
                    <p className="text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
                        Помогаем предпринимателям выходить на рынок Китая, оформляем сертификаты происхождения и защищаем ваши интересы на государственном уровне.
                    </p>

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
                
                {/* 2. Right Column: Popular Services Block */}
                <div className="md:col-span-5 w-full mt-10 md:mt-0 pt-0 flex-shrink-0 self-center"> 
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
