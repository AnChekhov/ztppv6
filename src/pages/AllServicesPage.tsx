import React, { useState } from 'react';
import { 
  FileText, Globe, Scale, Users, 
  Container, Hammer, Calculator, Briefcase,
  ShieldCheck, Phone, Mail, UploadCloud,
  CheckCircle2, ChevronDown, ArrowRight,
  MessageCircle, LayoutGrid, HelpCircle,
  Map, Laptop2, Landmark, LifeBuoy
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
        { id: "cert-st1", name: "Сертификат СТ-1 (СНГ)", desc: "Оформление сертификата формы СТ-1 для беспошлинного экспорта товаров в страны СНГ. Срок оформления от 2 часов при наличии документов." },
        { id: "cert-general", name: "Сертификат Общей формы", desc: "Подтверждение происхождения товара для экспорта во все страны мира (кроме СНГ/Сербии/Вьетнама). Необходим для таможенного оформления." },
        { id: "cert-eav", name: "Сертификат EAV (Вьетнам)", desc: "Сертификат для получения тарифных преференций при экспорте во Вьетнам в рамках зоны свободной торговли ЕАЭС." },
        { id: "cert-st2", name: "Сертификат СТ-2 (Сербия)", desc: "Документ для беспошлинного ввоза российских товаров в Республику Сербия." },
        { id: "cert-forma", name: "Сертификат Форма А (Form A)", desc: "Оформление сертификата для получения преференций в рамках Генеральной системы (в основном для Черногории)." },
        { id: "cert-expert", name: "Экспертиза страны происхождения", desc: "Проведение экспертизы для определения страны происхождения товара (если нет прямых документов от завода) с выдачей акта." },
        { id: "ved-search", name: "Поиск поставщиков в Китае", desc: "Подбор заводов-производителей в КНР по вашему ТЗ. Исключение посредников, запрос каталогов и образцов." },
        { id: "ved-check", name: "Проверка контрагентов (Китай)", desc: "Проверка китайских компаний по официальным реестрам: лицензии, суды, уставной капитал, реальность адреса." },
        { id: "ved-trans", name: "Переводы (Китайский/Английский)", desc: "Письменный перевод контрактов, инструкций, этикеток. Устный перевод на переговорах и в судах. Консульская легализация." },
      ]
    },
    {
      id: "cat-expert",
      title: "Товарная экспертиза",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600",
      services: [
        { id: "exp-quality", name: "Приемка по количеству и качеству", desc: "Независимая приемка партий товара на складе получателя. Фиксация брака, недостачи, пересортицы. Акт экспертизы для выставления претензии поставщику." },
        { id: "exp-44fz", name: "Экспертиза по 44-ФЗ", desc: "Внешняя экспертиза исполнения государственных контрактов. Обязательна для приемки товаров бюджетными учреждениями." },
        { id: "exp-customs", name: "Таможенная экспертиза (Идентификация)", desc: "Идентификация товаров для таможенных целей, описание характеристик, состава, материала. Помощь в спорах с ФТС по кодам ТН ВЭД." },
        { id: "exp-damage", name: "Оценка ущерба (Страховая)", desc: "Оценка ущерба грузу при перевозке, товаров при заливе, пожаре или стихийных бедствиях. Расчет стоимости утраты товарного вида." },
        { id: "exp-judicial", name: "Судебная товароведческая экспертиза", desc: "Экспертиза по определению суда. Рецензирование заключений сторонних экспертов. Споры о защите прав потребителей." },
        { id: "exp-equip", name: "Техническая экспертиза оборудования", desc: "Оценка состояния машин, станков и производственных линий. Определение причин выхода из строя (эксплуатация или брак)." },
      ]
    },
    {
      id: "cat-build",
      title: "Строительство и Недвижимость",
      icon: Hammer,
      color: "bg-orange-50 text-orange-600",
      services: [
        { id: "str-quality", name: "Строительно-техническая экспертиза", desc: "Контроль качества строительно-монтажных работ. Выявление дефектов в новостройках и после ремонта." },
        { id: "str-smeta", name: "Сметная экспертиза", desc: "Проверка сметной документации, актов КС-2/КС-3. Выявление завышения объемов и стоимости работ." },
        { id: "str-house", name: "Обследование зданий и сооружений", desc: "Оценка технического состояния несущих конструкций. Признание домов аварийными или ветхими." },
        { id: "str-flat", name: "Приемка квартир от застройщика", desc: "Помощь в приемке жилья. Составление дефектной ведомости для устранения недостатков застройщиком." },
      ]
    },
    {
      id: "cat-law",
      title: "Юридическая поддержка",
      icon: Scale,
      color: "bg-indigo-50 text-indigo-600",
      services: [
        { id: "law-force", name: "Свидетельствование форс-мажора", desc: "Выдача заключений об обстоятельствах непреодолимой силы для освобождения от ответственности за неисполнение контрактов (санкции, стихийные бедствия)." },
        { id: "law-arbitr", name: "Международный коммерческий арбитраж", desc: "Представительство интересов бизнеса в МКАС при ТПП РФ, арбитражных судах и судах общей юрисдикции. Взыскание долгов, корпоративные споры." },
        { id: "law-contract", name: "Экспертиза контрактов", desc: "Разработка и правовой анализ договоров (в т.ч. внешнеэкономических). Выявление рисков, корректировка условий поставки и ответственности сторон." },
        { id: "law-court", name: "Представительство в суде", desc: "Защита интересов бизнеса в арбитражных судах и судах общей юрисдикции. Взыскание задолженности." },
      ]
    },
    {
      id: "cat-val",
      title: "Оценка собственности",
      icon: Calculator,
      color: "bg-amber-50 text-amber-600",
      services: [
        { id: "val-realty", name: "Оценка недвижимости", desc: "Оценка рыночной стоимости квартир, домов, земельных участков, коммерческих помещений (для ипотеки, залога, продажи)." },
        { id: "val-business", name: "Оценка бизнеса и долей", desc: "Расчет стоимости действующего предприятия, пакетов акций, долей в ООО для продажи или наследства." },
        { id: "val-auto", name: "Оценка транспорта", desc: "Оценка автомобилей, спецтехники, станков и производственных линий. Для лизинга, списания или продажи." },
      ]
    },
    {
      id: "cat-ved",
      title: "ВЭД и Китай",
      icon: Globe,
      color: "bg-red-50 text-red-600",
      services: [
        { id: "ved-search", name: "Поиск поставщиков в Китае", desc: "Подбор заводов-производителей в КНР по вашему ТЗ. Исключение посредников, запрос каталогов и образцов." },
        { id: "ved-check", name: "Проверка контрагентов (Китай)", desc: "Проверка китайских компаний по официальным реестрам: лицензии, суды, капитал." },
        { id: "ved-trans", name: "Переводы (Китайский/Английский)", desc: "Письменный перевод контрактов, инструкций, этикеток. Устный перевод на переговорах и в судах." },
        { id: "ved-customs", name: "Таможенное консультирование", desc: "Подбор кодов ТН ВЭД, расчет таможенных платежей, проверка пакета документов для импорта/экспорта." },
        { id: "ved-missions", name: "Организация бизнес-миссий", desc: "Деловые поездки в Китай (Маньчжурия, Харбин, Пекин, Гуанчжоу). Посещение выставок, B2B переговоры под ключ." },
      ]
    },
    {
      id: "cat-dev",
      title: "Развитие бизнеса",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      services: [
        { id: "dev-hall", name: "Предоставление конференц-зала", desc: "Организация мероприятий на площадке ТПП. Оборудованный зал в центре Читы (проектор, звук, ВКС) для проведения семинаров, собраний и переговоров. Техническое сопровождение." },
        { id: "dev-room", name: "Предоставление переговорной комнаты", desc: "Комфортная комната для конфиденциальных деловых встреч, подписания контрактов и переговоров с партнерами. Вместимость до 10 человек. Чай/кофе, Wi-Fi." },
        { id: "dev-ip", name: "Регистрация товарных знаков", desc: "Проверка бренда, подача заявки в Роспатент, полное сопровождение регистрации бренда. Защита интеллектуальной собственности." },
        { id: "dev-eco", name: "Экологическое проектирование", desc: "Разработка паспортов отходов, проектов ПДВ, отчетность." },
        { id: "dev-sout", name: "СОУТ", desc: "Организация проведения спецоценки рабочих мест." },
      ]
    },
    // 8-й БЛОК: Иконка LifeBuoy
    {
      id: "cat-help",
      title: "Центр поддержки и контакты",
      icon: LifeBuoy,
      color: "bg-blue-50 text-blue-600",
      isAction: true,
      services: [] 
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Полный каталог услуг Забайкальской ТПП | Реестр 2025"
        description="Более 45 видов услуг для бизнеса в Чите: сертификация, экспертиза, оценка, юридическая помощь, переводы, ВЭД с Китаем. Единое окно для предпринимателей."
        keywords="услуги тпп чита, каталог услуг, оценка бизнеса, переводы китайский, соут чита, регистрация товарного знака, строительная экспертиза, аренда зала чита"
      />

      {/* HERO */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/[0.87] to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Каталог услуг <span className="text-yellow-400">Торгово-промышленной палаты</span> Забайкальского края
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Комплексная поддержка вашего бизнеса на всех этапах: от регистрации товарного знака до выхода на международные рынки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleOrderClick('Нужна консультация (общий вопрос)')}
                className="bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-yellow-500 transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
              >
                Получить консультацию
              </button>
            </div>
        </div>
      </section>

      {/* 1. НАВИГАЦИОННАЯ СЕТКА */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <h2 className="text-2xl font-bold text-slate-900 mb-8">Быстрый переход к разделам:</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allCategories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className={`
                    p-6 rounded-2xl bg-white border border-slate-100 
                    shadow-xl shadow-slate-200/60
                    hover:border-slate-200 hover:shadow-2xl hover:shadow-blue-900/5 
                    hover:scale-[1.02] transition-all duration-300 flex flex-col h-full
                    ${cat.isAction ? 'border-dashed border-slate-300 bg-slate-50/50 justify-center items-center text-center cursor-pointer' : ''}
                  `}
                  onClick={cat.isAction ? () => handleOrderClick('Консультация') : undefined}
                >
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

                    {/* 8-й БЛОК */}
                    {cat.isAction && (
                       <>
                         <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50 text-blue-600">
                             <LifeBuoy size={24} strokeWidth={1.5} />
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

      {/* SEO: РАБОТА С РЕГИОНАМИ */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                        Работаем с бизнесом по всей России
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6 text-justify">
                        Торгово-промышленная палата Забайкальского края — ваш надежный представитель на границе с Китаем. Мы помогаем компаниям из <strong>Москвы, Санкт-Петербурга, Новосибирска, Иркутска</strong> и других регионов решать задачи ВЭД, логистики и сертификации без необходимости отправлять сотрудников в командировки.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Map className="text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700"><strong>Присутствие на границе:</strong> Наши эксперты работают в Чите и Забайкальске (МАПП).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Laptop2 className="text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700"><strong>Дистанционный формат:</strong> Обмен документами по ЭДО, отправка оригиналов экспресс-почтой.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Landmark className="text-blue-600 shrink-0 mt-1" />
                            <span className="text-slate-700"><strong>Официальный статус:</strong> Гарантия качества и признания документов государственными органами.</span>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3"></div>
                    <img 
                        src="/ztppv6/images/hero-bg.jpg" 
                        alt="Работа с регионами" 
                        className="relative rounded-3xl shadow-lg object-cover h-80 w-full"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-2xl shadow-xl max-w-xs">
                        <p className="font-bold text-slate-900 text-sm">
                            «Мы стираем границы между регионами, предоставляя качественный сервис там, где это необходимо вашему бизнесу»
                        </p>
                    </div>
                </div>
            </div>
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
                {/* ✅ ИЗМЕНЕНО: Желтый телефон + Текст */}
                <div className="pt-8 border-t border-slate-700">
                  <p className="text-slate-300 text-base mb-4 font-medium">
                    Просто позвоните, и мы поможем решить Ваш вопрос:
                  </p>
                  <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">
                    +7 (924) 373-33-30
                  </a>
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

                  {/* Умный Select */}
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
