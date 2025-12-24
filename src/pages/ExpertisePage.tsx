import React, { useState } from 'react';
import { 
  ClipboardCheck, Scale, Gavel, Truck, Factory, FileText, 
  Phone, Mail, CheckCircle, ChevronDown, UploadCloud, 
  MapPin, Clock, ShieldCheck, Check, Globe, Download, 
  CheckCircle2, MessageCircle, ChevronUp, Info, Building, LifeBuoy
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export const ExpertisePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<string>('Приемка по количеству и качеству');
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
    setSelectedExpertise(title);
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

  const expertiseServices = [
    {
      id: 'quality',
      title: 'Приемка по количеству и качеству',
      shortDesc: 'Фиксация фактического состояния груза при выгрузке на СВХ или складе получателя.',
      longDesc: 'Независимая приемка товаров народного потребления, оборудования и сырья. Эксперт фиксирует повреждения упаковки, пересортицу и брак в момент выгрузки. Акт экспертизы ТПП является безальтернативным доказательством для выставления претензии поставщику (в т.ч. иностранному) и страхового возмещения.',
      icon: Truck
    },
    {
      id: '44fz',
      title: 'Экспертиза по 44-ФЗ и 223-ФЗ',
      shortDesc: 'Внешняя экспертиза исполнения госконтрактов для бюджетных учреждений региона.',
      longDesc: 'Обязательный этап приемки товаров, работ или услуг для государственных заказчиков согласно ч. 3 ст. 94 Федерального закона № 44-ФЗ. Наши эксперты верифицируют соответствие поставки условиям технического задания, гарантируя целевое использование бюджетных средств.',
      icon: FileText
    },
    {
      id: 'customs',
      title: 'Таможенная экспертиза (ТН ВЭД)',
      shortDesc: 'Идентификация товара для таможенных целей, описание характеристик и состава.',
      longDesc: 'Идентификационная экспертиза для целей таможенного оформления. Помогаем правильно определить код ТН ВЭД ЕАЭС, что влияет на размер пошлин. Проводим оценку износа б/у оборудования и подтверждаем технические характеристики для ФТС России.',
      icon: Globe
    },
    {
      id: 'damage',
      title: 'Оценка ущерба (Судебная)',
      shortDesc: 'Фиксация повреждений имущества при ДТП, пожаре, заливе или перевозке.',
      longDesc: 'Профессиональная оценка стоимости восстановительного ремонта и размера реального ущерба. Заключения экспертов Палаты принимаются судами всех инстанций Забайкальского края и Бурятии как официальное доказательство.',
      icon: ShieldCheck
    },
    {
      id: 'equipment',
      title: 'Экспертиза оборудования',
      shortDesc: 'Техническое состояние машин для списания, продажи или передачи в лизинг.',
      longDesc: 'Техническая экспертиза производственных линий, сельхозтехники и машин. Определение причин поломок (заводской дефект или нарушение эксплуатации) и расчет степени физического износа основных средств.',
      icon: Factory
    },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Товарная экспертиза по 44-ФЗ, ТН ВЭД, Приемка товаров | ТПП Забайкалье"
        description="Проведение независимой экспертизы товаров: приемка по качеству, экспертиза госконтрактов 44-ФЗ, оценка ущерба имущества. Аккредитованные эксперты ТПП РФ."
        keywords="товарная экспертиза чита, экспертиза 44-фз заказать, оценка ущерба после дтп чита, идентификация тн вэд, акт тпп приемка товаров"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "Независимая товарная экспертиза",
          "provider": {
            "@type": "GovernmentOrganization",
            "name": "Забайкальская ТПП",
            "address": "г. Чита"
          },
          "areaServed": ["Забайкальский край", "Республика Бурятия", "Иркутская область"],
          "audience": "Государственные заказчики, участники ВЭД"
        })}
      </script>
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Независимая товарная экспертиза" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[
                  { label: 'Услуги', path: '/services' },
                  { label: 'Товарная экспертиза' }
                ]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Независимая товарная экспертиза <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Профессиональный аудит для бизнеса и государства</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Защитите свой бизнес от убытков. Профессиональная приемка товаров, верификация госконтрактов по <strong>44-ФЗ</strong> и оценка ущерба. Официальные акты ТПП для судов и таможни.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Заказать экспертизу
              </button>
              <button 
                onClick={scrollToForm}
                className="border-2 border-slate-600 hover:border-white text-white font-semibold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} />
                Проконсультироваться
              </button>
            </div>
        </div>
      </section>

      {/* 2. ВИДЫ ЭКСПЕРТИЗ */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Выберите нужную экспертизу</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseServices.map((item) => (
              <div 
                key={item.id} 
                onClick={(e) => handleReadMore(e, item.id)}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.03] flex flex-col h-full cursor-pointer group text-left"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.shortDesc}</p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-blue-600 font-bold text-sm">
                   Подробнее <ChevronDown size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПОДРОБНОЕ ОПИСАНИЕ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Подробная информация об услугах</h2>
          <div className="space-y-4">
            {expertiseServices.map((item) => (
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
                            Заказать экспертизу -{'>'}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ПОЧЕМУ ТПП */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="text-center px-4 pt-4 md:pt-0">
              <Scale className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-2xl font-extrabold text-slate-900 mb-2">Независимость</div>
              <p className="text-slate-500 text-sm leading-relaxed">Мы не зависим от продавцов или покупателей. Наш статус закреплен Федеральным законом № 5340-1.</p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <MapPin className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-2xl font-extrabold text-slate-900 mb-2">Оперативность</div>
              <p className="text-slate-500 text-sm leading-relaxed">Штат экспертов в Чите и представительство в Забайкальске. Выезд на осмотр в день заявки.</p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <Clock className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-2xl font-extrabold text-slate-900 mb-2">Многолетний опыт</div>
              <p className="text-slate-500 text-sm leading-relaxed">Более 3000 экспертиз ежегодно. Наши акты проходят любые проверки ФТС и судебные разбирательства.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ДОКУМЕНТЫ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center py-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для проведения экспертизы</h2>
            <p className="text-slate-500">Минимальный пакет документов для начала работы</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
            {[
              { name: 'Заявка на проведение экспертизы', req: 'По форме Палаты', link: true },
              { name: 'Контракт / Договор поставки', req: 'Копия со спецификациями', link: false },
              { name: 'Товаросопроводительные документы', req: 'Инвойс, накладные, упаковочные листы', link: false },
              { name: 'Сертификаты качества / Паспорта', req: 'При наличии от завода-изготовителя', link: false },
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
            
            {/* Левая колонка */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Оставьте заявку на экспертизу</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Мы перезвоним, уточним детали объекта и рассчитаем стоимость работ. Официальное представительство на границе в Забайкальске.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">Просто позвоните, и мы поможем решить Ваш вопрос:</p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">
                  +7 (924) 373-33-30
                </a>
                <a href="mailto:expert@ztpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium">
                  <Mail size={20} /> expert@ztpp.ru
                </a>
              </div>
            </div>

            {/* Правая колонка: Форма */}
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Организация / ФИО" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="relative">
                    <select 
                      value={selectedExpertise}
                      onChange={(e) => setSelectedExpertise(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer text-slate-700"
                    >
                      {expertiseServices.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option>Другое</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500"><ChevronDown size={20} /></div>
                  </div>
                <div className="pt-2">
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                      <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
                      <span className="text-sm text-slate-500">Прикрепить фото или документы</span>
                    </div>
                </div>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Заказать экспертизу</button>
                <p className="text-xs text-center text-slate-400 mt-3 text-center">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 last:border-0">
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center py-6 text-left group">
                  <span className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>{faq.question}</span>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} size={24} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ГЕОГРАФИЯ */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">География наших услуг</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify text-sm md:text-base">
                        Мы являемся официальным экспертным органом системы Торгово-промышленных палат РФ. Наши специалисты проводят строительный аудит и техническое обследование объектов не только в <strong>Забайкальском крае (Чита, Краснокаменск, Борзя)</strong>, но и в <strong>Республике Бурятия (Улан-Удэ), Иркутской и Амурской областях</strong>.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Официальный статус ТПП
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Признание актов судами РФ
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Весь ДФО и Сибирь
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Globe size={16} className="text-blue-600" /> Дистанционно по всей РФ
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden h-80 flex flex-col justify-center shadow-inner">
                    <div className="relative z-10">
                        <p className="text-xl font-bold mb-2">Работаем с федеральными судами</p>
                        <p className="text-blue-100 text-sm">Наши эксперты включены в реестры рекомендуемых организаций для проведения судебных экспертиз в арбитражных судах крупнейших регионов России.</p>
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

export default ExpertisePage;
