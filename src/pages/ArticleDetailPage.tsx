import React from 'react';
import { 
  Calendar, User, Share2, ArrowLeft, 
  Mail, Phone, MessageCircle, CheckCircle2,
  Clock, MapPin, Building, Globe
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const ArticleDetailPage: React.FC = () => {
  const navigate = useNavigate();

  // В реальном проекте здесь данные будут подгружаться по ID из URL
  const article = {
    title: "Развитие экспорта в Китай: новые требования к сертификации продукции в 2025 году",
    date: "23.12.2025",
    author: "Пресс-служба Забайкальской ТПП",
    category: "ВЭД и Китай",
    categoryPath: "/ved"
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title={`${article.title} | ТПП Забайкальского края`}
        description="Подробный разбор правил экспорта и сертификации для предпринимателей Забайкалья, Бурятии и других регионов РФ."
        keywords="экспорт в китай 2025, сертификация продукции чита, новости вэд, поддержка бизнеса"
      />

      {/* 1. HERO / HEADER СТАТЬИ */}
      <section className="relative bg-slate-900 pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Фон статьи" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          {/* Хлебные крошки (Светлая тема для темного фона) */}
          <Breadcrumbs 
            isDark={true}
            items={[
              { label: 'Новости', path: '/news' },
              { label: article.title }
            ]} 
          />

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <Calendar size={14} className="text-yellow-400" />
              {article.date}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-slate-300 text-sm border-t border-white/10 pt-8">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 text-yellow-400">
               <User size={20} />
            </div>
            <div>
              <p className="font-bold text-white">{article.author}</p>
              <p className="text-xs text-slate-500">Официальный орган ТПП РФ</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. КОНТЕНТ СТАТЬИ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8 italic border-l-4 border-yellow-400 pl-6">
              Забайкальская ТПП информирует участников внешнеэкономической деятельности об изменениях в порядке оформления документов для поставок через МАПП Забайкальск.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Основные изменения</h2>
            <p className="mb-6">
              В связи с обновлением требований таможенных органов КНР, с 1 января 2025 года вводится дополнительный регламент проверки страны происхождения товаров. Это касается в первую очередь продукции агропромышленного комплекса и строительных материалов, произведенных в <strong>Забайкальском крае, Республике Бурятия и Иркутской области</strong>.
            </p>
            
            <p className="mb-6">
              Наши эксперты из представительства в Забайкальске и центрального офиса в Чите уже начали консультации по подготовке расширенного пакета документов. Для компаний из Москвы и других центральных регионов РФ предусмотрен дистанционный аудит через ЭДО.
            </p>

            <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <CheckCircle2 className="text-blue-600" /> 
                 Что нужно сделать экспортеру сейчас:
               </h3>
               <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                 <li>- Проверить соответствие кодов ТН ВЭД актуальному классификатору.</li>
                 <li>- Запросить у производителя актуальные сертификаты качества и ТУ.</li>
                 <li>- Связаться со специалистом Палаты для предварительной экспертизы.</li>
               </ul>
            </div>

            <p className="mb-6">
              Важно отметить, что официальное заключение Торгово-промышленной палаты является весомым аргументом при возникновении споров по корректировке таможенной стоимости. Мы обеспечиваем легитимность вашего бизнеса на международной арене.
            </p>
          </div>

          {/* ШЕРИНГ И КНОПКА НАЗАД */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors"
            >
              <ArrowLeft size={18} /> Назад к списку
            </button>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Поделиться:</span>
              <div className="flex gap-2">
                <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"><Share2 size={18} /></button>
                <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"><MessageCircle size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA БЛОК (ВСТРОЕННЫЙ) */}
      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Нужна консультация по теме статьи?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Наши юристы и эксперты ВЭД готовы ответить на ваши вопросы и помочь с оформлением документов.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <a href="tel:+79243733330" className="text-2xl font-black text-yellow-400 hover:text-white transition-colors">+7 (924) 373-33-30</a>
              <a href="mailto:info@zabtpp.ru" className="flex items-center gap-2 text-blue-400 hover:text-white font-bold transition-colors"><Mail size={20} /> info@zabtpp.ru</a>
            </div>
            <Link to="/membership">
              <button className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-all hover:scale-105">
                Задать вопрос эксперту
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
