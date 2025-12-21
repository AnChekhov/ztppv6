import React, { useState } from 'react';
import { 
  FileText, Globe, Scale, Users, 
  Container, Hammer, Calculator, Briefcase,
  ShieldCheck, Phone, Mail, UploadCloud,
  CheckCircle2, ChevronDown, ArrowRight,
  MessageCircle, Check
} from 'lucide-react';
import SEO from '../components/SEO';

export const AllServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  // Функция скролла к форме с выбором услуги
  const handleOrderClick = (serviceName: string) => {
    setSelectedService(serviceName);
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Функция скролла к описанию услуги (из верхнего меню)
  const scrollToDescription = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // БАЗА ДАННЫХ ВСЕХ УСЛУГ
  const allCategories = [
    {
      title: "Сертификация и ВЭД",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      services: [
        { 
          id: "cert-st1", 
          name: "Сертификаты происхождения (СТ-1, Общая форма)", 
          desc: "Оформление сертификатов для экспорта товаров. СТ-1 для стран СНГ (беспошлинный ввоз), Общая форма для остальных стран, EAV для Вьетнама, СТ-2 для Сербии. Срок оформления от 2 часов." 
        },
        { 
          id: "ved-search", 
          name: "Поиск партнеров в Китае", 
          desc: "Подбор надежных поставщиков в КНР по вашему ТЗ. Проверка фабрик, запрос образцов, проверка юридической чистоты контрагента перед сделкой." 
        },
        { 
          id: "ved-trans", 
          name: "Переводы и легализация", 
          desc: "Профессиональный перевод контрактов, инвойсов и технической документации (китайский, английский языки). Консульская легализация документов для ВЭД." 
        },
      ]
    },
    {
      title: "Экспертиза и Оценка",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600",
      services: [
        { 
          id: "exp-quality", 
          name: "Товарная экспертиза (качество/количество)", 
          desc: "Приемка товаров народного потребления, оборудования и сырья. Фиксация брака, пересортицы, нарушений упаковки. Акт экспертизы для выставления претензии." 
        },
        { 
          id: "exp-44fz", 
          name: "Экспертиза по 44-ФЗ", 
          desc: "Внешняя экспертиза исполнения государственных контрактов. Заключение для приемки товаров бюджетными учреждениями и размещения в ЕИС." 
        },
        { 
          id: "exp-build", 
          name: "Строительно-техническая экспертиза", 
          desc: "Оценка качества строительных и ремонтных работ, проверка смет, выявление дефектов, приемка квартир от застройщика, раздел недвижимости." 
        },
        { 
          id: "val-property", 
          name: "Оценка недвижимости и бизнеса", 
          desc: "Независимая оценка рыночной стоимости квартир, земельных участков, коммерческой недвижимости, оборудования и действующего бизнеса (для банков, судов, нотариусов)." 
        },
      ]
    },
    {
      title: "Юридическая поддержка",
      icon: Scale,
      color: "bg-indigo-50 text-indigo-600",
      services: [
        { 
          id: "law-force", 
          name: "Свидетельствование форс-мажора", 
          desc: "Выдача официальных заключений об обстоятельствах непреодолимой силы для освобождения от ответственности за неисполнение контрактов (санкции, стихийные бедствия)." 
        },
        { 
          id: "law-arbitr", 
          name: "Международный арбитраж и суды", 
          desc: "Представительство интересов бизнеса в МКАС при ТПП РФ, арбитражных судах и судах общей юрисдикции. Взыскание долгов, корпоративные споры." 
        },
        { 
          id: "law-contract", 
          name: "Экспертиза контрактов", 
          desc: "Разработка и правовой анализ договоров (в т.ч. внешнеэкономических). Выявление рисков, корректировка условий поставки и ответственности сторон." 
        },
      ]
    },
    {
      title: "Развитие бизнеса",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      services: [
        { 
          id: "dev-ip", 
          name: "Регистрация товарных знаков", 
          desc: "Поверка на уникальность, подача заявки в Роспатент, полное сопровождение регистрации бренда. Защита интеллектуальной собственности." 
        },
        { 
          id: "dev-sout", 
          name: "Специальная оценка условий труда (СОУТ)", 
          desc: "Организация проведения спецоценки рабочих мест в соответствии с требованиями трудового законодательства. Помощь в подготовке деклараций." 
        },
        { 
          id: "dev-event", 
          name: "Участие в выставках и миссиях", 
          desc: "Организация коллективных стендов на выставках, деловые миссии в регионы РФ и за рубеж. Поиск новых рынков сбыта." 
        },
      ]
    },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Полный каталог услуг Забайкальской ТПП | Реестр 2025"
        description="Более 40 видов услуг для бизнеса в Чите: сертификация, экспертиза, оценка, юридическая помощь, переводы, ВЭД с Китаем. Единое окно для предпринимателей."
        keywords="услуги тпп чита, каталог услуг, оценка бизнеса, переводы китайский, соут чита, регистрация товарного знака, строительная экспертиза"
      />

      {/* HERO */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Каталог услуг Палаты</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Выберите направление, чтобы узнать подробности и заказать услугу.
            </p>
            {/* Кнопка скролла к форме для ленивых */}
            <div className="mt-8">
              <button 
                onClick={() => handleOrderClick('Нужна консультация')}
                className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors"
              >
                Мне нужна консультация, я не знаю что выбрать
              </button>
            </div>
        </div>
      </section>

      {/* 1. НАВИГАЦИОННАЯ СЕТКА (МЕНЮ) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <h2 className="text-2xl font-bold text-slate-900 mb-8">Быстрый переход к услугам:</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allCategories.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color}`}>
                            <cat.icon size={20} strokeWidth={2} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">{cat.title}</h3>
                    </div>
                    <ul className="space-y-2">
                        {cat.services.map((service) => (
                            <li key={service.id}>
                                <button 
                                    onClick={() => scrollToDescription(service.id)}
                                    className="text-sm text-slate-600 hover:text-blue-600 text-left transition-colors border-b border-transparent hover:border-blue-200"
                                >
                                    {service.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 2. ПОДРОБНОЕ ОПИСАНИЕ (ЭНЦИКЛОПЕДИЯ) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-20">
          
          {allCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Заголовок категории */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl ${cat.color}`}>
                  <cat.icon size={32} />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">{cat.title}</h2>
              </div>

              {/* Список услуг в категории */}
              <div className="grid gap-6">
                {cat.services.map((service) => (
                  <div 
                    key={service.id} 
                    id={service.id} 
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow scroll-mt-32"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <button 
                      onClick={() => handleOrderClick(service.name)}
                      className="text-sm font-bold text-blue-600 hover:text-yellow-600 transition-colors flex items-center"
                    >
                      Заказать эту услугу <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 3. CTA ФОРМА */}
      <div id="order-form" className="pt-24">
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Оставьте заявку</h2>
                <p className="text-slate-300 text-lg mb-8">
                  Мы свяжемся с вами, уточним детали и рассчитаем стоимость услуги.
                </p>
                <div className="pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3 font-medium uppercase tracking-wider">Единый контактный центр</p>
                  <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-white hover:text-yellow-400 transition-colors mb-4">+7 (924) 373-33-30</a>
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

                  {/* Умный Select: Предустановленное значение */}
                  <div>
                     <label className="block text-sm font-bold mb-2">Интересующая услуга</label>
                     <div className="relative">
                       <select 
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                       >
                         <option value="" disabled>Выберите из списка...</option>
                         {/* Генерируем опции из всех категорий */}
                         {allCategories.map(cat => (
                            <optgroup key={cat.title} label={cat.title}>
                              {cat.services.map(s => (
                                <option key={s.id} value={s.name}>{s.name}</option>
                              ))}
                            </optgroup>
                         ))}
                         <option value="Другое">Другой вопрос</option>
                       </select>
                       <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500"><ChevronDown size={20} /></div>
                     </div>
                  </div>

                  <div className="pt-2">
                     <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                       <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2" size={32} />
                       <span className="text-sm text-slate-500">Прикрепить документы</span>
                     </div>
                  </div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Отправить заявку</button>
                  <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              </div>

            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AllServicesPage;
