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

// --- КОМПОНЕНТ АКЦЕНТНОЙ КАРТОЧКИ (ДЛЯ ТОПА) ---
interface PriorityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
}

const PriorityCard: React.FC<PriorityCardProps> = ({ icon: Icon, title, description, buttonText }) => (
  <div className="relative p-8 md:p-10 rounded-2xl bg-white shadow-xl border border-slate-100 flex flex-col h-full overflow-hidden group">
    {/* Декоративный фон */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yellow-100 text-yellow-600">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-extrabold mb-4 text-slate-900">
        {title}
      </h3>
      
      <p className="text-base text-slate-600 mb-8 leading-relaxed flex-grow">
        {description}
      </p>
      
      <Button variant="lime" className="w-full sm:w-auto !rounded-lg font-bold bg-yellow-500 hover:bg-yellow-400 text-slate-900 shadow-md hover:shadow-lg transition-all">
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

        {/* ЧАСТЬ А: ДВА АКЦЕНТНЫХ БЛОКА (PRIORITY CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <PriorityCard 
            icon={FileCheck}
            title="Сертификаты происхождения товаров"
            description="Оформите сертификат (СТ-1, общей формы), чтобы Вы сэкономили на пошлинах и вышли на экспорт."
            buttonText="Оформить сертификат"
          />
          <PriorityCard 
            icon={ClipboardCheck}
            title="Товарная экспертиза"
            description="Подтвердим качество, количество и таможенную стоимость, чтобы Вы избежали штрафов и переплат."
            buttonText="Заказать экспертизу"
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
          
          {/* Пустой блок или призыв, чтобы сетка была ровной (опционально), 
              но 5 карточек тоже смотрятся нормально. Можно добавить ссылку на каталог. */}
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
