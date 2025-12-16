import React from 'react';
import { FileCheck, Globe, Scale, Users, BookOpen, Container, ChevronRight, ClipboardCheck, ArrowRight, FileText } from 'lucide-react';
import { Button } from './ui/Button';

// --- КОМПОНЕНТ СТАНДАРТНОЙ КАРТОЧКИ (ДЛЯ НИЖНЕЙ СЕТКИ) ---
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-900 transition-transform group-hover:scale-105">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    
    <h3 className="text-lg font-bold mb-3 text-slate-900">
      {title}
    </h3>
    
    <p className="text-sm leading-relaxed mb-6 flex-grow text-slate-600">
      {description}
    </p>
    
    <a href="#" className="inline-flex items-center font-bold text-sm mt-auto text-blue-700 hover:text-blue-900 transition-colors">
      Подробнее <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
    </a>
  </div>
);

// --- КОМПОНЕНТ АКЦЕНТНОЙ КАРТОЧКИ (COMPACT & LIGHT ICON STYLE) ---
interface PriorityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  badgeText: string;
  badgeStyle: 'green' | 'gray';
  buttonStyle: 'yellow' | 'dark';
}

const PriorityCard: React.FC<PriorityCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  badgeText,
  badgeStyle,
  buttonStyle
}) => (
  <div className="bg-white rounded-[2rem] p-6 md:p-7 shadow-xl shadow-slate-200/60 border border-white flex flex-col h-full relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
    
    {/* А. ВЕРХНЯЯ ЧАСТЬ: Иконка и Бейдж */}
    <div className="flex justify-between items-start mb-5">
      {/* ИКОНКА: ИЗМЕНЕНО на bg-blue-50 text-blue-600 (Светлый фон, синяя иконка) */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 bg-blue-50 text-blue-600">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Бейдж */}
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider ${
        badgeStyle === 'green' 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-slate-100 text-slate-600'
      }`}>
        {badgeText}
      </span>
    </div>

    {/* Б. КОНТЕНТ */}
    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
      {title}
    </h3>
    
    <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
      {description}
    </p>
    
    {/* В. КНОПКА */}
    <div className="mt-6">
      <Button 
        variant="lime" 
        className={`w-full h-12 md:h-14 text-sm md:text-base font-bold !rounded-xl shadow-md transition-all ${
          buttonStyle === 'yellow' 
            ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-yellow-400/30' 
            : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-slate-900/30'
        }`}
      >
        {buttonText} <ArrowRight size={18} className="ml-2" />
      </Button>
    </div>
  </div>
);

const ServicesGrid: React.FC = () => {
  return (
    <section className="pt-10 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 1. ВЕРХНИЙ ПРИЗЫВ */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Получите нужный сертификат или экспертизу в пару кликов
          </h3>
          <p className="text-slate-500 font-medium">
            Сделаем всё за Вас в максимально короткие сроки.
          </p>
        </div>

        {/* 2. ДВА АКЦЕНТНЫХ БЛОКА */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* КАРТОЧКА 1: СЕРТИФИКАЦИЯ */}
          <PriorityCard 
            icon={FileText}
            title="Сертификаты происхождения товаров"
            description="Оформим сертификаты (Общей формы, СТ-1, формы А, и другие) для экспорта продукции. Поможем снизить пошлины, пройти таможенное оформление и сопроводим Ваше участие в госзакупках."
            buttonText="Оформить сертификат"
            badgeText="Выдача за 1 день"
            badgeStyle="green" 
            buttonStyle="yellow"
          />
          
          {/* КАРТОЧКА 2: ЭКСПЕРТИЗА */}
          <PriorityCard 
            icon={Scale}
            title="Независимая товарная экспертиза"
            description="Проведем независимую приемку товаров по качеству и количеству. Выявим брак, оценим ущерб и определим коды ТН ВЭД. Защитим ваши интересы в суде и спорах."
            buttonText="Заказать экспертизу"
            badgeText="Защита интересов"
            badgeStyle="gray"
            buttonStyle="dark"
          />
        </div>

        {/* 3. ЗАГОЛОВОК ОБЩЕГО КАТАЛОГА */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Комплексная поддержка бизнеса в Забайкальском крае
          </h3>
          <p className="text-slate-600 text-lg">
            Весь спектр услуг для экспортеров, импортеров, производителей и предпринимателей Читы, Забайкалья и других регионов.
          </p>
        </div>

        {/* 4. СЕТКА ОСТАЛЬНЫХ УСЛУГ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <ServiceCard 
            icon={Globe} 
            title="ВЭД и работа с Китаем" 
            description="Поиск надежных партнеров в КНР, организация бизнес-миссий, проверка контрагентов и сопровождение экспортных контрактов под ключ."
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
          
          {/* Ссылка на каталог */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-slate-300 bg-white/50 text-center h-full hover:bg-white transition-colors">
            <h4 className="text-lg font-bold text-slate-700 mb-2">Нужна другая услуга?</h4>
            <p className="text-sm text-slate-500 mb-6">У нас более 40 видов услуг для бизнеса</p>
            <Button variant="outline" className="border-slate-300 hover:border-blue-700 hover:text-blue-700 bg-white">
                Полный каталог
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
