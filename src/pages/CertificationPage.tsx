import React, { useState } from 'react';
import { 
  Clock, Calendar, Banknote, Download, CheckCircle2, UploadCloud, 
  Phone, Mail, Globe, CheckCircle, ChevronDown, Check, 
  FileCheck, MessageCircle, ChevronUp, LifeBuoy, MapPin, Shield, Building
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
      countries: 'Китай, Монголия, ОАЭ (Весь мир)',
      purpose: 'Экспорт в Китай и страны дальнего зарубежья. Подтверждение для импорта (Пр. №1341).',
      longDesc: 'Сертификат общей формы - ключевой документ для ВЭД с Китаем. Подтверждает российское происхождение для таможни в Маньчжурии, Тяньцзине и Шанхае. Мы работаем с экспортерами из Москвы, Санкт-Петербурга и Новосибирска, обеспечивая легитимность документов для иностранных банков.',
      icon: Globe
    },
    {
      id: 'st1',
      type: 'СТ-1 (СНГ)',
      countries: 'Казахстан, Беларусь, Узбекистан',
      purpose: 'Беспошлинный ввоз товаров в страны СНГ. Оптимально для поставок из Бурятии и Забайкалья.',
      longDesc: 'Дает право на тарифные преференции. Позволяет вашим партнерам в СНГ (Казахстан, Узбекистан) не платить ввозной налог. Выдаем документ на основе официальной экспертизы ТПП в кратчайшие сроки для грузов со всей РФ.',
      icon: FileCheck
    },
    {
      id: 'eav',
      type: 'EAV (Вьетнам)',
      countries: 'Вьетнам',
      purpose: 'Нулевые пошлины при экспорте в рамках Зоны свободной торговли ЕАЭС-Вьетнам.',
      longDesc: 'Специальный сертификат для работы с рынком Вьетнама. Позволяет российским производителям из любого региона (от Владивостока до Екатеринбурга) обнулять ввозные налоги.',
      icon: Shield
    },
    {
      id: 'st2',
      type: 'СТ-2 (Сербия)',
      countries: 'Республика Сербия',
      purpose: 'Льготный ввоз российской продукции на рынок Сербии.',
      longDesc: 'Документ для реализации режима свободной торговли между РФ и Сербией. Подтверждает статус товара как произведенного в России для получения тарифных преференций.',
      icon: FileCheck
    },
    {
      id: 'forma',
      type: 'Форма "А"',
      countries: 'Черногория',
      purpose: 'Преференции в рамках Генеральной системы (GSP).',
      longDesc: 'Сертификат для получения налоговых льгот при поставках в Черногорию. Оформляется на английском языке экспертами нашей Палаты с соблюдением международных стандартов.',
      icon: Globe
    },
  ];

  const faqs = [
    {
      question: "Как оформить сертификат СТ-1 или Общей формы из Улан-Удэ, Иркутска или Москвы?",
      answer: "Мы работаем дистанционно со всеми регионами России через ЭДО (Диадок). Вам достаточно прислать сканы документов, мы проведем экспертизу, а оригинал сертификата отправим экспресс-почтой в любой город РФ."
    },
    {
      question: "Подходят ли ваши сертификаты для таможни в Китае и Маньчжурии?",
      answer: "Да, Забайкальская ТПП - официальный уполномоченный орган системы ТПП РФ. Наши сертификаты полностью признаются таможенными органами КНР и международными банками."
    },
    {
      question: "Сколько стоит оформление и от чего зависит цена?",
      answer: "Стоимость регламентирована тарифами ТПП РФ. Базовая выдача оригинала - 2288 руб. Итоговая цена зависит от количества позиций в инвойсе и сложности экспертизы происхождения."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Оформить сертификат происхождения СТ-1, Общая форма: Чита, Улан-Удэ, Москва | ТПП"
        description="Официальная выдача сертификатов происхождения (СТ-1, EAV, Общая форма) для экспорта в Китай, СНГ и Вьетнам. Тарифы ТПП РФ. Работаем с Бурятией, Иркутском и всей Россией дистанционно."
        keywords="сертификат происхождения товара цена, оформить ст-1 чита, сертификат происхождения москва, ст-1 иркутск, экспорт в китай документы, сертификат происхождения вьетнам, услуги тпп сертификация, таможенное оформление экспорт"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Сертификация экспорта в Китай и СНГ" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Сертификаты происхождения <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Экспорт в Китай, СНГ и по всему миру</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Официальное подтверждение страны происхождения для таможенных преференций. Работаем с экспортерами из <strong>Москвы, Новосибирска, Иркутска, Улан-Удэ</strong> и всей России.
            </p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Оформить сертификат онлайн
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
                  <item.icon className="text-slate-300" size={22} />
                </div>
                <div className="mb-3">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Регион действия</div>
                  <div className="font-bold text-slate-800 text-sm">{item.countries}</div>
                </div>
                <div className="mb-3 flex-grow">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Применение</div>
                  <div className="text-sm text-slate-600 leading-snug">{item.purpose}</div>
                </div>
                <div className="mt-auto pt-3 border-t border-slate-100">
                   <button 
                     className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                   >
                     Подробнее об экспертизе <ChevronDown size={14} className="ml-1" />
                   </button>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-900 rounded-2xl p-5 shadow-sm flex flex-col justify-center items-center text-center transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-500/10 text-blue-400">
                <LifeBuoy size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Нужна помощь?</h3>
              <p className="text-slate-400 text-xs mb-4">Наши эксперты помогут определить нужный тип сертификата для вашего груза.</p>
              <button onClick={scrollToForm} className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-sm">
                Консультация
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ИНФОРМАЦИЯ О СЕРТИФИКАТАХ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
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
                    <span className="text-lg font-bold text-slate-900">{item.type} - {item.countries}</span>
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
                            Заказать оформление {item.type} →
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ЦИФРЫ И СРОКИ (ВОССТАНОВЛЕННЫЙ БЛОК) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="text-center px-4 pt-4 md:pt-0">
              <Banknote className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                от 2288 ₽ <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Стоимость услуги<br/><span className="text-sm">(согласно тарифам ТПП РФ)</span></p>
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

          <div className="mt-12 max-w-4xl mx-auto text-left">
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-lg align-middle mr-1">*</span> 
              Стоимость и сроки регламентированы Приказом ТПП РФ №14. Итоговые условия зависят от номенклатуры товара и страны назначения. Точную информацию уточнит специалист после анализа документов.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ДОКУМЕНТЫ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center py-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для получения сертификата</h2>
            <p className="text-slate-500">Минимальный перечень документов для экспертизы ТПП</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
            {[
              { name: 'Заявление на выдачу сертификата', req: 'По форме Палаты, с печатью организации', link: true },
              { name: 'Копия экспортного контракта', req: 'Заверенная печатью и подписью', link: false },
              { name: 'Копия счета-фактуры (инвойса)', req: 'С данными о весе и упаковке груза', link: false },
              { name: 'Документы от производителя', req: 'Паспорта качества, ТУ или сертификаты', link: true },
              { name: 'ИНН и ОГРН компании', req: 'Копии при первом обращении', link: false },
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
                   <div className="mt-4 md:mt-0 text-blue-600 font-bold text-xl select-none px-6 py-2">-</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Закажите сертификат онлайн</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте заявку, и мы подготовим все документы для экспорта. Работаем с Бурятией, Забайкальем и всей РФ.
              </p>
              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Проверка документов за 15 минут</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Официальный акт экспертизы ТПП РФ</span>
                </li>
                 <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Консультации по кодам ТН ВЭД</span>
                </li>
              </ul>

              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">
                  Свяжитесь с экспертом по сертификации:
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
                  <label className="block text-sm font-bold mb-2">Организация или ИНН</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="ООО 'Пример'" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Имя</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Ваше имя" />
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
                       <option value="Не знаю">Нужна консультация по выбору</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <ChevronDown size={20} />
                     </div>
                   </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-bold mb-2">Прикрепить скан инвойса или ТЗ</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                    <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
                    <span className="text-sm text-slate-500 font-medium">Для предварительной оценки документов</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-4">
                  Отправить заявку в ТПП
                </button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 7. ГЕОГРАФИЯ (В САМОМ НИЗУ) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">География обслуживания экспортеров</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                        Торгово-промышленная палата Забайкальского края - стратегический партнер для участников ВЭД. Мы находимся в ключевом транспортном узле на границе с КНР (МАПП Забайкальск), что позволяет нам оперативно решать вопросы сертификации для компаний из <strong>Москвы, Санкт-Петербурга, Новосибирска, Иркутска и Улан-Удэ</strong>. 
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

      {/* 8. FAQ */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 text-center">Часто задаваемые вопросы экспортеров</h2>
          
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
