import React, { useState } from 'react';
import { 
  Container, Calculator, FileText, BadgeCheck, 
  MessageCircle, Mail, Phone, UploadCloud, 
  ChevronDown, ChevronUp, Globe, Shield, Search,
  MapPin, Building, CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

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
      id: 'tnved',
      title: 'Классификация товаров (ТН ВЭД)',
      shortDesc: 'Определение верного кода товара для минимизации пошлин и рисков при импорте и экспорте.',
      longDesc: 'Правильный код ТН ВЭД ЕАЭС - основа таможенного оформления. Мы проводим экспертизу товара, подбираем верный код, который позволяет применить минимально возможную ставку пошлины и избежать штрафов за недостоверное декларирование. Выдаем официальное экспертное заключение для таможенных органов Читы, Владивостока и Москвы.',
      icon: Search
    },
    {
      id: 'payments',
      title: 'Расчет таможенных платежей',
      shortDesc: 'Предварительный расчет стоимости растаможки грузов из Китая и других стран.',
      longDesc: 'Рассчитаем полную себестоимость импорта: пошлины, НДС, сборы, акцизы. Поможем спланировать бюджет сделки до закупки товара, что особенно актуально для участников ВЭД из Бурятии, Иркутской области и центральных регионов РФ.',
      icon: Calculator
    },
    {
      id: 'docs',
      title: 'Подготовка и аудит документов',
      shortDesc: 'Экспертиза контрактов, инвойсов и спецификаций для валютного контроля и таможни.',
      longDesc: 'Проверка внешнеторгового контракта на соответствие требованиям таможни и банка. Помощь в составлении инвойсов и технических описаний товара для беспрепятственного прохождения границы в МАПП Забайкальск. Работаем дистанционно с клиентами со всей России.',
      icon: FileText
    },
    {
      id: 'disputes',
      title: 'Таможенные споры и КТС',
      shortDesc: 'Защита интересов бизнеса при корректировке таможенной стоимости и отказах в выпуске.',
      longDesc: 'Помощь в возврате излишне уплаченных платежей, обжалование решений о классификации товара. Подготовка пакета документов для доказательства цены сделки. Наши заключения принимаются судами всех инстанций при спорах с ФТС.',
      icon: Shield
    },
  ];

  const faqs = [
    {
      question: "Как получить консультацию по коду ТН ВЭД из другого региона?",
      answer: "Мы работаем со всей Россией через ЭДО. Вам достаточно прислать техническое описание товара на почту. Эксперты Забайкальской ТПП подготовят заключение, которое будет легитимно на любой таможне РФ - от Калининграда до Находки."
    },
    {
      question: "Помогаете ли вы подтвердить стоимость товара перед таможней?",
      answer: "Да, мы помогаем собрать и проанализировать доказательную базу: прайс-листы производителей, экспортные декларации страны отправления и финансовые документы для успешного прохождения контроля стоимости."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Таможенное сопровождение ВЭД: Чита, Улан-Удэ, Москва | Консультации ТПП"
        description="Помощь в таможенном оформлении: классификация ТН ВЭД, расчет платежей, подготовка документов для импорта из Китая. Официальный экспертный орган. Работаем по всей России."
        keywords="таможенное оформление чита, подбор кода тн вэд, расчет таможенных пошлин, таможенные споры ктс, ТПП забайкальск, услуги вэд москва, экспорт в китай"
      />

      {/* JSON-LD Микроразметка */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "Таможенное консультирование и сопровождение",
          "provider": {
            "@type": "GovernmentOrganization",
            "name": "Забайкальская ТПП",
            "address": "г. Чита"
          },
          "areaServed": ["Забайкальский край", "Республика Бурятия", "РФ"],
          "audience": "Участники ВЭД, логистические компании"
        })}
      </script>

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Таможенное сопровождение грузов" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[
                  { label: 'Услуги', path: '/services' },
                  { label: 'Таможенное сопровождение' }
                ]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Таможенное сопровождение <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Консультирование участников ВЭД</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Минимизируем риски на границе. Правильная классификация товаров, расчет платежей и аудит документов для компаний из <strong>Москвы, Новосибирска, Иркутска, Улан-Удэ</strong> и всего Забайкалья.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Оставить заявку
              </button>
              <button 
                onClick={scrollToForm}
                className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-10 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} />
                Бесплатная консультация
              </button>
            </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Виды таможенных услуг</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                     Подробнее об услуге <ChevronDown size={16} className="ml-1" />
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
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Детальная информация</h2>
          <div className="space-y-4">
            {services.map((item) => (
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
                            Заказать консультацию -{'>'}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Нужна помощь с таможней?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Опишите вашу задачу или отправьте документы на предварительный аудит. Наши эксперты свяжутся с вами для расчета стоимости.
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
                <div className="relative">
                   <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none cursor-pointer text-slate-700"
                   >
                     {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                     <option>Другой вопрос</option>
                   </select>
                   <ChevronDown className="absolute right-4 top-4 text-slate-400 pointer-events-none" size={20} />
                </div>
                <div className="pt-2">
                   <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                     <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
                     <span className="text-sm text-slate-500">Прикрепить документы (ТЗ, Контракт)</span>
                   </div>
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Заказать сопровождение</button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
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
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} size={24} />
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

      {/* 6. ГЕОГРАФИЯ (SEO БЛОК) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Таможенный консалтинг по всей РФ</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                        Торгово-промышленная палата Забайкальского края является ключевым звеном в сопровождении грузов через крупнейший сухопутный переход МАПП Забайкальск. Мы оказываем экспертную поддержку компаниям из <strong>Москвы, Санкт-Петербурга, Новосибирска, Иркутска и Республики Бурятия (Улан-Удэ)</strong>.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <MapPin size={16} className="text-blue-600" /> Центр экспертизы ДФО
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Building size={16} className="text-blue-600" /> Официальный статус ТПП
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <Globe size={16} className="text-blue-600" /> Работа через ЭДО
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <CheckCircle2 size={16} className="text-blue-600" /> Легитимность актов
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden h-80 flex flex-col justify-center">
                    <div className="relative z-10">
                        <p className="text-xl font-bold mb-2">Прямой выход на рынок КНР</p>
                        <p className="text-blue-100 text-sm">Использование нашего приграничного положения позволяет сократить сроки проверки документов и подобрать оптимальные коды ТН ВЭД для специфических категорий товаров при импорте из Китая.</p>
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

export default CustomsPage;
