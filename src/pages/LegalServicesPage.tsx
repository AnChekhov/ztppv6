import React, { useState } from 'react';
import { 
  Gavel, Scale, FileText, Handshake, Briefcase, DollarSign,
  Phone, Mail, CheckCircle, ChevronDown, UploadCloud, 
  ChevronUp, MessageCircle, CheckCircle2, Shield, Calculator
} from 'lucide-react';
import SEO from '../components/SEO';

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
                  Надежная юридическая защита <span className="text-yellow-400">вашего бизнеса</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Международный коммерческий арбитраж, свидетельствование форс-мажора, защита интересов в судах и госорганах.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToForm} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg">
                    Получить консультацию
                  </button>
                  <button onClick={scrollToForm} className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Обсудить задачу
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                   <Gavel size={300} strokeWidth={1} className="text-slate-600/70 drop-shadow-2xl" />
                   <Gavel size={300} strokeWidth={1} className="absolute top-0 left-0 text-white/10" />
                </div>
              </div>
            </
