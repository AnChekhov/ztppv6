import React from 'react';
import { 
  Calendar, ArrowRight, Share2, 
  MessageCircle, Mail, ChevronDown, 
  Newspaper, Bell, Camera, MapPin
} from 'lucide-react';
import SEO from '../components/SEO';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Забайкальская ТПП подвела итоги года на встрече с предпринимателями",
      date: "22.12.2025",
      category: "События",
      desc: "В Чите состоялось итоговое заседание Правления Палаты. Обсудили результаты работы по поддержке экспортеров Забайкалья и Бурятии, а также планы на 2026 год."
    },
    {
      id: 2,
      title: "Новые возможности для экспорта в Китай через МАПП Забайкальск",
      date: "18.12.2025",
      category: "ВЭД",
      desc: "Эксперты Палаты приняли участие в рабочей встрече по вопросам ускорения таможенного оформления грузов на границе. Актуально для логистов из Иркутска и Москвы."
    },
    {
      id: 3,
      title: "Старт приема заявок на региональный этап премии «Золотой Меркурий»",
      date: "10.12.2025",
      category: "Конкурсы",
      desc: "Приглашаем компании Забайкальского края и соседних регионов принять участие в самом престижном конкурсе для малого и среднего бизнеса РФ."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title="Новости бизнеса и события ТПП | Забайкальский край, Бурятия, Иркутск"
        description="Актуальные новости экономики региона, анонсы бизнес-завтраков, выставок и семинаров. Официальная информация Забайкальской ТПП для предпринимателей всей России."
        keywords="новости тпп чита, события для бизнеса забайкалье, золотой меркурий чита, мероприятия для предпринимателей, бизнес новости бурятия"
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Новости Палаты" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Новости <span className="text-yellow-400">и события</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Будьте в курсе изменений в законодательстве, анонсов деловых встреч и жизни бизнес-сообщества Забайкалья, Бурятии и ДФО.
            </p>
        </div>
      </section>

      {/* 2. СПИСОК НОВОСТЕЙ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsItems.map((news) => (
              <article key={news.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col group cursor-pointer">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                      <Camera size={48} strokeWidth={1} />
                   </div>
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                      {news.category}
                   </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                    <Calendar size={14} /> {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {news.desc}
                  </p>
                  <div className="flex items-center text-blue-600 font-bold text-sm mt-auto">
                    Подробнее <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-white border-2 border-slate-200 text-slate-600 font-bold py-4 px-10 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all">
              Загрузить еще новости
            </button>
          </div>
        </div>
      </section>

      {/* 3. ПОДПИСКА */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/20">
            <Bell size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Следите за нами в Telegram</h2>
          <p className="text-slate-400 text-lg mb-8">
            Самые оперативные анонсы мероприятий и важные новости ВЭД в нашем канале.
          </p>
          <a 
            href="https://t.me/chitatpp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105"
          >
            <MessageCircle size={20} /> Подписаться на канал
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
