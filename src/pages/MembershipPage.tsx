import React, { useState } from 'react';
import { 
  Users, ShieldCheck, TrendingUp, Handshake, FileCheck, 
  Award, Percent, Plane, Shield, Globe, Landmark, 
  Mail, Phone, ChevronDown, ChevronUp, MessageCircle, 
  CheckCircle2, Building, Briefcase, Zap, Download, MapPin
} from 'lucide-react';
import SEO from '../components/SEO';

const MembershipPage: React.FC = () => {
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

  const coreBenefits = [
    {
      title: "Нетворкинг и связи",
      desc: "Знакомство и общение с ключевыми игроками рынка, руководителями ведомств и потенциальными партнерами.",
      icon: Users
    },
    {
      title: "GR-поддержка",
      desc: "Участие в законотворчестве и защита интересов вашего бизнеса на государственном уровне.",
      icon: Landmark
    },
    {
      title: "Скидки на услуги",
      desc: "Особые условия на сертификацию, экспертизу, оценку и аренду площадок Палаты.",
      icon: Percent
    },
    {
      title: "Продвижение",
      desc: "Участие в премии «Золотой Меркурий» и возможность заявить о себе на федеральном уровне.",
      icon: TrendingUp
    },
    {
      title: "Статус и доверие",
      desc: "Рекомендательные письма и ходатайства от ТПП, повышающие лояльность контрагентов.",
      icon: ShieldCheck
    },
    {
      title: "Бесплатные консультации",
      desc: "Юридическая помощь, защита бренда и экспертная поддержка для минимизации рисков.",
      icon: MessageCircle
    }
  ];

  const partnerDiscounts = [
    { partner: "S7 Profi", offer: "Скидка 10% на авиаперелеты и 500 бонусных баллов.", icon: Plane },
    { partner: "СКБ Контур", offer: "Скидка 50% на Контур.Экстерн и спецпредложения на софт.", icon: Zap },
    { partner: "АльфаСтрахование", offer: "Скидка до 20% на КАСКО и гражданскую ответственность.", icon: Shield },
    { partner: "ГазпромНефть", offer: "Скидка на автомобильное топливо при заключении договора.", icon: Briefcase },
    { partner: "Авито", offer: "Бонусы на продвижение и развитие бизнеса в системе.", icon: Globe },
    { partner: "Гарант", offer: "2 месяца бесплатного тестирования онлайн-версии системы.", icon: FileCheck }
  ];

  const faqs = [
    {
      question: "Кто может стать членом Палаты?",
      answer: "Членами ТПП могут быть российские юридические лица (любой формы собственности) и индивидуальные предприниматели, зарегистрированные в установленном порядке."
    },
    {
      question: "Как быстро происходит вступление?",
      answer: "Процесс занимает от 3 до 7 рабочих дней после подачи заявления и оплаты членского взноса. Вы получаете официальное свидетельство о членстве."
    },
    {
      question: "Какие документы необходимы?",
      answer: "Минимальный пакет включает: заявление, анкету организации и копии учредительных документов (ИНН, ОГРН). Мы поможем подготовить все формы."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      <SEO 
        title="Членство в ТПП Забайкальского края | Преимущества для бизнеса"
        description="Вступите в крупнейшее бизнес-сообщество региона. Скидки от S7, АльфаСтрахование, Контур. Юридическая защита и нетворкинг. Развивайте бизнес с нами."
        keywords="вступить в тпп чита, преимущества членства тпп, поддержка бизнеса забайкалье, скидки для бизнеса, нетворкинг чита"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Бизнес-сообщество Забайкалья" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Сила сообщества <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">Для вашего успеха на рынке</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Станьте частью Торгово-промышленной палаты Забайкальского края. Получите доступ к эксклюзивным преференциям, защите интересов и мощному ресурсу для развития вашего дела.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Подать заявку на вступление
              </button>
            </div>
        </div>
      </section>

      {/* 2. КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Что дает членство в Палате?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Мы создаем среду, в которой бизнес чувствует себя защищенным и имеет ресурсы для роста.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBenefits.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
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

      {/* 3. ПРОГРАММА ЛОЯЛЬНОСТИ (СЕРАЯ СЕКЦИЯ) */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Федеральные преференции партнеров</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerDiscounts.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.partner}</h4>
                  <p className="text-sm text-slate-600 leading-snug">{item.offer}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-400 text-sm italic">
            * Актуальные условия программ лояльности уточняйте у менеджеров Палаты.
          </p>
        </div>
      </section>

      {/* 4. ШАГИ ВСТУПЛЕНИЯ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-16">3 простых шага к вступлению</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-blue-200">1</div>
              <h4 className="font-bold text-lg mb-2">Подача заявки</h4>
              <p className="text-slate-500 text-sm">Заполните анкету на сайте или в офисе Палаты.</p>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-blue-200">2</div>
              <h4 className="font-bold text-lg mb-2">Рассмотрение</h4>
              <p className="text-slate-500 text-sm">Правление Палаты принимает решение о приеме.</p>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-blue-200">3</div>
              <h4 className="font-bold text-lg mb-2">Свидетельство</h4>
              <p className="text-slate-500 text-sm">Получите статус члена ТПП и доступ к сервисам.</p>
            </div>
            <div className="hidden lg:block absolute top-8 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-slate-200 -z-0"></div>
          </div>
        </div>
      </section>

      {/* 5. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Станьте частью команды</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте заявку, и мы вышлем вам полный пакет документов для оформления членства и проконсультируем по всем вопросам.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-base mb-4 font-medium">Консультация по вступлению:</p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Название организации или ИП" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Имя руководителя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="pt-2">
                   <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                     <Download className="text-slate-400 group-hover:text-blue-500 mb-2" size={32} />
                     <span className="text-sm text-slate-500">Запросить бланк анкеты</span>
                   </div>
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all mt-4">Получить информацию</button>
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

      {/* 7. ГЕОГРАФИЯ (ДЛЯ SEO) */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Развиваем бизнес Забайкалья</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                        Торгово-промышленная палата Забайкальского края объединяет сотни успешных компаний в <strong>Чите, Краснокаменске, Борзе и поселке Забайкальск</strong>. Мы выступаем единым голосом бизнеса региона, защищая его интересы как в Забайкалье, так и в федеральных органах власти в <strong>Москве</strong>.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-600" /> Официальный орган ТПП РФ
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap size={16} className="text-blue-600" /> Весь спектр ВЭД услуг
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-blue-600" /> Реестр надежных партнеров
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-blue-600" /> Международные связи
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden h-80 flex flex-col justify-center">
                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-4 italic">«Членство в ТПП - это признанный во всем мире знак качества и надежности вашего бизнеса»</h3>
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

export default MembershipPage;
