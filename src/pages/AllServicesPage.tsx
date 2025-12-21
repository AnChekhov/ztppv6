import React, { useState } from 'react';
import { 
  FileText, Globe, Scale, Users, 
  Container, Hammer, Calculator, Briefcase,
  ShieldCheck, Phone, Mail, UploadCloud,
  CheckCircle2, ChevronDown, ArrowRight,
  MessageCircle, LayoutGrid, HelpCircle // Добавил иконку вопроса
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const AllServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOrderClick = (serviceName: string) => {
    setSelectedService(serviceName);
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToDescription = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToCategory = (catId: string) => {
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const allCategories = [
    {
      id: "cat-cert",
      title: "Сертификация и ВЭД",
      icon: FileText,
      color: "bg-blue-50 text-blue-600",
      services: [
        { id: "cert-st1", name: "Сертификат СТ-1 (СНГ)", desc: "Оформление сертификата формы СТ-1 для беспошлинного экспорта товаров в страны СНГ. Срок оформления от 2 часов." },
        { id: "cert-general", name: "Сертификат Общей формы", desc: "Подтверждение происхождения товара для экспорта во все страны мира. Необходим для таможенного оформления." },
        { id: "cert-eav", name: "Сертификат EAV (Вьетнам)", desc: "Сертификат для получения тарифных преференций при экспорте во Вьетнам." },
        { id: "cert-st2", name: "Сертификат СТ-2 (Сербия)", desc: "Документ для беспошлинного ввоза российских товаров в Республику Сербия." },
        { id: "cert-expert", name: "Экспертиза происхождения", desc: "Проведение экспертизы для определения страны происхождения товара с выдачей акта." },
      ]
    },
    {
      id: "cat-expert",
      title: "Товарная экспертиза",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600",
      services: [
        { id: "exp-quality", name: "Приемка по качеству", desc: "Независимая приемка партий товара. Фиксация брака, недостачи, пересортицы. Акт для претензии." },
        { id: "exp-44fz", name: "Экспертиза по 44-ФЗ", desc: "Внешняя экспертиза исполнения госконтрактов. Обязательна для приемки товаров бюджетными учреждениями." },
        { id: "exp-customs", name: "Таможенная экспертиза", desc: "Идентификация товаров, описание характеристик, состава. Помощь в спорах с ФТС по кодам ТН ВЭД." },
        { id: "exp-damage", name: "Оценка ущерба", desc: "Оценка ущерба грузу при перевозке, товаров при заливе или пожаре. Расчет стоимости утраты товарного вида." },
        { id: "exp-judicial", name: "Судебная экспертиза", desc: "Экспертиза по определению суда. Рецензирование заключений. Споры о защите прав потребителей." },
      ]
    },
    {
      id: "cat-build",
      title: "Строительство",
      icon: Hammer,
      color: "bg-orange-50 text-orange-600",
      services: [
        { id: "str-quality", name: "Качество строительных работ", desc: "Контроль качества СМР. Выявление дефектов в новостройках и после ремонта." },
        { id: "str-smeta", name: "Сметная экспертиза", desc: "Проверка сметной документации, актов КС-2/КС-3. Выявление завышения объемов и стоимости." },
        { id: "str-house", name: "Обследование зданий", desc: "Оценка технического состояния несущих конструкций. Признание домов аварийными." },
        { id: "str-flat", name: "Приемка квартир", desc: "Помощь в приемке жилья от застройщика. Составление дефектной ведомости." },
      ]
    },
    {
      id: "cat-law",
      title: "Юридическая поддержка",
      icon: Scale,
      color: "bg-indigo-50 text-indigo-600",
      services: [
        { id: "law-force", name: "Форс-мажор", desc: "Выдача заключений об обстоятельствах непреодолимой силы (санкции, стихийные бедствия)." },
        { id: "law-arbitr", name: "Международный арбитраж", desc: "Представительство интересов бизнеса в МКАС при ТПП РФ. Взыскание долгов, споры." },
        { id: "law-contract", name: "Экспертиза контрактов", desc: "Разработка и правовой анализ договоров. Минимизация рисков, согласование разногласий." },
        { id: "law-mediation", name: "Медиация", desc: "Досудебное урегулирование споров с участием нейтрального посредника." },
      ]
    },
    {
      id: "cat-val",
      title: "Оценка собственности",
      icon: Calculator,
      color: "bg-amber-50 text-amber-600",
      services: [
        { id: "val-realty", name: "Оценка недвижимости", desc: "Оценка рыночной стоимости квартир, домов, участков (для ипотеки, залога)." },
        { id: "val-business", name: "Оценка бизнеса", desc: "Расчет стоимости предприятия, пакетов акций, долей в ООО." },
        { id: "val-auto", name: "Оценка транспорта", desc: "Оценка автомобилей, спецтехники и оборудования. Для лизинга или продажи." },
      ]
    },
    {
      id: "cat-ved",
      title: "ВЭД и Китай",
      icon: Globe,
      color: "bg-red-50 text-red-600",
      services: [
        { id: "ved-search", name: "Поиск поставщиков", desc: "Подбор заводов в КНР по ТЗ. Исключение посредников, запрос образцов." },
        { id: "ved-check", name: "Проверка контрагентов", desc: "Проверка китайских компаний по реестрам: лицензии, суды, капитал." },
        { id: "ved-trans", name: "Переводы", desc: "Письменный перевод контрактов, инструкций. Устный перевод на переговорах." },
        { id: "ved-customs", name: "Таможенное консультирование", desc: "Подбор кодов ТН ВЭД, расчет платежей, проверка документов." },
        { id: "ved-missions", name: "Бизнес-миссии", desc: "Деловые поездки в Китай. Посещение выставок, B2B переговоры." },
      ]
    },
    {
      id: "cat-dev",
      title: "Развитие бизнеса",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      services: [
        { id: "dev-hall", name: "Конференц-зал", desc: "Организация мероприятий. Оборудованный зал в центре Читы." },
        { id: "dev-room", name: "Переговорная комната", desc: "Комната для конфиденциальных встреч и подписания контрактов." },
        { id: "dev-ip", name: "Товарные знаки", desc: "Проверка бренда, подача заявки в Роспатент, регистрация." },
        { id: "dev-eco", name: "Экология", desc: "Разработка паспортов отходов, проектов ПДВ, отчетность." },
        { id: "dev-sout", name: "СОУТ", desc: "Организация проведения спецоценки рабочих мест." },
      ]
    },
    // ✅ 8-й БЛОК: Заполнитель пустоты (Ведет к контактам/форме)
    {
      id: "cat-help",
      title: "Нужна консультация?",
      icon: HelpCircle,
      color: "bg-slate-100 text-slate-600",
      isAction: true, // Флаг для особого рендера
      services: [] 
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Каталог услуг Торгово-промышленной палаты Забайкальского края"
        description="Полный перечень услуг: сертификация, экспертиза, оценка, юридическая помощь, переводы, ВЭД с Китаем. Единое окно для предпринимателей."
        keywords="услуги тпп чита, каталог услуг, оценка бизнеса, переводы китайский, соут чита, регистрация товарного знака, строительная экспертиза"
      />

      {/* HERO: 2 колонки */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/[0.87] to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Левая колонка */}
              <div className="lg:col-span-7 max-w-3xl">
                {/* ✅ ИЗМЕНЕНО: Заголовок */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                   Каталог услуг Торгово-промышленной палаты <span className="text-yellow-400">Забайкальского края</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Комплексная поддержка вашего бизнеса на всех этапах: от регистрации товарного знака до выхода на международные рынки.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleOrderClick('Нужна консультация (общий вопрос)')}
                    className="bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-500 transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                  >
                    Получить консультацию
                  </button>
                </div>
              </div>

              {/* Правая колонка: Иконка */}
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                   <LayoutGrid 
                      size={300} 
                      strokeWidth={1}
                      className="text-slate-600/70 drop-shadow-2xl" 
                   />
                   <LayoutGrid 
                      size={300} 
                      strokeWidth={1}
                      className="absolute top-0 left-0 text-white/10" 
                   />
                </div>
              </div>

            </div>
        </div>
      </section>

      {/* 1. НАВИГАЦИОННАЯ СЕТКА (МЕНЮ) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <h2 className="text-2xl font-bold text-slate-900 mb-8">Быстрый переход к разделам:</h2>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allCategories.map((cat, idx) => (
                // ✅ ИЗМЕНЕНО: Стиль карточек как на Главной (border, shadow, scale)
                <div 
                  key={idx} 
                  className={`
                    p-6 rounded-2xl bg-white border border-slate-100 
                    hover:border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 
                    hover:scale-[1.02] transition-all duration-300 flex flex-col h-full
                    ${cat.isAction ? 'border-dashed border-slate-300 bg-slate-50/50 justify-center items-center text-center cursor-pointer' : ''}
                  `}
                  onClick={cat.isAction ? () => handleOrderClick('Консультация') : undefined}
                >
                    {/* Если это обычная категория */}
                    {!cat.isAction && (
                      <>
                        <button 
                          onClick={() => scrollToCategory(cat.id)}
                          className="flex items-center gap-3 mb-4 group w-full text-left"
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                                <cat.icon size={20} strokeWidth={2} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                              {cat.title}
                            </h3>
                        </button>
                        
                        <ul className="space-y-2 flex-grow">
                            {cat.services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <button 
                                        onClick={() => scrollToDescription(service.id)}
                                        className="text-sm text-slate-600 hover:text-blue-600 text-left transition-colors border-b border-transparent hover:border-blue-200"
                                    >
                                        {service.name}
                                    </button>
                                </li>
                            ))}
                            {cat.services.length > 5 && (
                                <li className="text-xs text-slate-400 pt-1">и еще {cat.services.length - 5}...</li>
                            )}
                        </ul>
                      </>
                    )}

                    {/* ✅ 8-й БЛОК: Если это Action блок (заполнитель) */}
                    {cat.isAction && (
                       <>
                         <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-slate-200 text-slate-500">
                             <HelpCircle size={24} strokeWidth={1.5} />
                         </div>
                         <h3 className="font-bold text-lg text-slate-900 mb-2">{cat.title}</h3>
                         <p className="text-sm text-slate-500 mb-4">Не нашли нужную услугу в списке?</p>
                         <span className="text-sm font-bold text-blue-600 group-hover:text-yellow-600 transition-colors">
                            Связаться с нами →
                         </span>
                       </>
                    )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 2. ПОДРОБНОЕ ОПИСАНИЕ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-20">
          
          {allCategories.filter(c => !c.isAction).map((cat, catIdx) => (
            <div key={catIdx} id={cat.id} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8 sticky top-20 bg-slate-50/95 backdrop-blur py-4 z-10 border-b border-slate-200">
                <div className={`p-3 rounded-xl ${cat.color}`}>
                  <cat.icon size={32} />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">{cat.title}</h2>
              </div>

              <div className="grid gap-6">
                {cat.services.map((service) => (
                  <div 
                    key={service.id} 
                    id={service.id} 
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow scroll-mt-48"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <button 
                      onClick={() => handleOrderClick(service.name)}
                      className="text-sm font-bold text-blue-600 hover:text-yellow-600 transition-colors flex items-center"
                    >
                      Заказать услугу <ArrowRight size={16} className="ml-2" />
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

                  <div>
                     <label className="block text-sm font-bold mb-2">Интересующая услуга</label>
                     <div className="relative">
                       <select 
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                       >
                         <option value="" disabled>Выберите из списка...</option>
                         {allCategories.filter(c => !c.isAction).map(cat => (
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
