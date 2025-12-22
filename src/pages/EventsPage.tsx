import React, { useState } from 'react';
import { 
  Users, Calendar, Briefcase, TrendingUp, Handshake, BookOpen,
  Phone, Mail, CheckCircle, ChevronDown, UploadCloud, 
  ChevronUp, MessageCircle, CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';

export const EventsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Организация бизнес-завтраков');
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
      id: 'breakfasts',
      title: 'Организация бизнес-завтраков',
      shortDesc: 'Ежемесячные встречи с экспертами, представителями власти и коллегами.',
      longDesc: 'Регулярные неформальные встречи для обсуждения актуальных проблем бизнеса, обмена опытом и налаживания новых деловых контактов. Выступают ведущие эксперты, представители администрации Забайкальского края и федеральных структур. Для членов ТПП участие бесплатное.',
      icon: Briefcase
    },
    {
      id: 'committees',
      title: 'Отраслевые комитеты',
      shortDesc: 'Участие в комитетах Палаты для решения системных проблем отрасли.',
      longDesc: 'Присоединяйтесь к работе профильных комитетов (например, по транспорту, строительству, туризму), чтобы напрямую влиять на развитие вашей отрасли. Разработка предложений по улучшению бизнес-климата, участие в оценке регулирующего воздействия законопроектов.',
      icon: Users
    },
    {
      id: 'missions',
      title: 'Бизнес-миссии',
      shortDesc: 'Организация деловых поездок по России и за рубеж (Китай, страны СНГ).',
      longDesc: 'Сопровождение в деловых поездках: поиск партнеров, организация B2B-встреч, посещение выставок. Визовая поддержка, услуги переводчиков и логистика. Для расширения рынков сбыта и поиска новых поставщиков.',
      icon: Calendar
    },
    {
      id: 'seminars',
      title: 'Обучающие семинары и тренинги',
      shortDesc: 'Повышение квалификации сотрудников и актуализация знаний по ВЭД, праву, налогам.',
      longDesc: 'Регулярные семинары и мастер-классы от ведущих специалистов по внешнеэкономической деятельности, таможенному законодательству, налогообложению, управлению персоналом и маркетингу. Актуальные изменения в законодательстве, практические кейсы, ответы на вопросы участников.',
      icon: BookOpen
    },
    {
      id: 'conferences',
      title: 'Конференции и форумы',
      shortDesc: 'Участие в региональных и федеральных деловых мероприятиях.',
      longDesc: 'Организация и проведение крупных деловых форумов и конференций по ключевым вопросам развития экономики Забайкальского края. Участие представителей власти, крупного бизнеса и международных партнеров. Возможность выступить с докладом и представить свою компанию.',
      icon: TrendingUp
    },
    {
      id: 'club',
      title: 'Закрытые мероприятия для членов палаты',
      shortDesc: 'Эксклюзивный нетворкинг и встречи с представителями власти для членов сообщества.',
      longDesc: 'Формат закрытых встреч для членов Палаты. Обмен контактами, неформальное общение с коллегами и представителями региональной власти. Расширение круга деловых знакомств, поиск инвесторов и партнеров в комфортной обстановке.',
      icon: Handshake
    },
  ];

  const faqs = [
    {
      question: "Как узнать о предстоящих мероприятиях?",
      answer: "Все анонсы мероприятий публикуются на нашем сайте в разделе 'Пресс-центр' и в Telegram-канале Палаты. Члены ТПП получают персональные приглашения по электронной почте."
    },
    {
      question: "Можно ли предложить тему для семинара?",
      answer: "Да, мы всегда открыты к предложениям от наших членов. Вы можете отправить заявку на проведение семинара или предложить актуальную тему для обсуждения."
    },
    {
      question: "Как стать спикером на мероприятии Палаты?",
      answer: "Если у вас есть экспертные знания и опыт, которыми вы готовы поделиться, свяжитесь с нами. Мы рассмотрим вашу кандидатуру для выступления на наших площадках."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Мероприятия ТПП Забайкальского края | Бизнес-миссии, Семинары"
        description="Организация деловых мероприятий, бизнес-завтраков, обучающих семинаров, участие в отраслевых комитетах и бизнес-миссиях для членов ТПП Забайкальского края."
        keywords="мероприятия тпп чита, бизнес-миссии китай, семинары вэд, отраслевые комитеты, нетворкинг чита"
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
                  Мероприятия сообщества <span className="text-yellow-400">для развития бизнеса</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Бизнес-завтраки, отраслевые комитеты, обучающие семинары и деловые миссии. Расширьте круг контактов и получите новые знания.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToForm} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg">
                    Узнать о ближайших событиях
                  </button>
                  <button onClick={scrollToForm} className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Задать вопрос
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                   <Users size={300} strokeWidth={1} className="text-slate-600/70 drop-shadow-2xl" />
                   <Users size={300} strokeWidth={1} className="absolute top-0 left-0 text-white/10" />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Форматы нашего взаимодействия</h2>
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

      {/* SEO ACCORDION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Подробная информация о мероприятиях</h2>
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
                            Участвовать →
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <div id="order-form" className="pt-24">
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Узнайте о ближайших событиях</h2>
                <p className="text-slate-300 text-lg mb-8">
                  Заполните форму, и мы свяжемся с вами, чтобы рассказать о мероприятиях, актуальных для вашего бизнеса.
                </p>
                
                {/* ✅ ИЗМЕНЕНО: Номер телефона желтым + текст */}
                <div className="pt-8 border-t border-slate-700">
                  <p className="text-slate-300 text-base mb-4 font-medium">
                    Просто позвоните, и мы поможем решить Ваш вопрос:
                  </p>
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
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Название организации" />
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
                       <span className="text-sm text-slate-500">Прикрепить ТЗ или вопрос</span>
                     </div>
                  </div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-4">Отправить заявку</button>
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

export default EventsPage;
