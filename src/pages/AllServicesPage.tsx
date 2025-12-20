import React from 'react';
import { 
  FileText, Globe, Scale, Users, 
  Container, Hammer, Calculator, Briefcase,
  Award, ShieldCheck, Languages, PenTool,
  CheckCircle2, Search, ArrowRight, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const AllServicesPage: React.FC = () => {
  
  const categories = [
    {
      title: "Сертификация и ВЭД",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      services: [
        { name: "Сертификат происхождения СТ-1", link: "/services/cert" },
        { name: "Сертификат Общей формы", link: "/services/cert" },
        { name: "Сертификат EAV (Вьетнам)", link: "/services/cert" },
        { name: "Сертификат СТ-2 (Сербия)", link: "/services/cert" },
        { name: "Карнеты ATA (Временный ввоз/вывоз)", link: "#" },
        { name: "Поиск партнеров в Китае", link: "/ved" },
        { name: "Проверка китайских контрагентов", link: "/ved" },
        { name: "Письменные и устные переводы", link: "/ved" },
      ]
    },
    {
      title: "Экспертная деятельность",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600",
      services: [
        { name: "Товарная экспертиза (качество/количество)", link: "/services/expert" },
        { name: "Экспертиза для госзакупок (44-ФЗ)", link: "/services/expert" },
        { name: "Таможенная экспертиза (ТН ВЭД)", link: "/services/customs" },
        { name: "Судебная экспертиза", link: "/services/expert" },
        { name: "Строительно-техническая экспертиза", link: "/services/construction" },
        { name: "Оценка ущерба (пожар, залив, ДТП)", link: "/services/expert" },
        { name: "Сметная экспертиза", link: "/services/construction" },
        { name: "Экспертиза оборудования", link: "/services/expert" },
      ]
    },
    {
      title: "Юридическая поддержка",
      icon: Scale,
      color: "bg-indigo-50 text-indigo-600",
      services: [
        { name: "Свидетельствование форс-мажора", link: "/services/law" },
        { name: "Международный коммерческий арбитраж", link: "/services/law" },
        { name: "Экспертиза внешнеторговых контрактов", link: "/services/law" },
        { name: "Взыскание дебиторской задолженности", link: "/services/law" },
        { name: "Налоговые консультации", link: "/services/law" },
        { name: "Защита интересов в госорганах", link: "/services/law" },
        { name: "Медиация (досудебное урегулирование)", link: "/services/law" },
      ]
    },
    {
      title: "Оценка собственности",
      icon: Calculator,
      color: "bg-amber-50 text-amber-600",
      services: [
        { name: "Оценка недвижимости и земельных участков", link: "#" },
        { name: "Оценка бизнеса и ценных бумаг", link: "#" },
        { name: "Оценка машин, оборудования и транспорта", link: "#" },
        { name: "Оценка интеллектуальной собственности", link: "#" },
        { name: "Оспаривание кадастровой стоимости", link: "#" },
      ]
    },
    {
      title: "Развитие бизнеса",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      services: [
        { name: "Членство в ТПП Забайкальского края", link: "/membership" },
        { name: "Участие в бизнес-миссиях", link: "/news" },
        { name: "Отраслевые комитеты", link: "/news" },
        { name: "Обучающие семинары и тренинги", link: "/news" },
        { name: "Специальная оценка условий труда (СОУТ)", link: "#" },
        { name: "Регистрация товарных знаков", link: "#" },
        { name: "Выдача электронных подписей (ЭЦП)", link: "#" },
      ]
    },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Каталог услуг Забайкальской ТПП | Полный список"
        description="Более 40 видов услуг для бизнеса в Чите: сертификация, экспертиза, оценка, юридическая помощь, переводы, ВЭД с Китаем. Единое окно для предпринимателей."
        keywords="услуги тпп чита, каталог услуг, оценка бизнеса, переводы китайский, соут чита, регистрация товарного знака"
      />

      {/* HERO */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Каталог услуг Палаты</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Комплексная поддержка вашего бизнеса на всех этапах: от регистрации товарного знака до выхода на международные рынки.
            </p>
        </div>
      </section>

      {/* CATALOG GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           
           <div className="grid md:grid-cols-2 gap-8 masonry-grid">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color}`}>
                            <cat.icon size={24} strokeWidth={2} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
                    </div>
                    
                    <ul className="space-y-3">
                        {cat.services.map((service, sIdx) => (
                            <li key={sIdx}>
                                <Link 
                                    to={service.link} 
                                    className="flex items-start group text-slate-600 hover:text-blue-700 transition-colors"
                                >
                                    <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors shrink-0"></div>
                                    <span className="text-base font-medium border-b border-transparent group-hover:border-blue-200 transition-all">
                                        {service.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
              ))}

              {/* CTA BLOCK IN GRID */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Не нашли то, что искали?</h3>
                  <p className="text-slate-300 mb-8">
                      Возможно, услуга называется иначе или предоставляется нашими партнерами. Свяжитесь с нами, мы найдем решение.
                  </p>
                  <a href="tel:+79243733330" className="flex items-center gap-3 text-xl font-bold hover:text-yellow-400 transition-colors mb-2">
                      <Phone size={24} className="text-yellow-400"/> +7 (924) 373-33-30
                  </a>
                  <a href="mailto:info@zabtpp.ru" className="flex items-center gap-3 text-lg font-medium text-slate-400 hover:text-white transition-colors">
                      <Mail size={20} /> info@zabtpp.ru
                  </a>
              </div>
           </div>

        </div>
      </section>
    </div>
  );
};

export default AllServicesPage;
