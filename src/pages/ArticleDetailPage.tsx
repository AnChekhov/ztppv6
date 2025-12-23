import React from 'react';
import { 
  Calendar, User, Share2, ArrowLeft, 
  Mail, Phone, MessageCircle, CheckCircle2
} from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

// Объединенная база данных для демонстрации (в реальном проекте это был бы API или отдельный файл)
const allContent = [
  {
    id: "1",
    title: "Забайкальская ТПП подвела итоги года на встрече с предпринимателями",
    date: "22.12.2025",
    category: "События",
    content: "В Чите состоялось итоговое заседание Правления Палаты. Обсудили результаты работы по поддержке экспортеров Забайкалья и Бурятии, а также планы на 2026 год. Председатель отметил рост интереса бизнеса к инструментам ВЭД."
  },
  {
    id: "2",
    title: "Новые возможности для экспорта в Китай через МАПП Забайкальск",
    date: "18.12.2025",
    category: "ВЭД",
    content: "Эксперты Палаты приняли участие в рабочей встрече по вопросам ускорения таможенного оформления грузов на границе. Актуально для логистов из Иркутска и Москвы. Обсуждались вопросы внедрения цифровых очередей."
  },
  {
    id: "3",
    title: "Старт приема заявок на региональный этап премии «Золотой Меркурий»",
    date: "10.12.2025",
    category: "Конкурсы",
    content: "Приглашаем компании Забайкальского края и соседних регионов принять участие в самом престижном конкурсе. Победители получат возможность представить край на федеральном уровне в Москве."
  },
  {
    id: "check-partner",
    title: "Как проверить контрагента в Китае: пошаговая инструкция",
    date: "20.12.2025",
    category: "Статьи",
    content: "Разбираем официальные реестры КНР и способы проверки благонадежности партнеров перед оплатой. Важно запрашивать бизнес-лицензию и проверять судебную историю компании через государственные системы Китая."
  },
  {
    id: "st1-changes",
    title: "Изменения в выдаче сертификатов СТ-1 в 2025 году",
    date: "15.12.2025",
    category: "Статьи",
    content: "Новые требования к документам производителя и сроки проведения экспертизы происхождения. Теперь для экспортеров из Бурятии и Забайкалья доступна ускоренная процедура через систему ЭДО."
  },
  {
    id: "construction-errors",
    title: "Судебная строительная экспертиза: типичные ошибки подрядчиков",
    date: "10.12.2025",
    category: "Статьи",
    content: "На что обратить внимание при приемке работ, чтобы иметь сильную позицию в арбитражном суде. Чаще всего проблемы возникают с актами скрытых работ и несоответствием материалов проектной документации."
  }
];

const ArticleDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Находим нужный материал в базе по ID из URL
  const item = allContent.find(article => article.id === id);

  // Если материал не найден
  if (!item) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Материал не найден</h2>
        <Link to="/news" className="text-blue-600 mt-4 inline-block">Вернуться к новостям</Link>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-900 bg-white">
      <SEO 
        title={`${item.title} | ТПП Забайкальского края`}
        description={item.content.substring(0, 160)}
        keywords="новости бизнеса, тпп чита, вэд, экспертиза"
      />

      <section className="relative bg-slate-900 pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="/ztppv6/images/hero-bg.jpg" alt="Фон" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <Breadcrumbs 
            isDark={true}
            items={[
              { label: 'Новости и статьи', path: '/news' },
              { label: item.title }
            ]} 
          />

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {item.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <Calendar size={14} className="text-yellow-400" />
              {item.date}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
            {item.title}
          </h1>

          <div className="flex items-center gap-4 text-slate-300 text-sm border-t border-white/10 pt-8">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 text-yellow-400">
               <User size={20} />
            </div>
            <div>
              <p className="font-bold text-white">Пресс-служба Палаты</p>
              <p className="text-xs text-slate-500">Официальный орган ТПП РФ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {item.content}
            </p>
            
            <p className="mb-6">
              Торгово-промышленная палата Забайкальского края продолжает работу по информированию предпринимателей региона об актуальных изменениях. Мы работаем с компаниями из <strong>Читы, Улан-Удэ, Иркутска</strong> и других городов, обеспечивая экспертную поддержку на каждом этапе развития бизнеса.
            </p>

            <div className="my-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <CheckCircle2 className="text-blue-600" size={20} /> 
                 Помощь экспертов ТПП:
               </h3>
               <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                 <li>- Профессиональные консультации по ВЭД и сертификации.</li>
                 <li>- Юридическая поддержка и свидетельствование форс-мажора.</li>
                 <li>- Проведение всех видов независимых экспертиз.</li>
               </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors"
            >
              <ArrowLeft size={18} /> Назад
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

      <section id="order-form" className="py-20 bg-slate-900 text-white scroll-mt-[72px]">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Нужна консультация?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Свяжитесь с нами, и эксперты Палаты помогут решить вашу задачу в кратчайшие сроки.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <a href="tel:+79243733330" className="text-2xl font-black text-yellow-400 hover:text-white transition-colors">+7 (924) 373-33-30</a>
              <a href="mailto:info@zabtpp.ru" className="flex items-center gap-2 text-blue-400 hover:text-white font-bold transition-colors"><Mail size={20} /> info@zabtpp.ru</a>
            </div>
            <Link to="/membership">
              <button className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-xl hover:bg-yellow-500 transition-all hover:scale-105">
                Стать членом Палаты
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
