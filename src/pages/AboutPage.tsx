import React from 'react';
import { 
  Building2, FileText, MapPin, Phone, Mail, 
  Download, CheckCircle2, Globe, Users, Landmark,
  ShieldCheck, Award, MessageCircle, Clock, Building
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutPage: React.FC = () => {
  const documents = [
    { name: "Устав Союза «ТПП Забайкальского края»", size: "2.4 MB", type: "PDF" },
    { name: "Приказ ТПП РФ №14 (О тарифах на услуги)", size: "1.1 MB", type: "PDF" },
    { name: "Свидетельство о государственной регистрации", size: "0.8 MB", type: "JPG" },
    { name: "Положение о членских взносах", size: "0.5 MB", type: "PDF" }
  ];

  const contacts = [
    { title: "Приемная", phone: "+7 (924) 373-33-30", email: "info@zabtpp.ru", hours: "Пн-Пт: 09:00 - 18:00" },
    { title: "Отдел сертификации", phone: "+7 (924) 373-33-30", email: "expert@zabtpp.ru", hours: "Пн-Пт: 09:00 - 18:00" },
    { title: "Центр ВЭД", phone: "+7 (924) 373-33-30", email: "china@zabtpp.ru", hours: "Пн-Пт: 09:00 - 18:00" }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Об организации | ТПП Забайкальского края - Документы, Устав, Контакты"
        description="Официальная информация о Торгово-промышленной палате. Уставные документы, руководство, контакты отделов и представительство в Забайкальске."
        keywords="тпп чита контакты, устав забайкальской тпп, руководство палаты, документы тпп, адрес палаты чита"
      />

      {/* JSON-LD Микроразметка для организации */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentOrganization",
          "name": "Союз «Забайкальская торгово-промышленная палата»",
          "alternateName": "Забайкальская ТПП",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Бутина, 111, 2 этаж",
            "addressLocality": "Чита",
            "postalCode": "672000",
            "addressCountry": "RU"
          },
          "telephone": "+7-924-373-33-30",
          "email": "info@zabtpp.ru",
          "url": "https://zabtpp.ru"
        })}
      </script>

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <img src="/ztppv6/images/hero-bg.jpg" alt="ТПП Забайкальского края" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            
            <div className="flex justify-center mb-6">
              <Breadcrumbs 
                isDark={true}
                items={[{ label: 'О палате' }]} 
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Об организации <br/>
               <span className="text-yellow-400 text-3xl md:text-5xl">ТПП Забайкальского края</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
               Ведущее бизнес-объединение региона, входящее в глобальную сеть Торгово-промышленных палат. Мы защищаем интересы бизнеса более 30 лет.
            </p>
        </div>
      </section>

      {/* 2. ДОКУМЕНТЫ (СЕРАЯ СЕКЦИЯ) */}
      <section className="pt-0 pb-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 py-14 text-center">Официальные документы</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            {documents.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 border-b border-slate-50 last:border-0 hover:bg-blue-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{doc.name}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{doc.type} - {doc.size}</p>
                  </div>
                </div>
                <button className="p-3 text-slate-400 hover:text-blue-600 transition-colors">
                  <Download size={24} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. КОНТАКТЫ ПО ОТДЕЛАМ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Контакты отделов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((c, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">{c.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone size={18} className="text-blue-600" />
                    <span className="font-bold">{c.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail size={18} className="text-blue-600" />
                    <span className="font-medium">{c.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm italic">
                    <Clock size={18} className="text-slate-400" />
                    {c.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. АДРЕС И КАРТА */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Как нас найти</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-lg">Главный офис в Чите:</p>
                    <p className="text-slate-600">672000, г. Чита, ул. Бутина, 111, 2 этаж</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="text-blue-600 mt-1 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-lg">Представительство в Забайкальске:</p>
                    <p className="text-slate-600">пгт. Забайкальск (приграничный узел МАПП)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-100 rounded-2xl h-64 flex items-center justify-center text-slate-400 border border-slate-200">
              Здесь будет встроена Яндекс.Карта
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
