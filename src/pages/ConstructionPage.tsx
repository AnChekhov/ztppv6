import React, { useState } from 'react';
import { 
  Hammer, Ruler, Home, Building2, FileCheck, 
  Phone, Mail, CheckCircle2, ChevronDown, 
  ChevronUp, UploadCloud, MessageCircle
} from 'lucide-react';
import SEO from '../components/SEO';

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
      shortDesc: 'Проверка соответствия выполненных работ СНиП, ГОСТ и проектной документации.',
      longDesc: 'Выявление дефектов строительства и ремонта (трещины, протечки, кривизна стен, нарушение технологий). Определение причин их возникновения (ошибка подрядчика или проектная ошибка). Составление дефектной ведомости для суда или претензии застройщику.',
      icon: Hammer
    },
    {
      id: 'smeta',
      title: 'Сметная экспертиза',
      shortDesc: 'Проверка объемов и стоимости выполненных работ (КС-2, КС-3).',
      longDesc: 'Анализ сметной документации на предмет завышения стоимости материалов и работ. Контрольный обмер объемов фактически выполненных работ. Помогает заказчику сэкономить бюджет и не платить за "воздух".',
      icon: FileCheck
    },
    {
      id: 'condition',
      title: 'Обследование зданий',
      shortDesc: 'Оценка технического состояния несущих конструкций, признание аварийности.',
      longDesc: 'Инструментальное обследование фундаментов, стен, перекрытий. Оценка физического износа и возможности дальнейшей эксплуатации здания. Выдача заключений для признания дома ветхим или аварийным.',
      icon: Building2
    },
    {
      id: 'judicial',
      title: 'Судебная строительная экспертиза',
      shortDesc: 'Экспертиза по определению суда в рамках гражданских и арбитражных споров.',
      longDesc: 'Раздел недвижимости в натуре (выдел доли), споры по границам земельных участков, определение стоимости восстановительного ремонта после залива или пожара. Эксперты имеют все необходимые допуски и квалификацию.',
      icon: Ruler
    },
    {
      id: 'acceptance',
      title: 'Приемка квартир',
      shortDesc: 'Помощь в приемке квартир и помещений от застройщика.',
      longDesc: 'Профессиональный осмотр новой квартиры перед подписанием акта приема-передачи. Фиксация всех недоделок (окна, вентиляция, стяжка, электрика) в смотровом листе. Застройщик обязан устранить их бесплатно.',
      icon: Home
    },
  ];

  const faqs = [
    {
      question: "Является ли заключение ТПП доказательством в суде?",
      answer: "Да, экспертное заключение ТПП является официальным документом и принимается судами всех инстанций в качестве доказательства."
    },
    {
      question: "Нужен ли доступ на объект для проведения экспертизы?",
      answer: "Для качественной экспертизы осмотр объекта обязателен. Эксперт выезжает на место с необходимым оборудованием для замеров и фотофиксации."
    },
    {
      question: "Как быстро выезжает эксперт?",
      answer: "Обычно выезд осуществляется в течение 1-2 дней после получения заявки и оплаты счета. Срочный выезд возможен по договоренности."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Строительная экспертиза в Чите | Проверка качества, сметы, приемка квартир"
        description="Независимая строительно-техническая экспертиза. Проверка качества ремонта, приемка квартир от застройщика, судебная экспертиза, обследование зданий."
        keywords="строительная экспертиза чита, приемка квартиры, проверка сметы, судебная экспертиза строительство, экспертиза дома"
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Независимая строительная экспертиза <span className="text-yellow-400">в Чите</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Проверка качества работ, смет и материалов. Поможем в спорах с подрядчиками, застройщиками и при разделе недвижимости.
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
                Консультация
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

      {/* 3. SEO ACCORDION */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Подробно об услугах</h2>
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
                            Заказать экспертизу →
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
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center py-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для проведения экспертизы</h2>
            <p className="text-slate-500">Минимальный пакет документов для начала работы</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
            {[
              { name: 'Заявка на проведение экспертизы', req: 'По форме Палаты', link: true },
              { name: 'Правоустанавливающие документы', req: 'Выписка ЕГРН, договор аренды', link: false },
              { name: 'Проектная документация', req: 'При наличии', link: false },
              { name: 'Договор с подрядчиком', req: 'Для экспертизы качества работ', link: false },
            ].map((doc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-slate-100 last:border-0 hover:bg-blue-50/30 transition-colors">
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
                   <div className="mt-4 md:mt-0 text-blue-600 font-bold text-xl select-none px-6 py-2">—</div>
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
                Мы перезвоним, уточним детали объекта и рассчитаем стоимость работ.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">
                  Просто позвоните, и мы поможем решить Ваш вопрос:
                </p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-white hover:text-yellow-400 transition-colors mb-4">+7 (924) 373-33-30</a>
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
    </div>
  );
};

export default ConstructionPage;
