import React, { useState } from 'react';
import { 
  Gavel, Scale, FileText, Handshake, Briefcase, DollarSign,
  Phone, Mail, CheckCircle, ChevronDown, UploadCloud, 
  ChevronUp, MessageCircle, CheckCircle2, Shield, Calculator, Building, Globe, MapPin, Landmark
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export const LegalServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Свидетельствование форс-мажора');
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
      id: 'force-majeure',
      title: 'Свидетельствование форс-мажора',
      shortDesc: 'Оформление заключений о форс-мажоре по российским и международным контрактам.',
      longDesc: 'Выдача официальных заключений о наступлении обстоятельств непреодолимой силы (форс-мажора). Это позволяет освободиться от ответственности за неисполнение контракта из-за объективных причин (санкции, стихийные бедствия, эпидемии).',
      icon: Shield
    },
    {
      id: 'business-protection',
      title: 'Защита интересов бизнеса',
      shortDesc: 'Представительство в государственных органах, юридические консультации.',
      longDesc: 'Представительство интересов предпринимателей в налоговых органах, прокуратуре, ФАС и других государственных структурах. Обжалование незаконных актов, защита от необоснованных проверок, консультации по административному и гражданскому праву.',
      icon: Briefcase
    },
    {
      id: 'contract-law',
      title: 'Договорное право (ВЭД)',
      shortDesc: 'Разработка, экспертиза и согласование внешнеторговых контрактов.',
      longDesc: 'Юридическая экспертиза внешнеэкономических контрактов с учетом российского и международного права. Разработка договоров купли-продажи, поставки, комиссии. Согласование условий (Инкотермс, платежи, ответственность) с партнерами.',
      icon: FileText
    },
    {
      id: 'arbitration',
      title: 'Международный коммерческий арбитраж',
      shortDesc: 'Помощь в разрешении споров по ВЭД, медиация и представительство в арбитраже.',
      longDesc: 'Разрешение внешнеторговых споров с иностранными партнерами через медиацию или обращение в Международный коммерческий арбитражный суд при ТПП РФ. Представительство ваших интересов, составление исков, подготовка доказательной базы.',
      icon: Gavel
    },
    {
      id: 'debt-collection',
      title: 'Взыскание дебиторской задолженности',
      shortDesc: 'Досудебное урегулирование и судебное взыскание долгов по контрактам.',
      longDesc: 'Помощь в возврате долгов от недобросовестных контрагентов. Досудебная претензионная работа, подготовка и подача исковых заявлений, представительство в судах общей юрисдикции и арбитражных судах. Эффективные стратегии взыскания.',
      icon: DollarSign
    },
    {
      id: 'tax-consulting',
      title: 'Налоговые консультации',
      shortDesc: 'Консультации по налогообложению в сфере ВЭД и ведению бизнеса.',
      longDesc: 'Экспертные консультации по применению налогового законодательства РФ в части импортно-экспортных операций, возмещению НДС. Оптимизация налоговой нагрузки. Помощь в подготовке отчетности для ФНС.',
      icon: Calculator
    },
  ];

  const faqs = [
    {
      question: "В каких судах вы представляете интересы?",
      answer: "Мы представляем интересы клиентов в Арбитражных судах, судах общей юрисдикции Забайкальского края, а также в Международном коммерческом арбитражном суде при ТПП РФ."
    },
    {
      question: "Можно ли получить заключение о форс-мажоре задним числом?",
      answer: "Заключение о форс-мажоре выдается на основании объективных данных о наступлении обстоятельств непреодолимой силы. Процедура предусматривает сбор доказательств, поэтому подавать заявку необходимо оперативно, как только стало известно о препятствиях."
    },
    {
      question: "Помогаете ли вы с составлением контрактов с зарубежными партнерами?",
      answer: "Да, наши юристы специализируются на внешнеэкономической деятельности и помогут разработать или проверить контракт с учетом всех особенностей международного законодательства и ваших коммерческих интересов."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Юридические услуги для бизнеса | Международный арбитраж, Форс-мажор | ТПП Чита"
        description="Комплексные юридические услуги: международный арбитраж, свидетельствование форс-мажора, защита интересов бизнеса, взыскание долгов, налоговые консультации."
        keywords="юридические услуги чита, арбитраж ВЭД, форс-мажор, защита бизнеса, налоговые консультации"
      />

      {/* JSON-LD Микроразметка */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "Юридическая поддержка бизнеса",
          "provider": {
            "@type": "GovernmentOrganization",
            "name": "Забайкальская ТПП",
            "address": "г. Чита"
          },
          "areaServed": ["Забайкальский край", "Республика Бурятия", "РФ"],
          "audience": "Предприниматели, юридические лица"
        })}
      </script>

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Юридическая защита бизнеса" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[
                  { label: 'Услуги', path: '/services' },
                  { label: 'Юридические услуги' }
                ]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Надежная юридическая защита <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">вашего бизнеса</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Международный коммерческий арбитраж, свидетельствование форс-мажора, защита интересов в судах и госорганах.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Получить консультацию
              </button>
              <button 
                onClick={scrollToForm}
                className="border-2 border-slate-600 hover:border-white text-white font-semibold py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} />
                Обсудить задачу
              </button>
            </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Наши юридические услуги</h2>
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

      {/* 3. SEO ACCORDION (Серая секция) */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">
            Детально о правовой поддержке
          </h2>
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
                            Заказать юридическую поддержку -{'>'}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA FORM */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Закажите юридическую поддержку</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте заявку, и наш юрист свяжется с вами для обсуждения вашей правовой задачи.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">
                  Просто позвоните, и мы поможем решить Ваш вопрос:
                </p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Название организации" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="relative">
                   <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none cursor-pointer text-slate-700">
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
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Заказать юридическую поддержку</button>
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
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center py-6 text-left group">
                  <span className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>{faq.question}</span>
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

      {/* 6. ГЕОГРАФИЯ (ДЛЯ SEO) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Юридическая поддержка по всей РФ</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                        Торгово-промышленная палата Забайкальского края оказывает правовую помощь бизнесу из любого региона. Мы успешно работаем с компаниями из <strong>Москвы, Новосибирска, Иркутска и Улан-Удэ</strong>, представляя их интересы в Забайкалье и в федеральных структурах.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-600" /> Официальный орган ТПП РФ
                        </div>
                        <div className="flex items-center gap-2">
                            <Landmark size={16} className="text-blue-600" /> Защита в судах
                        </div>
                        <div className="flex items-center gap-2">
                            <Building size={16} className="text-blue-600" /> Сопровождение ВЭД
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-blue-600" /> Дистанционно по РФ
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden h-80 flex flex-col justify-center">
                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-4 italic">«Мы обеспечиваем надежный правовой фундамент для вашего бизнеса на границе с Китаем и во всей России»</h3>
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

export default LegalServicesPage;
