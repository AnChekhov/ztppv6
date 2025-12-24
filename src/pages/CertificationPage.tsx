import React, { useState } from 'react';
import { 
  Clock, Calendar, Banknote, Download, CheckCircle2, UploadCloud, 
  Phone, Mail, Globe, CheckCircle, ChevronDown, Check, 
  FileCheck, MessageCircle, ChevronUp, LifeBuoy, MapPin, Shield, Building, Scale, Ship
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const CertificationPage: React.FC = () => {
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
      countries: 'Китай, ОАЭ, Индия, Турция',
      purpose: 'Экспорт во все страны мира. Подтверждение страны производства согласно Закону РФ № 5340-1.',
      longDesc: 'Сертификат общей формы подтверждает российское происхождение продукции для таможни в Маньчжурии, Пекине и других мировых хабах. Наши акты полностью соответствуют правилам нетарифного регулирования и принимаются иностранными банками для открытия аккредитивов.',
      icon: Globe
    },
    {
      id: 'st1',
      type: 'СТ-1 (СНГ / Гособоронзаказ)',
      countries: 'Казахстан, Беларусь, Узбекистан',
      purpose: 'Беспошлинная торговля в СНГ и подтверждение происхождения для закупок по 44-ФЗ и 223-ФЗ.',
      longDesc: 'Обеспечивает освобождение от ввозных пошлин. С 1 сентября 2025 года форма СТ-1 остается ключевым документом для допуска товаров к государственным закупкам на территории РФ, подтверждая статус отечественного производителя.',
      icon: FileCheck
    },
    {
      id: 'import-1341',
      type: 'Импорт (Пост. № 1341)',
      countries: 'Ввозимые товары в РФ',
      purpose: 'Верификация продукции из «недружественных» стран и легализация параллельного импорта.',
      longDesc: 'Новый вектор контроля импорта согласно Постановлению Правительства № 1341. Сертификат позволяет импортерам легализовать происхождение товара из «нейтральных» стран, избегая повышенных заградительных пошлин на электронику и оборудование (группа 84 ТН ВЭД).',
      icon: Shield
    },
    {
      id: 'st3',
      type: 'СТ-3 (Иран)',
      countries: 'Иран',
      purpose: 'Тарифные преференции в рамках соглашения о свободной торговле с Ираном.',
      longDesc: 'Актуальная форма для бизнеса, использующего южный логистический коридор. Обеспечивает льготный режим налогообложения при поставках продукции на иранский рынок.',
      icon: Ship
    },
    {
      id: 'eav',
      type: 'EAV (Вьетнам)',
      countries: 'Вьетнам',
      purpose: 'Нулевые или сниженные пошлины в рамках Зоны свободной торговли ЕАЭС-Вьетнам.',
      longDesc: 'Специальный сертификат для экспорта во Вьетнам. Позволяет обнулять ввозные налоги для производителей из Бурятии, Забайкалья и других регионов России.',
      icon: Shield
    },
  ];

  const faqs = [
    {
      question: "Как оформить сертификат по Постановлению № 1341 на импорт?",
      answer: "Для получения сертификата на ввозимые товары необходимо пройти процедуру идентификации. ТПП выдает документ на основании иностранного сертификата или декларации производителя. Это позволяет избежать заградительных пошлин с 6 октября 2025 года."
    },
    {
      question: "Что такое критерий «достаточной переработки»?",
      answer: "Это условие, при котором товар считается произведенным в РФ. Основные критерии: изменение кода ТН ВЭД на уровне первых 4 знаков или выполнение правила адвалорной доли (стоимость импортного сырья не превышает установленный % от цены)."
    },
    {
      question: "Работаете ли вы с компаниями из Москвы или Новосибирска?",
      answer: "Да, мы являемся уполномоченным органом системы ТПП РФ. Благодаря электронному документообороту (ЭДО) и статусу приграничной палаты, мы оформляем сертификаты для экспортеров и импортеров со всей России."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Оформить сертификат происхождения СТ-1, СТ-3, Общая форма | ТПП РФ"
        description="Официальная выдача сертификатов происхождения для экспорта (Китай, СНГ, Иран) и импорта (Постановление 1341). Работаем со всеми регионами РФ дистанционно. Выдача от 2 часов."
        keywords="сертификат происхождения товара, постановление 1341 сертификат, ст-1 заказать, ст-3 иран оформить, сертификат происхождения москва, экспертиза тпп страна происхождения"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "Оформление сертификата происхождения товара",
          "provider": {
            "@type": "GovernmentOrganization",
            "name": "Забайкальская ТПП",
            "address": "г. Чита"
          },
          "areaServed": ["Забайкальский край", "Республика Бурятия", "Китай", "Монголия", "РФ"],
          "audience": "Участники ВЭД, экспортеры",
          "offers": {
            "@type": "Offer",
            "price": "2288",
            "priceCurrency": "RUB"
          }
        })}
      </script>
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Федеральная система сертификации ТПП" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[
                  { label: 'Услуги', path: '/services' },
                  { label: 'Сертификация' }
                ]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Сертификаты происхождения <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Экспертиза для экспорта и импорта по всей РФ</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Официальный уполномоченный орган системы ТПП РФ. Подтверждение страны производства согласно <strong>Закону РФ № 5340-1</strong>. Легализация импорта по <strong>Постановлению № 1341</strong>.
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
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Выберите нужную форму сертификата</h2>
          
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
                     Подробнее об условиях <ChevronDown size={14} className="ml-1" />
                   </button>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-900 rounded-2xl p-5 shadow-sm flex flex-col justify-center items-center text-center transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-500/10 text-blue-400">
                <LifeBuoy size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Нужна консультация?</h3>
              <p className="text-slate-400 text-xs mb-4">Наши эксперты помогут подобрать форму документа под ваше Постановление или Контракт.</p>
              <button onClick={scrollToForm} className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-sm">
                Связаться с экспертом
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ДЕТАЛЬНОЕ ОПИСАНИЕ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">
            Функциональная специфика сертификатов
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
                    <span className="text-lg font-bold text-slate-900">{item.type}</span>
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
                            Заказать оформление {item.type} -{'>'}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ЦИФРЫ И СРОКИ */}
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
              Стоимость и сроки регламентированы Приказом ТПП РФ №14. Итоговая цена зависит от количества позиций в партии и сложности определения критериев достаточной переработки. Работаем по всей России.
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
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-white last:border-0 hover:bg-blue-50/30 transition-colors">
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
                    Скачать образец
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
              <p className="text-slate-300 text-lg mb-8 text-justify">
                Оставьте заявку, и мы подготовим документы для экспорта в Китай, СНГ или легализуем ваш импорт согласно Постановлению № 1341. Работаем со всеми регионами РФ.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">Просто позвоните, и мы поможем решить Ваш вопрос:</p>
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
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Организация или ИНН" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Ваше имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+7 (___) ___-__-__" />
                </div>

                <div>
                   <label className="block text-sm font-bold mb-2">Форма сертификата</label>
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
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Часто задаваемые вопросы</h2>
          
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
                  <p className="text-slate-600 leading-relaxed text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ГЕОГРАФИЯ (В САМОМ НИЗУ) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">География обслуживания экспортеров</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify text-sm md:text-base">
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
                            <MapPin size={16} className="text-blue-600" /> Работа через ЭДО
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Globe size={16} className="text-blue-600" /> Экспорт и Импорт
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden h-80 flex flex-col justify-center shadow-inner">
                    <div className="relative z-10">
                        <p className="text-xl font-bold mb-2">Почему выбирают нас?</p>
                        <p className="text-blue-100 text-sm">Мы находимся в ключевом регионе для торговли с КНР. Наши эксперты знают специфику китайской таможни и помогают правильно оформить документы даже для самых сложных категорий товаров.</p>
                    </div>
                    <Building size={150} className="absolute -bottom-10 -right-10 text-white/10" />
                    <Globe size={150} className="absolute -top-10 -left-10 text-white/5" />
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default CertificationPage;
