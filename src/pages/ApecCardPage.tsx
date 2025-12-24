import React, { useState } from 'react';
import { 
  Globe, Plane, ShieldCheck, Clock, CheckCircle2, 
  ChevronDown, ChevronUp, Mail, Phone, MapPin, 
  Building, MessageCircle, CreditCard, 
  Zap, FileText, Landmark, UserCheck, Download, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const ApecCardPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      title: "18 стран без виз",
      desc: "Свободный въезд в Китай, Вьетнам, Корею и еще 15 экономик АТР на 5 лет.",
      icon: Globe
    },
    {
      title: "МАПП Забайкальск",
      desc: "Приоритетный проход через дипломатические коридоры на сухопутной границе и в аэропортах.",
      icon: MapPin
    },
    {
      title: "Промежуточный выпуск",
      desc: "Возможность получить карту сразу после одобрения КНР, не дожидаясь ответов от других стран.",
      icon: Zap
    },
    {
      title: "Статус участника ВЭД",
      desc: "Карта подтверждает надежность вашего бизнеса на уровне МИД РФ и международных спецслужб.",
      icon: ShieldCheck
    }
  ];

  const countries = [
    "Австралия", "Бруней", "Вьетнам", "Гонконг", "Индонезия", "Китай", 
    "Корея", "Малайзия", "Мексика", "Новая Зеландия", "Папуа-Новая Гвинея", 
    "Перу", "Сингапур", "Тайвань", "Таиланд", "Филиппины", "Чили", "Япония"
  ];

  const processSteps = [
    { title: "Анализ деятельности", desc: "Проверяем соответствие заявителя критериям МИД РФ (ИП или сотрудник ООО, ВЭД-активность)." },
    { title: "Пакет документов", desc: "Помогаем собрать справку об отсутствии судимости, ходатайство Палаты и анкеты." },
    { title: "Согласование МИД", desc: "Направляем документы в Москву для первичной проверки и передачи данных странам АТЭС." },
    { title: "Pre-clearance", desc: "Параллельная проверка кандидата миграционными службами 18 стран (от 2 до 6 месяцев)." },
    { title: "Получение карты", desc: "Выдача физической карты. При необходимости - выпуск промежуточной карты для срочных поездок." }
  ];

  const faqs = [
    {
      question: "Какое время можно находиться в Китае по карте АТЭС?",
      answer: "Карта позволяет находиться в КНР до 60 дней за один въезд. Количество въездов в течение 5 лет не ограничено."
    },
    {
      question: "Можно ли оформить карту из Иркутска, Улан-Удэ или Москвы?",
      answer: "Да, мы работаем дистанционно. Забайкальская ТПП как пограничный узел имеет огромный опыт работы с Китаем, поэтому к нам обращаются предприниматели со всей России."
    },
    {
      question: "Что делать при смене загранпаспорта?",
      answer: "Карта АТЭС привязана к номеру паспорта. При получении нового загранпаспорта карту необходимо перевыпускать. Рекомендуем оформлять ее на паспорт с большим сроком действия."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Карта АТЭС в Чите: безвизовый Китай на 5 лет | ТПП Забайкальского края"
        description="Официальное оформление карт АТЭС для бизнеса. 18 стран без виз, дипломатический коридор в МАПП Забайкальск. Работаем с Бурятией, Иркутском и всей РФ."
        keywords="карта атэс оформить чита, бизнес виза китай на 5 лет, карта апек цена, безвизовый въезд китай предприниматели, забайкальская тпп услуги вэд, мапп забайкальск fast track"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "Содействие в получении карты АТЭС",
          "provider": {
            "@type": "GovernmentOrganization",
            "name": "Забайкальская ТПП",
            "address": "г. Чита, ул. Бутина, 111"
          },
          "areaServed": "Российская Федерация",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "45000",
            "priceCurrency": "RUB"
          }
        })}
      </script>

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Бизнес-поездки в Китай" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[
                  { label: 'Услуги', path: '/services' },
                  { label: 'ВЭД и Китай', path: '/ved' },
                  { label: 'Карта АТЭС' }
                ]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Карта АТЭС в Забайкалье <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Ваш безвизовый пропуск в Азию на 5 лет</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Официальное оформление через ТПП Забайкальского края. Решайте вопросы в <strong>Китае, Вьетнаме и Корее</strong> без визовых барьеров и очередей на границе.
            </p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Оформить через ТПП
              </button>
            </div>
        </div>
      </section>

      {/* 2. ТАРИФЫ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Стоимость сопровождения</h2>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-slate-50 p-8 rounded-3xl border-2 border-blue-600 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">Выгодно</div>
                <h3 className="text-xl font-bold mb-2">Для членов ТПП</h3>
                <div className="text-4xl font-black text-blue-600 mb-4">45 000 ₽</div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">Эксклюзивный тариф для компаний и ИП, состоящих в Союзе «ТПП Забайкальского края».</p>
                <Link to="/membership" className="text-blue-600 font-bold text-sm hover:underline">Как вступить в Палату? -{'>'}</Link>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Базовый тариф</h3>
                <div className="text-4xl font-black text-slate-900 mb-4">65 000 ₽</div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">Рыночная стоимость для организаций, не являющихся членами системы ТПП РФ.</p>
                <button onClick={scrollToForm} className="text-slate-900 font-bold text-sm hover:underline text-left">Заказать оформление -{'>'}</button>
             </div>
          </div>
          <p className="mt-8 text-xs text-slate-400 text-center">
            * В стоимость входит: аудит документов, подготовка ходатайства, отправка в МИД РФ и мониторинг статуса одобрения всеми 18 странами.
          </p>
        </div>
      </section>

      {/* 3. КРИТЕРИИ И ПРОЦЕСС */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Кому подходит карта?</h2>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                         <UserCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Руководители и ИП</h4>
                        <p className="text-slate-600 text-sm">Карта выдается собственникам и сотрудникам, чьи поездки имеют деловой характер.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                         <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Загранпаспорт РФ</h4>
                        <p className="text-slate-600 text-sm">Срок действия паспорта должен быть не менее 3 лет для максимальной пользы от карты.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-blue-600">
                         <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Справка об отсутствии судимости</h4>
                        <p className="text-slate-600 text-sm">Обязательное требование МИД РФ и принимающих стран Азиатско-Тихоокеанского региона.</p>
                      </div>
                   </div>
                </div>
                
                <h3 className="text-2xl font-extrabold text-slate-900 mt-12 mb-6">Процесс оформления</h3>
                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="font-black text-blue-600/20 text-4xl leading-none">{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-slate-900">{step.title}</h4>
                        <p className="text-slate-500 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="lg:w-1/2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold mb-6">Необходимые документы</h3>
                <div className="space-y-4 mb-8">
                   {[
                     "Заявление (установленного образца)",
                     "Копия всех страниц загранпаспорта",
                     "Копия паспорта РФ (с пропиской)",
                     "Справка об отсутствии судимости",
                     "Учетная карточка предприятия",
                     "Цветное матовое фото 4х6"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                        <CheckCircle2 size={18} className="text-green-500" /> {item}
                     </div>
                   ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
                   <Download size={20} /> Скачать пакет бланков (ZIP)
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 4. ПРЕИМУЩЕСТВА */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-600 text-white group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. СПИСОК СТРАН */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">18 стран безвизового доступа</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
            {countries.map((country, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{country}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-400 text-xs italic">
            * США и Канада участвуют в системе как переходные члены: карта дает право на приоритетный проход Fast Track, но требуется виза.
          </p>
        </div>
      </section>

      {/* 6. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Начните оформление</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Оставьте заявку, и мы проведем предварительный аудит вашей деятельности на соответствие критериям АТЭС. Консультируем бизнес из <strong>Читы, Улан-Удэ, Иркутска, Москвы</strong> и всей РФ.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">Контактная линия ВЭД:</p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="ФИО или Название организации" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Должность" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all mt-4">Получить условия оформления</button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Вопросы и ответы</h2>
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
                  {openFaq === index ? <ChevronUp className="text-blue-600"/> : <ChevronDown className="text-slate-400"/>}
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

      {/* 8. ГЕОГРАФИЯ (SEO БЛОК) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Деловая мобильность по всей РФ</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                        Забайкальская ТПП является официальным проводником в получении карт АТЭС. Мы помогаем компаниям из <strong>Читы, Улан-Удэ, Иркутска, Москвы и Новосибирска</strong> получить доступ к глобальному рынку. Наш опыт работы в приграничном регионе позволяет максимально быстро проходить этапы согласования.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-600" /> Официально через МИД РФ
                        </div>
                        <div className="flex items-center gap-2">
                            <Building size={16} className="text-blue-600" /> Подтверждение статуса ТПП
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-blue-600" /> Безвизовый Китай на 5 лет
                        </div>
                        <div className="flex items-center gap-2">
                            <Plane size={16} className="text-blue-600" /> Весь мир без очередей
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden h-80 flex flex-col justify-center">
                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-4 italic">«Карта АТЭС - это высшая степень свободы для международного бизнеса и самый быстрый путь к партнерам в АТР»</h3>
                    </div>
                    <Building size={180} className="absolute -bottom-12 -right-12 text-white/10" />
                    <Globe size={180} className="absolute -top-12 -left-12 text-white/5" />
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ApecCardPage;
