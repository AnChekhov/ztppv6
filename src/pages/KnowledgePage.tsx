import React, { useState } from 'react';
import { 
  BookOpen, Search, FileText, ChevronDown, 
  ArrowRight, BookMarked, Lightbulb, MessageCircle,
  HelpCircle, Globe, ShieldCheck, Gavel
} from 'lucide-react';
import SEO from '../components/SEO';

const KnowledgePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'articles' | 'glossary'>('articles');

  const scrollToForm = () => {
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const blogPosts = [
    {
      title: "Как проверить контрагента в Китае: пошаговая инструкция",
      category: "ВЭД и Китай",
      date: "20.12.2025",
      desc: "Разбираем официальные реестры КНР и способы проверки благонадежности партнеров перед оплатой."
    },
    {
      title: "Изменения в выдаче сертификатов СТ-1 в 2025 году",
      category: "Сертификация",
      date: "15.12.2025",
      desc: "Новые требования к документам производителя и сроки проведения экспертизы происхождения."
    },
    {
      title: "Судебная строительная экспертиза: типичные ошибки подрядчиков",
      category: "Экспертиза",
      date: "10.12.2025",
      desc: "На что обратить внимание при приемке работ, чтобы иметь сильную позицию в арбитражном суде."
    }
  ];

  const terms = [
    { term: "Инкотермс (Incoterms)", definition: "Международные правила по толкованию наиболее широко используемых торговых терминов в области внешней торговли." },
    { term: "Адвалорная ставка", definition: "Вид таможенной пошлины, которая рассчитывается в процентах от таможенной стоимости товара." },
    { term: "Форс-мажор", definition: "Обстоятельство непреодолимой силы, которое невозможно предвидеть или предотвратить (стихийные бедствия, военные действия)." },
    { term: "ТН ВЭД", definition: "Товарная номенклатура внешнеэкономической деятельности, используемая для классификации товаров на таможне." }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="База знаний для бизнеса | Статьи ВЭД, Глоссарий терминов | ТПП"
        description="Полезные экспертные статьи для предпринимателей. Глоссарий терминов ВЭД, инструкции по проверке контрагентов и изменения в законодательстве."
        keywords="бизнес статьи чита, база знаний вэд, термины таможня, советы предпринимателям забайкалья, блог тпп"
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="/ztppv6/images/hero-bg.jpg" alt="База знаний" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               База знаний <span className="text-yellow-400">для бизнеса</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Инструкции, экспертные статьи и словарь терминов ВЭД. Мы делимся знаниями, чтобы ваш бизнес работал эффективнее.
            </p>
        </div>
      </section>

      {/* 2. ПЕРЕКЛЮЧАТЕЛЬ РАЗДЕЛОВ */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-center gap-4">
          <button 
            onClick={() => setActiveTab('articles')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'articles' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Экспертные статьи
          </button>
          <button 
            onClick={() => setActiveTab('glossary')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'glossary' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Глоссарий ВЭД
          </button>
        </div>
      </section>

      {/* 3. КОНТЕНТ (СТАТЬИ) */}
      {activeTab === 'articles' && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col group cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{post.desc}</p>
                  <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Читать статью <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <button className="border-2 border-slate-200 text-slate-600 font-bold py-3 px-8 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all">
                Показать больше статей
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4. КОНТЕНТ (ГЛОССАРИЙ) */}
      {activeTab === 'glossary' && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="space-y-6">
              {terms.map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{item.term}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Не нашли ответ?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Если у вас есть специфический вопрос по ВЭД, праву или сертификации, напишите нам. Наши эксперты подготовят разъяснение.
              </p>
              <div className="pt-8 border-t border-slate-700">
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-yellow-400 hover:text-white transition-colors mb-4">+7 (924) 373-33-30</a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium"><Mail size={20} /> info@zabtpp.ru</a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Ваш вопрос или тема статьи" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Имя" />
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="+7 (___) ___-__-__" />
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all mt-4">Отправить запрос</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default KnowledgePage;
