import React, { useState } from 'react';
import { 
  Clock, Calendar, Banknote, Download, CheckCircle2, UploadCloud, 
  Phone, Mail, Globe, CheckCircle, ChevronDown, Check, 
  FileCheck, MessageCircle, ChevronUp, LifeBuoy, MapPin
} from 'lucide-react';
import SEO from '../components/SEO';

export const CertificationPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>('Общая форма');
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

  const handleOrderClick = (type: string) => {
    setSelectedType(type);
    scrollToForm();
  };

  const handleDescriptionClick = (id: string) => {
    setExpandedDetail(id);
    setTimeout(() => {
      const element = document.getElementById(`detail-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const certTypes = [
    {
      id: 'general',
      type: 'Общая форма',
      countries: 'Весь мир (Китай, ОАЭ, Индия)',
      purpose: 'Подтверждение страны происхождения для таможенных целей и банков.',
      longDesc: 'Сертификат общей формы необходим для экспорта товаров во все страны, не входящие в соглашения о преференциях. Активно используется для подтверждения происхождения при поставках в Китай, ОАЭ, Турцию. Наши акты принимаются таможнями во Владивостоке, Новороссийске и Москве.',
      icon: Globe
    },
    {
      id: 'st1',
      type: 'СТ-1',
      countries: 'Страны СНГ',
      purpose: 'Освобождение от уплаты ввозной пошлины в странах Содружества.',
      longDesc: 'Основной документ для беспошлинной торговли со странами СНГ (Казахстан, Узбекистан, Беларусь и др.). Позволяет импортеру в стране назначения не платить пошлину, что делает ваш товар конкурентоспособным. Выдаем на основе экспертизы в соответствии с Правилами 2009 года.',
      icon: FileCheck
    },
    {
      id: 'eav',
      type: 'EAV',
      countries: 'Вьетнам',
      purpose: 'Тарифные льготы при экспорте в Социалистическую Республику Вьетнам.',
      longDesc: 'Сертификат в рамках зоны свободной торговли между ЕАЭС и Вьетнамом. Позволяет значительно снизить или полностью обнулить ставки таможенных пошлин при ввозе российской продукции на рынок Вьетнама.',
      icon: Shield
    },
    {
      id: 'st2',
      type: 'СТ-2',
      countries: 'Сербия',
      purpose: 'Преференции при ввозе товаров в Республику Сербия.',
      longDesc: 'Документ, подтверждающий российское происхождение товара для предоставления тарифных льгот в Сербии в рамках двустороннего соглашения о свободной торговле.',
      icon: FileCheck
    },
    {
      id: 'forma',
      type: 'Форма "А"',
      countries: 'Черногория',
      purpose: 'Снижение пошлин в рамках Генеральной системы преференций.',
      longDesc: 'Специальный вид сертификата для экспорта в Черногорию. Заполняется на английском языке. Подтверждает соответствие критериям происхождения для получения льготного режима налогообложения.',
      icon: Globe
    },
  ];

  const faqs = [
    {
      question: "Как оформить сертификат СТ-1 дистанционно из другого региона?",
      answer: "Забайкальская ТПП работает со всеми регионами России (Москва, Екатеринбург, Новосибирск и др.) через электронный документооборот (ЭДО). Вам достаточно прислать сканы документов, мы проведем экспертизу, а оригинал сертификата отправим экспресс-почтой в любой город РФ."
    },
    {
      question: "Подходят ли ваши сертификаты для таможни в Китае?",
      answer: "Да, Забайкальская ТПП — официальный уполномоченный орган. Наши сертификаты (Общей формы и др.) полностью признаются таможенными органами КНР и международными банками для открытия аккредитивов."
    },
    {
      question: "Нужен ли оригинал сертификата для прохождения границы?",
      answer: "Да, для получения таможенных преференций (скидок на пошлины) в стране назначения обычно требуется оригинал документа с печатью Торгово-промышленной палаты."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Сертификат происхождения СТ-1, EAV: Москва, Чита, Иркутск | ТПП РФ"
        description="Официальная выдача сертификатов происхождения для экспорта в Китай, СНГ и Вьетнам. Работаем дистанционно со всеми регионами России: от Владивостока до Москвы. Выдача от 2 часов."
        keywords="сертификат происхождения товара, сертификат ст-1 оформить, экспорт в китай документы, сертификат происхождения москва, ст-1 новосибирск, ТПП сертификация экспорт, таможенные льготы"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Сертификаты происхождения для экспорта" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Сертификаты происхождения <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Экспорт в Китай, СНГ и Вьетнам</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Официальное подтверждение происхождения для таможенных преференций. Работаем с компаниями из <strong>Москвы, Новосибирска, Иркутска, Владивостока</strong> и всей России. Дистанционная подача через ЭДО.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Заказать сертификат
              </button>
              <button 
                onClick={scrollToForm}
                className="border-2 border-slate-600 hover:border-white text-white font-semibold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} />
                Консультация по ВЭД
              </button>
            </div>
        </div>
      </section>

      {/* 2. ТИПЫ СЕРТИФИКАТОВ */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Выберите нужный тип сертификата</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certTypes.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleDescriptionClick(item.id)}
                className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 ease-out hover:shadow-blue-900/5 hover:scale-[1.03] flex flex-col cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xl font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg whitespace-nowrap group-hover:bg-blue-600 group-hover:text-white transition-colors">{item.type}</span>
                  <Globe className="text-slate-300" size={22} />
                </div>
                <div className="mb-3">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Направление</div>
                  <div className="font-bold text-slate-800 text-sm">{item.countries}</div>
                </div>
                <div className="mb-3 flex-grow">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Цель документа</div>
                  <div className="text-sm text-slate-600 leading-snug">{item.purpose}</div>
                </div>
                <div className="mt-auto pt-3 border-t border-slate-100">
                   <button 
                     className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                   >
                     Подробнее <ChevronDown size={14} className="ml-1" />
                   </button>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-900 rounded-2xl p-5 shadow-sm flex flex-col justify-center items-center text-center transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-500/10 text-blue-400">
                <LifeBuoy size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Нужна помощь?</h3>
              <p className="text-slate-400 text-xs mb-4">Наши эксперты помогут определить нужный тип сертификата для вашего контракта.</p>
              <button onClick={scrollToForm} className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-sm">
                Получить помощь
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ГЕОГРАФИЯ И ПРЕИМУЩЕСТВА (SEO БЛОК) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Работаем с экспортерами по всей России</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Забайкальская ТПП — это ваше «окно» на Восток. Благодаря нашему приграничному положению и штату аттестованных экспертов, мы обеспечиваем самую быструю выдачу сертификатов для компаний из <strong>Москвы, Санкт-Петербурга, Новосибирска, Иркутска и Улан-Удэ</strong>. 
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Официальный орган ТПП РФ
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Весь спектр ВЭД услуг
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Работа через ЭДО / Скан-копии
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Globe size={16} className="text-blue-600" /> Экспресс-доставка оригиналов
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-xl font-bold mb-2">Почему выбирают нас?</p>
                        <p className="text-blue-100 text-sm">Мы находимся в ключевом регионе для торговли с КНР. Наши эксперты знают специфику китайской таможни и помогают правильно оформить документы даже для самых сложных категорий товаров.</p>
                    </div>
                    <Globe size={150} className="absolute -bottom-10 -right-10 text-white/10" />
                </div>
            </div>
        </div>
      </section>

      {/* 4. ИНФОРМАЦИЯ О СЕРТИФИКАТАХ */}
      <section className="pt-0 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">
            Информация о сертификатах
          </h2>
          <div className="space-y-4">
            {certTypes.map((item) => (
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
                       <FileCheck size={24} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">{item.type} — {item.countries}</span>
                  </div>
                  {expandedDetail === item.id ? <ChevronUp className="text-blue-600"/> : <ChevronDown className="text-slate-400"/>}
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${expandedDetail === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {item.longDesc}
                    <div className="mt-4">
                        <button 
                            onClick={() => handleOrderClick(item.type)}
                            className="text-sm font-bold text-blue-600 hover:text-yellow-600 transition-colors"
                        >
                            Заказать сертификат {item.type} →
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ЦИФРЫ И СРОКИ */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="text-center px-4 pt-4 md:pt-0">
              <Banknote className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                от 2288 ₽ <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Стоимость услуги<br/><span className="text-sm">(зависит от вида товара)</span></p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <Clock className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                за 2 часа <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Срок оформления<br/><span className="text-sm">(после подачи документов)</span></p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <Calendar className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                12 месяцев <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Срок действия<br/><span className="text-sm">(с даты выдачи)</span></p>
            </div>
          </div>
          <p className="text-xs text-center text-slate-400 mt-10">* Точные условия уточнит специалист после анализа вашей номенклатуры.</p>
        </div>
      </section>

      {/* 6. ДОКУМЕНТЫ */}
      <section className="pt-0 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center py-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для проведения экспертизы</h2>
            <p className="text-slate-500">Минимальный пакет документов для начала работы</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
            {[
              { name: 'Заявление на выдачу сертификата', req: 'Заполняется по форме, печать организации', link: true },
              { name: 'Копия экспортного контракта', req: 'Заверенная печатью и подписью', link: false },
              { name: 'Копия счета-фактуры (инвойса)', req: 'Заверенная печатью и подписью', link: false },
              { name: 'Письмо от производителя', req: 'Подтверждение производства в РФ с долей сырья', link: true },
              { name: 'Учредительные документы', req: 'Копии ОГРН, ИНН, Устава (для первой подачи)', link: false },
            ].map((doc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-slate-100 last:border-0 hover:bg-blue-50/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-1 md:mt-0">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{doc.name}</h4>
                    <p className="text-slate-500 text-sm">{doc.req}</p>
                  </div>
                </div>
                
                {doc.link ? (
                  <a href="#" className="mt-4 md:mt-0 flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors whitespace-nowrap bg-blue-50 px-4 py-2 rounded-lg">
                    <Download size={16} className="mr-2" />
                    Скачать бланк
                  </a>
                ) : (
                   <div className="mt-4 md:mt-0 text-blue-600 font-bold text-xl select-none px-6 py-2">—</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Закажите сертификат онлайн</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте заявку, и мы подготовим все документы для получения таможенных преференций. Работаем со всеми регионами РФ.
              </p>
              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Быстрая проверка документов онлайн</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Расчет точной стоимости за 15 минут</span>
                </li>
                 <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Помощь в определении кода ТН ВЭД</span>
                </li>
              </ul>

              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">
                  Просто позвоните, и мы поможем решить Ваш вопрос:
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
                <div>
                  <label className="block text-sm font-bold mb-2">Название организации</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="ООО 'Пример'" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">ИНН</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="1234567890" />
                  </div>
                   <div>
                    <label className="block text-sm font-bold mb-2">Телефон</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-bold mb-2">Тип сертификата</label>
                   <div className="relative">
                     <select 
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer appearance-none text-slate-700"
                     >
                       {certTypes.map(c => (
                         <option key={c.id} value={c.type}>{c.type}</option>
                       ))}
                       <option value="Не знаю">Не знаю, нужна консультация</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <ChevronDown size={20} />
                     </div>
                   </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-bold mb-2">Прикрепите документы</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                    <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
                    <span className="text-sm text-slate-500 font-medium">Прикрепите скан инвойса или ТЗ</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-4">
                  Отправить заявку
                </button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ */}
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

export default CertificationPage;
