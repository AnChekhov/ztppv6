import React, { useState } from 'react';
import { 
  Globe, Plane, ShieldCheck, Clock, CheckCircle2, 
  ChevronDown, ChevronUp, Mail, Phone, MapPin, 
  Building, MessageCircle, CreditCard, 
  Zap, FileText, Landmark, UserCheck, Download, AlertCircle,
  Briefcase, Microscope, HardHat, Sprout, Timer, Handshake
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

  const scenarios = [
    {
      title: "Скорость",
      desc: "Забудьте об ожидании виз неделями. Возникла проблема с грузом в Китае? Сели в машину или самолет и поехали решать её в тот же день.",
      icon: Timer
    },
    {
      title: "Экономия",
      desc: "Стоимость карты сопоставима с ценой всего 2-3 срочных виз, а действует она 5 лет. Выгода для активного бизнеса очевидна.",
      icon: CreditCard
    },
    {
      title: "Приоритет",
      desc: "Проход границы через выделенные коридоры APEC Lane. Это критически важно в МАПП Забайкальск и крупных хабах, где обычные очереди занимают часы.",
      icon: Zap
    },
    {
      title: "Статус",
      desc: "Карта АТЭС признается международным сообществом как подтверждение надежности партнера. Проверка ведется на уровне МИД и спецслужб.",
      icon: ShieldCheck
    }
  ];

  const countryData = [
    { name: "Китай (КНР)", days: "60 дней", spec: "Направление №1 для Забайкалья. Карта заменяет годовые бизнес-визы, экономя бюджет и время.", icon: Building },
    { name: "Южная Корея", days: "90 дней", spec: "Импорт спецтехники, оборудования, автомобилей. Второй по значимости партнер региона.", icon: Briefcase },
    { name: "Япония", days: "60 дней", spec: "Импорт технологий и оборудования. Карта снимает требование о наличии обязательного гаранта в Японии.", icon: Microscope },
    { name: "Австралия", days: "90 дней", spec: "Высокий интерес со стороны горнодобывающего сектора. Получение визы без карты АТЭС крайне затруднено.", icon: HardHat },
    { name: "Сингапур", days: "60 дней", spec: "Финансовый хаб. Карта дает приоритет Fast Track, что критично в аэропорту Чанги.", icon: Globe },
    { name: "Вьетнам", days: "60 дней", spec: "Важный торговый партнер. Карта дает 2 месяца для полноценных переговоров и инспекций.", icon: Handshake },
    { name: "Тайвань", days: "90 дней", spec: "Импорт микроэлектроники и высокотехнологичного оборудования.", icon: Zap },
    { name: "Таиланд", days: "90 дней", spec: "Сотрудничество в сферах легкой промышленности, туризма и агробизнеса.", icon: Sprout }
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
        title="Карта АТЭС: безвизовый Китай на 5 лет, Fast Track | ТПП Забайкалье"
        description="Официальное оформление карт АТЭС для бизнеса. Приоритетный проход МАПП Забайкальск. 18 стран без виз. Статус проверенного партнера МИД РФ."
        keywords="карта атэс чита оформить, безвизовый въезд китай бизнес, дипломатический коридор мапп забайкальск, карта апек fast track, бизнес виза китай на 5 лет, ТПП услуги вэд"
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Бизнес-мобильность в Азии" className="w-full h-full object-cover" />
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
               <span className="text-yellow-400 text-3xl md:text-5xl">Ваш безвизовый Fast Track в 18 стран Азии</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Оформление через официального оператора - ТПП Забайкальского края. Решайте вопросы в <strong>Китае, Вьетнаме и Корее</strong> без визовых барьеров и очередей на границе.
            </p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Начать оформление через ТПП
              </button>
            </div>
        </div>
      </section>

      {/* 2. СЦЕНАРИИ ИСПОЛЬЗОВАНИЯ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Зачем это нужно вашему бизнесу?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Конкретные преимущества, которые заменяют абстрактные обещания.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group text-left">
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

      {/* 3. ГЕОГРАФИЯ ВОЗМОЖНОСТЕЙ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">География возможностей: 18 стран без виз</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {countryData.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-5 items-start hover:border-blue-200 transition-all">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{item.days}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.spec}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Промежуточный выпуск карты</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-3xl">
                  Вам не нужно ждать одобрения всех 18 стран. Если вам срочно необходим выезд, например, в Китай - мы поможем выпустить промежуточную карту сразу после получения разрешения от КНР. Позже карта будет перевыпущена со всем списком стран бесплатно.
                </p>
             </div>
             <Globe size={180} className="absolute -bottom-10 -right-10 text-white/10" />
          </div>
        </div>
      </section>

      {/* 4. ТРЕБОВАНИЯ И ДОКУМЕНТЫ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Условия оформления</h2>
            <p className="text-slate-500">Минимальные требования МИД РФ для получения карты.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/2 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                      <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Официальный бизнес-статус</h4>
                    <p className="text-slate-600 text-sm text-justify">Карта выдается собственникам бизнеса, индивидуальным предпринимателям или штатным сотрудникам компаний, ведущих внешнеэкономическую деятельность.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
                      <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Загранпаспорт РФ</h4>
                    <p className="text-slate-600 text-sm text-justify">Карта привязывается к номеру паспорта. Мы рекомендуем иметь документ со сроком действия не менее 3-5 лет для максимальной эффективности.</p>
                  </div>
                </div>
                <div className="flex gap-4 border-l-4 border-yellow-400 pl-6 py-2">
                  <div>
                    <h4 className="font-bold text-lg mb-1">Отсутствие судимости</h4>
                    <p className="text-slate-600 text-sm text-justify">Обязательное требование для согласования миграционными службами и спецслужбами всех 18 стран-участниц форума АТЭС.</p>
                  </div>
                </div>
             </div>
             
             <div className="lg:w-1/2 bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Этапы оформления</h3>
                    <div className="space-y-6">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="text-yellow-400 font-black text-3xl leading-none">{idx + 1}</div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Building size={200} className="absolute -bottom-20 -right-20 text-white/5" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Начните оформление</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Оставьте заявку, и мы проведем предварительный аудит вашей деятельности на соответствие критериям АТЭС. Консультируем бизнес из <strong>Читы, Улан-Удэ, Иркутска, Москвы</strong> и всей РФ.
              </p>
              <div className="pt-8 border-t border-slate-700">
                {/* ✅ ИЗМЕНЕНО: Стандартная надпись */}
                <p className="text-slate-300 text-base mb-4 font-medium">Просто позвоните, и мы поможем решить Ваш вопрос:</p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Организация или ИНН" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all mt-4">Получить условия оформления</button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
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

      {/* 7. ГЕОГРАФИЯ (SEO БЛОК) */}
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
                        <h3 className="text-2xl font-bold mb-4 italic">«Карта АТЭС - это высшая степень свободы для международного бизнеса и самый быстрый путь к партнерам в Азиатско-Тихоокеанском регионе»</h3>
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
