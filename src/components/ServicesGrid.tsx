import React from 'react';
import { 
  FileText, Globe, Scale, Users, Container, 
  ChevronRight, ArrowRight, LifeBuoy, Hammer, Layout 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

// --- СТАНДАРТНАЯ КАРТОЧКА ---
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link }) => {
  const CardContent = (
    <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.03] cursor-pointer">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-900 transition-transform group-hover:scale-105">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-lg font-bold mb-3 text-slate-900">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed mb-6 flex-grow text-slate-600">
        {description}
      </p>
      
      <div className="inline-flex items-center font-bold text-sm mt-auto text-blue-700 hover:text-blue-900 transition-colors">
        Подробнее <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );

  return link ? <Link to={link} className="block h-full">{CardContent}</Link> : CardContent;
};

// --- ПРИОРИТЕТНАЯ КАРТОЧКА ---
interface PriorityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  badgeText?: string;
  badgeStyle: 'green' | 'gray';
  buttonStyle: 'yellow' | 'dark';
  link?: string;
}

const PriorityCard: React.FC<PriorityCardProps> = ({ 
  icon: Icon, title, description, buttonText, badgeText, badgeStyle, buttonStyle, link 
}) => (
  <div className="bg-white rounded-[2rem] p-6 md:p-7 shadow-xl shadow-slate-200/60 border border-white flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/10">
    <div className="flex justify-between items-start mb-5">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 bg-blue-50 text-blue-600">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      {badgeText && (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider ${
          badgeStyle === 'green' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
        }`}>
          {badgeText}
        </span>
      )}
    </div>
    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
      {title}
    </h3>
    <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
      {description}
    </p>
    <div className="mt-6">
      {link ? (
        <Link to={link}>
             <Button 
                variant="lime" 
                className={`w-full h-12 md:h-14 text-sm md:text-base font-bold !rounded-xl shadow-md transition-all hover:scale-105 ${
                buttonStyle === 'yellow' 
                    ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-yellow-400/30' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-slate-900/30'
                }`}
            >
                {buttonText} <ArrowRight size={18} className="ml-2" />
            </Button>
        </Link>
      ) : (
        <Button variant="lime" className="w-full h-12 md:h-14 text-sm md:text-base font-bold !rounded-xl shadow-md transition-all hover:scale-105 bg-yellow-400 text-slate-900 hover:bg-yellow-500">
            {buttonText} <ArrowRight size={18} className="ml-2" />
        </Button>
      )}
    </div>
  </div>
);

const ServicesGrid: React.FC = () => {
  return (
    <section className="pt-10 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Закажите нужный сертификат или экспертизу в пару кликов
          </h3>
          <p className="text-slate-500 font-medium">
            Сделаем всё за Вас в максимально короткие сроки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <PriorityCard 
            icon={FileText}
            title="Сертификаты происхождения товаров"
            description="Оформим сертификаты (Общей формы, СТ-1, формы А, и другие) для экспорта продукции. Поможем снизить пошлины, пройти таможенное оформление и сопроводим Ваше участие в госзакупках."
            buttonText="Оформить сертификат"
            badgeText="Выдача за 1 день"
            badgeStyle="green" 
            buttonStyle="yellow"
            link="/services/cert"
          />
          <PriorityCard 
            icon={Scale}
            title="Независимая товарная экспертиза"
            description="Проведем независимую приемку товаров по качеству и количеству. Выявим брак, оценим ущерб и определим коды ТН ВЭД. Защитим ваши интересы в суде и спорах."
            buttonText="Заказать экспертизу"
            badgeText=""
            badgeStyle="gray"
            buttonStyle="yellow"
            link="/services/expert"
          />
        </div>

        <div id="other-services" className="text-center mb-12 max-w-3xl mx-auto scroll-mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Другие услуги
          </h3>
          <p className="text-slate-600 text-lg">
            Весь спектр услуг для экспортеров, импортеров, производителей и предпринимателей Читы, Забайкальского края и других регионов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={Globe} 
            title="ВЭД и работа с Китаем" 
            description="Поиск надежных партнеров в КНР, организация бизнес-миссий, проверка контрагентов и сопровождение экспортных контрактов под ключ."
            link="/ved"
          />
          <ServiceCard 
            icon={Container} 
            title="Таможенное сопровождение" 
            description="Помощь в классификации товаров (ТН ВЭД), расчет таможенных платежей, подготовка документов для таможенного оформления."
            link="/services/customs"
          />
          <ServiceCard 
            icon={Hammer} 
            title="Строительно-техническая экспертиза" 
            description="Оценка качества строительных работ, проверка сметной документации, выявление дефектов, приемка квартир и коммерческих помещений."
            link="/services/construction"
          />
          <ServiceCard 
            icon={Scale} 
            title="Юридическая защита" 
            description="Свидетельствование форс-мажора, международный коммерческий арбитраж, медиация и защита интересов бизнеса в органах власти."
            link="/services/law"
          />
          <ServiceCard 
            icon={Layout} 
            title="Деловое пространство и события" 
            description="Конференц-зал и переговорная комната в центре города. Обучающие семинары, бизнес-миссии и нетворкинг."
            link="/services/events"
          />
          
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-slate-300 bg-white/50 text-center h-full hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 hover:scale-[1.03] group cursor-pointer">
             <Link to="/services" className="flex flex-col items-center w-full h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-100 text-slate-500 transition-transform group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <LifeBuoy size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Полный список услуг</h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                   Свяжитесь с нами - мы подберем решение под ваши задачи.
                </p>
                <Button variant="lime" className="w-full h-12 font-bold bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:shadow-md transition-all rounded-xl">
                    Получить консультацию <ArrowRight size={18} className="ml-2" />
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
