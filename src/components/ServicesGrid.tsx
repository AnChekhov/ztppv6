import React from 'react';
import { FileCheck, Globe, Scale, Users, BookOpen, Container, ChevronRight, ClipboardCheck, ArrowRight } from 'lucide-react';
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

// --- КОМПОНЕНТ АКЦЕНТНОЙ КАРТОЧКИ (ОБНОВЛЕННЫЙ ДИЗАЙН С ФОТО) ---
interface PriorityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  bgImage: string; // Новое свойство для картинки
}

const PriorityCard: React.FC<PriorityCardProps> = ({ icon: Icon, title, description, buttonText, bgImage }) => (
  <div className="relative p-8 md:p-10 rounded-2xl shadow-xl overflow-hidden group flex flex-col h-full min-h-[400px]">
    {/* 1. Фоновое изображение */}
    <img 
      src={bgImage} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" 
    />

    {/* 2. Затемнение (Overlay) */}
    <div className="absolute inset-0 bg-slate-900/80 z-10 transition-opacity duration-300 group-hover:bg-slate-900/75"></div>
    
    {/* 3. Контент */}
    <div className="relative z-20 flex flex-col h-full">
      {/* Иконка: Белая на прозрачном фоне */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/10">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-extrabold mb-4 text-white leading-tight">
        {title}
      </h3>
      
      <p className="text-base text-slate-200 mb-8 leading-relaxed flex-grow">
        {description}
      </p>
      
      <Button variant="lime" className="w-full sm:w-auto !rounded-lg font-bold bg-yellow-500 hover:bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 border-none transition-all transform hover:-translate-y-0.5">
        {buttonText} <ArrowRight size={18} className="ml-2" />
      </Button>
    </div>
  </div>
);

const ServicesGrid: React.FC = () => {
  return (
    <section className="pt-10 pb-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* ЗАГОЛОВОК СЕКЦИИ */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Комплексная поддержка бизнеса в Забайкальском крае
          </h3>
          <p className="text-slate-600 text-lg">
            Весь спектр услуг для экспортеров, импортеров, производителей и предпринимателей Читы, Забайкалья и других регионов.
          </p>
        </div>

        {/* ЧАСТЬ А: ДВА АКЦЕНТНЫХ БЛОКА (ОБНОВЛЕННЫЕ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <PriorityCard 
            icon={FileCheck}
            title="Сертификаты происхождения товаров"
            description="Оформление сертификатов (СТ-1, формы А, общей формы) для экспорта продукции. Необходимы для таможенного оформления, снижения пошлин и участия в государственных закупках. Оперативная выдача в Чите и Забайкальском крае."
            buttonText="Оформить сертификат"
            bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" // Paperwork/Signing
          />
          <PriorityCard 
            icon={ClipboardCheck}
            title="Независимая товарная экспертиза"
            description="Профессиональная приемка товаров по количеству и качеству. Экспертиза для таможенных целей (ВЭД), выявление брака, оценка ущерба и определение кодов ТН ВЭД. Защита ваших интересов в суде."
            buttonText="Заказать экспертизу"
            bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" // Containers/Inspection
          />
        </div>

        {/* ЧАСТЬ Б: ПРОМЕЖУТОЧНЫЙ ПРИЗЫВ */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Получите нужный <span className="text-blue-700">сертификат</span> или <span className="text-blue-700">экспертизу</span> в пару кликов
          </h3>
          <p className="text-slate-500 font-medium">
            Сделаем всё за Вас в максимально короткие сроки.
          </p>
        </div>

        {/* ЧАСТЬ В: ОСТАЛЬНАЯ СЕТКА УСЛУГ */}
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
          
          {/* Блок со ссылкой на полный каталог */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center h-full">
            <h4 className="text-lg font-bold text-slate-700 mb-2">Нужна другая услуга?</h4>
            <p className="text-sm text-slate-500 mb-6">У нас более 40 видов услуг для бизнеса</p>
            <Button variant="outline" className="border-slate-300 hover:border-blue-700 hover:text-blue-700">
                Полный каталог
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
