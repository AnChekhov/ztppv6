import React, { useState } from 'react';
import { 
  Hammer, Ruler, Home, Building2, FileCheck, 
  Phone, Mail, CheckCircle2, ChevronDown, 
  ChevronUp, UploadCloud, MessageCircle, MapPin, Globe, Building
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export const ConstructionPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Строительно-техническая экспертиза');
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
      id: 'quality',
      title: 'Экспертиза качества работ',
      shortDesc: 'Проверка соответствия выполненных работ СНиП, ГОСТ и проектной документации для суда и претензий.',
      longDesc: 'Выявление дефектов строительства и ремонта (трещины, протечки, кривизна стен, нарушение технологий). Определение причин их возникновения (ошибка подрядчика или проектная ошибка). Составление дефектной ведомости для судов Забайкальского края, Бурятии и других регионов РФ.',
      icon: Hammer
    },
    {
      id: 'smeta',
      title: 'Проверка строительных смет',
      shortDesc: 'Анализ объемов и стоимости выполненных работ (КС-2, КС-3). Выявление завышения цен.',
      longDesc: 'Анализ сметной документации на предмет завышения стоимости материалов и работ. Контрольный обмер объемов фактически выполненных работ. Помогает заказчику сэкономить бюджет при работе с подрядчиками из Москвы, Новосибирска и других городов.',
      icon: FileCheck
    },
    {
      id: 'condition',
      title: 'Обследование зданий и сооружений',
      shortDesc: 'Оценка технического состояния несущих конструкций, признание домов аварийными.',
      longDesc: 'Инструментальное обследование фундаментов, стен, перекрытий. Оценка физического износа и возможности дальнейшей эксплуатации здания. Выдача заключений для признания дома ветхим или аварийным в соответствии с федеральными стандартами.',
      icon: Building2
    },
    {
      id: 'judicial',
      title: 'Судебная строительная экспертиза',
      shortDesc: 'Экспертиза по определению суда в рамках гражданских и арбитражных споров по всей России.',
      longDesc: 'Раздел недвижимости в натуре (выдел доли), споры по границам земельных участков, определение стоимости восстановительного ремонта после залива или пожара. Наши экспертные заключения имеют юридическую силу во всех судах РФ.',
      icon: Ruler
    },
    {
      id: 'acceptance',
      title: 'Приемка квартир в новостройках',
      shortDesc: 'Профессиональная помощь в приемке квартир от застройщика. Поиск скрытых дефектов.',
      longDesc: 'Профессиональный осмотр новой квартиры перед подписанием акта приема-передачи. Фиксация всех недоделок (окна, вентиляция, стяжка, электрика) в смотровом листе. Застройщик обязан устранить их бесплатно по закону РФ.',
      icon: Home
    },
  ];

  const faqs = [
    {
      question: "Является ли заключение ТПП доказательством в суде?",
      answer: "Да, экспертное заключение ТПП является официальным документом и принимается арбитражными судами и судами общей юрисдикции во всех регионах России, включая Москву, Иркутск и Улан-Удэ."
    },
    {
      question: "Работаете ли вы с объектами в соседних регионах?",
      answer: "Да, эксперты Забайкальской ТПП проводят выездные строительные экспертизы в Республике Бурятия и Иркутской области. Также возможен дистанционный анализ проектной и сметной документации для заказчиков со всей страны."
    },
    {
      question: "Как быстро выезжает эксперт?",
      answer: "Обычно выезд осуществляется в течение 1-2 дней после получения заявки. Для объектов в Чите и пригороде возможен выезд в день обращения."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Независимая строительная экспертиза: Чита, Улан-Удэ, Иркутск, Москва | ТПП"
        description="Судебная и досудебная строительно-техническая экспертиза от официального органа. Проверка качества работ, смет и обследование зданий. Работаем по Забайкалью, ДФО и всей России."
        keywords="строительная экспертиза чита, строительная экспертиза улан-удэ, строительная экспертиза иркутск, проверка сметы москва, судебная экспертиза строительство рф, независимая экспертиза зданий"
      />

      {/* JSON-LD Микроразметка */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "Строительно-техническая экспертиза",
          "provider": {
            "@type": "GovernmentOrganization",
            "name": "Забайкальская ТПП",
            "address": "г. Чита"
          },
          "areaServed": ["Забайкальский край", "Республика Бурятия", "Иркутская область", "РФ"],
          "audience": "Застройщики, владельцы недвижимости, суды"
        })}
      </script>

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Строительная экспертиза" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[
                  { label: 'Услуги', path: '/services' },
                  { label: 'Строительная экспертиза' }
                ]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Строительная экспертиза <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">ТПП Забайкальского края</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Независимая проверка качества строительства, анализ смет и обследование зданий. Официальные заключения ТПП для судов в <strong>Чите, Иркутске, Улан-Удэ, Москве</strong> и других городах РФ.
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
                Консультация эксперта
              </button>
            </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Выберите нужную экспертизу</h2>
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

      {/* 3. ПОДРОБНОЕ ОПИСАНИЕ */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Подробно о строительном аудите</h2>
          <div className="space-y-4">
            {services.map((item) => (
              <div key={item.id} id={`detail-${item.id}`} className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${expandedDetail === item.id ? 'border-blue-500 shadow-md' : 'border-slate-200'}`}>
                <button onClick={() => setExpandedDetail(expandedDetail === item.id ? null : item.id)} className="w-full flex items-center justify-between p-6 text-left">
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
                        <button onClick={() => handleOrderClick(item.title)} className="text-sm font-bold text-blue-600 hover:text-yellow-600 transition-colors">
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

      {/* 4. ДОКУМЕНТЫ */}
      <section className="pt-0 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center py-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для проведения экспертизы</h2>
            <p className="text-slate-500">Минимальный пакет документов для начала работы</p>
          </div>

          <div className="bg-slate-50 rounded-3xl shadow-sm overflow-hidden border border-slate-100">
            {[
              { name: 'Заявка на проведение экспертизы', req: 'По форме Палаты', link: true },
              { name: 'Правоустанавливающие документы', req: 'Выписка ЕГРН, договор аренды', link: false },
              { name: 'Проектная документация', req: 'При наличии', link: false },
              { name: 'Договор с подрядчиком', req: 'Для экспертизы качества работ', link: false },
            ].map((doc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-white last:border-0 hover:bg-blue-50/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-1 md:mt-0">
                    <CheckCircle2 size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{doc.name}</h4>
                    <p className="text-slate-500 text-sm">{doc.req}</p>
                  </div>
                </div>
                
                {doc.link ? (
                  <a href="#" className="mt-4 md:mt-0 flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors whitespace-nowrap bg-blue-50 px-4 py-2 rounded-lg">
                    <FileCheck size={16} className="mr-2" />
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

      {/* 5. CTA FORM */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Оставьте заявку на экспертизу</h2>
              <p className="text-slate-300 text-lg mb-8">
                Мы перезвоним, уточним детали объекта и рассчитаем стоимость работ. Работаем дистанционно с любым регионом РФ.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">
                  Просто позвоните, и мы поможем решить Ваш вопрос:
                </p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:expert@ztpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> expert@ztpp.ru</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Организация / ФИО" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="relative">
                   <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer text-slate-700">
                     {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                     <option>Другое</option>
                   </select>
                   <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500"><ChevronDown size={20} /></div>
                 </div>
                <div className="pt-2">
                   <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                     <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2" size={32} />
                     <span className="text-sm text-slate-500">Прикрепить фото или документы</span>
                   </div>
                </div>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Заказать экспертизу</button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 text-center">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
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

      {/* 7. ГЕОГРАФИЯ */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">География наших услуг</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
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
                <div className="md:w-1/2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden h-80 flex flex-col justify-center">
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

export default ConstructionPage;
