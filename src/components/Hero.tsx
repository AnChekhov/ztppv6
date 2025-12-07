import React from 'react';
import { ArrowRight, FileText, Scale, Shield, MapPin, CheckSquare } from 'lucide-react'; 
import { Button } from './ui/Button';

// Компонент для карточки услуги
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
    {/* ИЗМЕНЕНИЕ 1: Добавлен items-center для центровки. Удалены pt-20 и pb-16/md:pb-24 */}
    <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
      
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
      
      {/* Content Container (Используем Grid Layout для точного разделения) */}
      {/* ИЗМЕНЕНИЕ 2: pt-20 и pb-12 добавлены сюда для компенсации и минимальных отступов */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                
                {/* 1. Left Column: Headline and Buttons (md:col-span-7) */}
                <div className="md:col-span-7 text-left">
                    
                    {/* Badge: Amber Accent - ИЗМЕНЕНО: text-xs -> text-sm */}
                    <div className="inline-flex items-center mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl animate-in fade-in zoom-in duration-700">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-3 shadow-md shadow-yellow-500/50"></div>
                        <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
                            Официальный представитель бизнеса
                        </span>
                    </div>
                    
                    {/* Headline - ИЗМЕНЕНО: mb-6 -> mb-4 */}
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white tracking-tight drop-shadow-lg max-w-xl">
                        Укрепляем позиции <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            Вашего бизнеса
                        </span>
                    </h1>
                    
                    {/* Paragraph - ИЗМЕНЕНО: mb-8 -> mb-6 и max-w-2xl -> max-w-xl */}
                    <p className="text-xl text-slate-300 mb-6 max-w-xl leading-relaxed">
                        Помогаем предпринимателям выходить на рынок Китая, оформляем сертификаты происхождения и защищаем ваши интересы на государственном уровне.
                    </p>
                    
                    {/* Tags - ИЗМЕНЕНО: mb-10 -> mb-8 */}
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
                        {/* Кнопка - Amber Accent */}
                        <Button variant="lime" className="h-14 px-8 text-lg !rounded-lg shadow-lg shadow-yellow-500/20 bg-yellow-500 text-slate-900 hover:bg-yellow-400 hover:-translate-y-1 transition-transform duration-300">
                            Получить консультацию <ArrowRight size={20} className="ml-2"/>
                        </Button>
                        <Button variant="outline" className="h-14 px-8 text-lg !rounded-lg border-2 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300">
                            Стать партнером <ArrowRight size={20} className="ml-2"/>
                        </Button>
                    </div>

                </div>
                
                {/* 2. Right Column: Popular Services Block (md:col-span-5) */}
                {/* ИЗМЕНЕНИЕ 3: Добавлен self-center для вертикального центрирования этого блока */}
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
