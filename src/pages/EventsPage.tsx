import React, { useState } from 'react';
import { 
  Users, Presentation, Laptop, Coffee, 
  MapPin, Clock, Phone, Mail, ChevronDown, 
  ChevronUp, MessageCircle, CheckCircle2, LayoutGrid, Video,
  Briefcase, BookOpen, TrendingUp, Handshake, Globe, Building
} from 'lucide-react';
import SEO from '../components/SEO';

const EventsPage: React.FC = () => {
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
      title: 'Конференц-зал в центре Читы',
      shortDesc: 'Универсальная площадка для проведения семинаров, тренингов, презентаций и форумов.',
      longDesc: 'Предоставление профессионально оборудованного конференц-зала для деловых мероприятий. Зал идеально подходит для обучающих курсов, пресс-конференций, презентаций новых продуктов и общих собраний. В распоряжении организаторов: большой проекционный экран, мультимедийный проектор высокой четкости, профессиональная акустика с радиомикрофонами и современная система видеоконференцсвязи (ВКС). Расположение в центре города и официальный статус площадки подчеркнут высокий уровень вашего события.',
      icon: Presentation
    },
    {
      id: 'meeting-room',
      title: 'Комната для переговоров',
      shortDesc: 'Приватное пространство для бизнес-встреч, подписания контрактов и деловых совещаний.',
      longDesc: 'Комфортабельное деловое пространство для проведения конфиденциальных встреч, медиаций и приватных переговоров. Помещение обеспечивает полную тишину и рабочую атмосферу в центре города. Зал укомплектован эргономичной мебелью и высокоскоростным Wi-Fi. Это оптимальное решение, если вам требуется статусная площадка для переговоров в Чите с возможностью организации кофе-брейков и работы с документами.',
      icon: Coffee
    },
    {
      id: 'seminars',
      title: 'Обучающие мероприятия',
      shortDesc: 'Организация профильных семинаров и мастер-классов от ведущих экспертов ТПП.',
      longDesc: 'Проведение тренингов для персонала и руководителей. Мы приглашаем профильных специалистов для разбора актуальных изменений в законодательстве, налоговых правил и таможенных процедур. Организуем все этапы мероприятия: от формирования программы и подбора спикеров до регистрации участников в Чите и других городах.',
      icon: BookOpen
    },
    {
      id: 'missions',
      title: 'Бизнес-миссии и B2B-встречи',
      shortDesc: 'Организация деловых поездок, посещение выставок и поиск партнеров в Китае и РФ.',
      longDesc: 'Полное сопровождение делегаций предпринимателей: поиск целевых партнеров в КНР, визовая поддержка, логистика и услуги переводчиков. Помогаем компаниям Забайкальского края, Бурятии и соседних регионов находить новые рынки сбыта и поставщиков промышленного оборудования.',
      icon: Briefcase
    },
    {
      id: 'conferences',
      title: 'Форумы и конференции',
      shortDesc: 'Масштабные отраслевые события и съезды предпринимателей под ключ.',
      longDesc: 'Комплексная организация крупных деловых форумов и съездов: подбор спикеров, техническое оснащение, информационное сопровождение в СМИ и GR-поддержка. Создаем эффективные площадки для прямого диалога бизнеса, региональной власти и международных партнеров в ДФО.',
      icon: TrendingUp
    },
    {
      id: 'networking',
      title: 'Деловой нетворкинг',
      shortDesc: 'Тематические встречи бизнес-сообщества и неформальное общение с коллегами.',
      longDesc: 'Формат бизнес-завтраков и закрытых встреч для членов ТПП. Обмен профессиональным опытом, поиск надежных партнеров и выстраивание прямых коммуникаций с представителями региональных министерств и ведомств в комфортной обстановке.',
      icon: Handshake
    },
  ];

  const faqs = [
    {
      question: "Как забронировать зал или переговорную комнату?",
      answer: "Вы можете оставить заявку через форму на сайте или связаться с нами по телефону. Мы забронируем за вами нужную дату, уточним количество участников и требования к расстановке мебели и оборудованию."
    },
    {
      question: "Какое техническое оборудование уже включено в услугу?",
      answer: "В стандартный пакет входит использование проектора, экрана, ноутбука для презентаций, звукового оборудования (колонки и микрофоны), а также доступ к Wi-Fi. Система ВКС подключается по предварительному запросу."
    },
    {
      question: "Предоставляются ли площадки для компаний из других регионов?",
      answer: "Да, мы активно сотрудничаем с федеральными компаниями из Москвы, Новосибирска, Иркутска и Улан-Удэ, предоставляя надежную базу для проведения их мероприятий, презентаций и встреч с партнерами в Чите."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Конференц-зал и площадки для бизнеса в Чите | Деловое пространство ТПП"
        description="Предоставление оборудованных площадок для бизнеса в центре Читы. Зал для семинаров, тренингов и презентаций. Переговорная комната для бизнес-встреч. Организация мероприятий в Забайкалье."
        keywords="конференц-зал чита, помещение для семинара чита, зал для тренинга, арендовать переговорную чита, площадка для презентаций, бизнес центр чита, ТПП мероприятия, Улан-Удэ, Иркутск"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Деловое пространство и залы ТПП" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Деловое пространство <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Площадки и события для развития бизнеса</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Оборудованные залы в центре города для статусных встреч, семинаров и форумов. Техническая поддержка, современные системы видеосвязи и комфорт для вашего бизнеса.
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
                Узнать о событиях
              </button>
            </div>
        </div>
      </section>

      {/* 2. ВЫБОР ФОРМАТА (GRID) */}
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
                   <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                     Подробнее <ChevronDown size={16} className="ml-1" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПОДРОБНОЕ ОПИСАНИЕ (АККОРДЕОНЫ) */}
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
                            Заказать услуги площадки -{'>'}
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
                <p className="text-slate-300 text-base mb-4 font-medium">Связаться с менеджером площадки:</p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
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
                   <label className="block text-sm font-bold mb-2">Интересующая услуга</label>
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
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-4">Отправить заявку</button>
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
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} size={24} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ГЕОГРАФИЯ (SEO БЛОК) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Деловая площадка в Забайкалье</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                        Торгово-промышленная палата предоставляет современные залы для бизнеса из любого региона. Мы активно сотрудничаем с компаниями из <strong>Москвы, Новосибирска, Иркутска и Улан-Удэ</strong>, выступая надежным оператором для проведения региональных событий в Чите.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Самый центр города
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Building size={16} className="text-blue-600" /> Статус уполномоченного органа
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Globe size={16} className="text-blue-600" /> Организация ВКС по РФ
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Users size={16} className="text-blue-600" /> Работа со всем ДФО
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-xl font-bold mb-2">Техническое сопровождение</p>
                        <p className="text-blue-100 text-sm">Мы обеспечиваем не только помещение, но и полное сопровождение вашего мероприятия: от настройки презентаций до организации телемостов с филиалами по всей стране.</p>
                    </div>
                    <Globe size={150} className="absolute -bottom-10 -right-10 text-white/10" />
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;
