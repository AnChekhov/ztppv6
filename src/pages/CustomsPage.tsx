import React, { useState } from 'react';
import { 
  Container, Calculator, FileText, BadgeCheck, 
  MessageCircle, Mail, Phone, UploadCloud, 
  ChevronDown, ChevronUp, Globe, Shield, Search 
} from 'lucide-react';
import SEO from '../components/SEO';

export const CustomsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Классификация товаров (ТН ВЭД)');
  const [expandedDetail, setExpandedDetail] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      id: 'tnved',
      title: 'Классификация товаров (ТН ВЭД)',
      shortDesc: 'Определение верного кода товара для минимизации пошлин и рисков.',
      longDesc: 'Правильный код ТН ВЭД ЕАЭС - основа таможенного оформления. Мы проводим экспертизу товара, подбираем верный код, который позволяет применить минимально возможную ставку пошлины и избежать штрафов за недостоверное декларирование. Выдаем экспертное заключение.',
      icon: Search
    },
    {
      id: 'payments',
      title: 'Расчет таможенных платежей',
      shortDesc: 'Предварительный расчет стоимости растаможки груза.',
      longDesc: 'Рассчитаем полную себестоимость импорта: пошлины, НДС, сборы, акцизы. Поможем спланировать бюджет сделки до закупки товара, чтобы избежать кассовых разрывов на границе.',
      icon: Calculator
    },
    {
      id: 'docs',
      title: 'Подготовка документов',
      shortDesc: 'Аудит и подготовка контрактов, инвойсов и упаковочных листов.',
      longDesc: 'Проверка внешнеторгового контракта на соответствие требованиям таможни и банка (валютный контроль). Помощь в составлении инвойсов, спецификаций и технических описаний товара для беспрепятственного прохождения границы.',
      icon: FileText
    },
    {
      id: 'disputes',
      title: 'Таможенные споры',
      shortDesc: 'Защита интересов при корректировке таможенной стоимости (КТС).',
      longDesc: 'Помощь в возврате излишне уплаченных платежей, обжалование решений таможенных органов о классификации товара или корректировке стоимости. Подготовка пакета документов для доказательства цены сделки.',
      icon: Shield
    },
  ];

  const faqs = [
    {
      question: "Вы являетесь таможенным брокером?",
      answer: "ТПП оказывает консультационные и экспертные услуги. Мы помогаем подготовить документы, подобрать коды и защитить ваши интересы, но само декларирование (подачу ДТ) обычно осуществляет либо сам декларант, либо лицензированный брокер, которого мы можем порекомендовать."
    },
    {
      question: "Как подтвердить стоимость товара, если таможня её повышает?",
      answer: "Необходимо предоставить прайс-лист производителя, экспортную декларацию страны отправления, платежные документы и ведомость банковского контроля. Наши эксперты помогут собрать правильный пакет документов."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Таможенное сопровождение и консультирование | ТПП Чита"
        description="Помощь в таможенном оформлении: подбор кодов ТН ВЭД, расчет платежей, подготовка контрактов. Защита в таможенных спорах в Забайкальске."
        keywords="таможенное оформление чита, код тн вэд услуги, расчет пошлин, таможенный представитель забайкальск"
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40">
            <img src="/ztppv6/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/[0.87] to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Таможенное сопровождение <span className="text-yellow-400">ваших грузов</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Минимизируем риски на границе. Правильная классификация товаров, расчет платежей и подготовка документов для быстрого выпуска.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToForm} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg">
                    Оставить заявку
                  </button>
                  <button onClick={scrollToForm} className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Консультация
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                   <Container size={300} strokeWidth={1} className="text-slate-600/70 drop-shadow-2xl" />
                   <Container size={300} strokeWidth={1} className="absolute top-0 left-0 text-white/10" />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-6">
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

      {/* SEO ACCORDION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Подробности</h2>
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
                        {/* ✅ ИСПРАВЛЕНО: Убрано подчеркивание */}
                        <button onClick={() => handleOrderClick(item.title)} className="text-sm font-bold text-blue-600 hover:text-yellow-600 transition-colors">
                            Получить консультацию →
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="order-form" className="pt-24">
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Нужна помощь с таможней?</h2>
                <p className="text-slate-300 text-lg mb-8">
                  Опишите вашу задачу, и мы подскажем оптимальное решение и стоимость услуг.
                </p>
                <div className="pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3 font-medium uppercase tracking-wider">Контакты специалистов</p>
                  <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-white hover:text-yellow-400 transition-colors mb-4">+7 (924) 373-33-30</a>
                  <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
                <form className="space-y-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Организация" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Имя" />
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="relative">
                     <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer">
                       {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                       <option>Другое</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500"><ChevronDown size={20} /></div>
                   </div>
                  <div className="pt-2">
                     <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                       <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2" size={32} />
                       <span className="text-sm text-slate-500">Прикрепить документы</span>
                     </div>
                  </div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Заказать сопровождение</button>
                  <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Часто задаваемые вопросы</h2>
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

export default CustomsPage;
