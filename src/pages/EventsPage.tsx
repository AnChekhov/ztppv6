import React, { useState } from 'react';
import { 
  Users, Presentation, Laptop, Coffee, 
  MapPin, Clock, Phone, Mail, ChevronDown, 
  ChevronUp, MessageCircle, CheckCircle2, Layout, Video,
  Briefcase, BookOpen, TrendingUp, Handshake
} from 'lucide-react';
import SEO from '../components/SEO';

export const EventsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Конференц-зал');
  const [expandedDetail, setExpandedDetail] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderClick = (title: string) => {
    setSelectedService(title);
    scrollToForm();
  };

  const handleReadMore = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedDetail(id);
    setTimeout(() => {
      const element = document.getElementById(`detail-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const services = [
    {
      id: 'hall',
      title: 'Конференц-зал',
      shortDesc: 'Современная площадка в центре Читы для семинаров, презентаций и форумов (до 50 человек).',
      longDesc: 'Предоставление оборудованного конференц-зала для проведения статусных деловых мероприятий. В стоимость входит: проектор, большой экран, современная система ВКС для видеоконференций, микрофоны и звуковое оборудование. Идеальное место для обучающих семинаров, пресс-конференций и общих собраний в самом центре города.',
      icon: Presentation
    },
    {
      id: 'meeting-room',
      title: 'Переговорная комната',
      shortDesc: 'Приватное пространство для деловых встреч, медиаций и подписания контрактов (до 10 человек).',
      longDesc: 'Комфортабельное помещение для конфиденциальных переговоров. Оборудована круглым столом, эргономичными креслами и скоростным Wi-Fi. Подходит для встреч с партнерами, проведения собеседований или консультаций, где важен официальный статус и тишина.',
      icon: Users
    },
    {
      id: 'seminars',
      title: 'Обучающие мероприятия',
      shortDesc: 'Семинары и мастер-классы от ведущих экспертов по ВЭД, налогам и праву.',
      longDesc: 'Организация и проведение тренингов для сотрудников и руководителей. Мы приглашаем профильных экспертов федерального уровня для разбора актуальных изменений в законодательстве, таможенных правилах и маркетинге.',
      icon: BookOpen
    },
    {
      id: 'missions',
      title: 'Бизнес-миссии',
      shortDesc: 'Организация деловых поездок и B2B-встреч в Китае и регионах России.',
      longDesc: 'Полное сопровождение деловых делегаций: от поиска партнеров в КНР до логистики и визовой поддержки. Помогаем расширить географию сбыта вашей продукции и найти новых поставщиков оборудования.',
      icon: Briefcase
    },
    {
      id: 'conferences',
      title: 'Форумы и конференции',
      shortDesc: 'Организация масштабных отраслевых событий под ключ.',
      longDesc: 'Профессиональная подготовка и проведение крупных деловых форумов. Обеспечиваем привлечение спикеров, техническое сопровождение, регистрацию участников и взаимодействие со СМИ.',
      icon: TrendingUp
    },
    {
      id: 'networking',
      title: 'Деловой нетворкинг',
      shortDesc: 'Закрытые встречи предпринимателей и GR-коммуникации для членов ТПП.',
      longDesc: 'Формат бизнес-завтраков и тематических встреч для обмена опытом. Помогаем выстроить прямой диалог между бизнесом и представителями власти Забайкальского края.',
      icon: Handshake
    },
  ];

  const faqs = [
    {
      question: "Как забронировать конференц-зал или переговорную?",
      answer: "Вам достаточно оставить заявку на сайте или позвонить нам. Мы уточним свободные даты, формат вашего мероприятия и необходимое техническое оборудование."
    },
    {
      question: "Входит ли настройка оборудования в стоимость предоставления площадки?",
      answer: "Да, наши технические специалисты помогут подключить ваш ноутбук, настроить проектор или запустить систему видеосвязи (ВКС) перед началом мероприятия."
    },
    {
      question: "Работаете ли вы с компаниями из других регионов?",
      answer: "Да, мы часто предоставляем площадки для федеральных компаний из Москвы, Новосибирска и Иркутска, которым необходимо провести презентацию или встречу с партнерами в Чите."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Деловое пространство и конференц-зал в Чите | Забайкальская ТПП"
        description="Предоставление оборудованных площадок для бизнеса в центре Читы: конференц-зал, комната переговоров. Организация семинаров, бизнес-миссий и форумов."
        keywords="конференц-зал чита, зал для мероприятий чита, переговорная комната чита, площадка для семинара, арендовать зал чита, ТПП мероприятия, бизнес пространство забайкалье"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Деловое пространство ТПП" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Деловое пространство <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Площадки и события для бизнеса</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Оборудованные залы в центре Читы для ваших переговоров и семинаров. Организация профессиональных бизнес-событий, форумов и деловых миссий.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Забронировать площадку
              </button>
              <button 
                onClick={scrollToForm}
                className="border-2 border-slate-600 hover:border-white text-white font-semibold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} />
                Узнать о мероприятиях
              </button>
            </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Выберите нужный формат</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <div 
                key={item.id} 
                onClick={(e) => handleReadMore(e, item.id)}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.03] flex flex-col h-full cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.shortDesc}</p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                   <button 
                     className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                   >
                     Подробнее <ChevronDown size={16} className="ml-1" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПОДРОБНОЕ ОПИСАНИЕ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Конференц-сервис и события</h2>
          <div className="space-y-4">
            {services.map((item) => (
              <div 
                key={item.id} 
                id={`detail-${item.id}`} 
                className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${expandedDetail === item.id ? 'border-blue-500 shadow-md' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => setExpandedDetail(expandedDetail === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${expandedDetail === item.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                       <item.icon size={24} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">{item.title}</span>
                  </div>
                  {expandedDetail === item.id ? <ChevronUp className="text-blue-600"/> : <ChevronDown className="text-slate-400"/>}
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${expandedDetail === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {item.longDesc}
                    <div className="mt-4">
                        <button 
                            onClick={() => handleOrderClick(item.title)}
                            className="text-sm font-bold text-blue-600 hover:text-yellow-600 transition-colors"
                        >
                            Оставить заявку →
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Запланируйте мероприятие</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте контакты, и мы свяжемся с вами для уточнения деталей, свободных дат и стоимости сопровождения.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">
                  Связаться с менеджером:
                </p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">
                  +7 (924) 373-33-30
                </a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium">
                  <Mail size={20} /> info@zabtpp.ru
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Название организации" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+7 (___) ___-__-__" />
                </div>

                <div>
                   <label className="block text-sm font-bold mb-2">Что вас интересует?</label>
                   <div className="relative">
                     <select 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer text-slate-700"
                     >
                       {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                       <option>Другой вопрос</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500"><ChevronDown size={20} /></div>
                   </div>
                </div>

                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Отправить заявку</button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 text-center">Часто задаваемые вопросы</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 last:border-0">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} 
                    size={24} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;
