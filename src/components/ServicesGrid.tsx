import React from 'react';
import { FileCheck, Globe, Scale, Users, BookOpen, Container, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, highlight = false }) => (
  <div className={`group p-8 rounded-2xl transition-all duration-300 border flex flex-col h-full ${
    highlight 
      ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
      : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-lg'
  }`}>
    {/* Иконка: теперь Лаймовая на темном фоне */}
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
      highlight ? 'bg-white/10 text-tpp-primary' : 'bg-blue-50 text-blue-900'
    }`}>
      <Icon size={28} strokeWidth={1.5} />
    </div>
    
    <h3 className={`text-xl font-bold mb-3 ${highlight ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h3>
    
    <p className={`text-sm leading-relaxed mb-8 flex-grow ${highlight ? 'text-slate-300' : 'text-slate-600'}`}>
      {description}
    </p>
    
    {/* Ссылка: теперь Лаймовая на темном фоне */}
    <a href="#" className={`inline-flex items-center font-bold text-sm mt-auto transition-colors ${
      highlight ? 'text-tpp-primary hover:text-white/90' : 'text-blue-700 hover:text-blue-900'
    }`}>
      Подробнее <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
    </a>
  </div>
);

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-blue-900 font-bold tracking-widest uppercase text-xs mb-4">Направления деятельности</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Комплексная поддержка вашего бизнеса</h3>
          <p className="text-slate-600 text-lg">
            Мы предоставляем более 40 видов услуг для экспортеров, производителей и предпринимателей региона. Наша экспертиза признана на международном уровне.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Карточка 1: Акцентная (Темная) */}
          <ServiceCard 
            icon={Globe} 
            title="ВЭД и работа с Китаем" 
            description="Поиск надежных партнеров в КНР, организация бизнес-миссий, проверка контрагентов и сопровождение экспортных контрактов под ключ."
            highlight={true}
          />

          <ServiceCard 
            icon={FileCheck} 
            title="Сертификация и Экспертиза" 
            description="Выдача сертификатов происхождения товаров (СТ-1, форма А), удостоверение документов ВЭД, экспертиза качества и количества товаров."
          />

          <ServiceCard 
            icon={Scale} 
            title="Юридическая защита" 
            description="Свидетельствование форс-мажора, международный коммерческий арбитраж, медиация и защита интересов бизнеса в органах власти."
          />

           <ServiceCard 
            icon={Container} 
            title="Таможенное консультирование" 
            description="Помощь в классификации товаров (ТН ВЭД), расчет таможенных платежей, подготовка документов для таможенного оформления."
          />

          <ServiceCard 
            icon={BookOpen} 
            title="Обучение и Развитие" 
            description="Семинары по изменениям в законодательстве, тренинги для участников ВЭД, повышение квалификации сотрудников."
          />

          <ServiceCard 
            icon={Users} 
            title="Клубная деятельность" 
            description="Нетворкинг, закрытые встречи с представителями власти, профильные комитеты для решения отраслевых проблем."
          />
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 shadow-sm text-base font-medium rounded-lg text-slate-600 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all">
            Посмотреть полный каталог услуг
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
