import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Scale, 
  Gavel, 
  Truck, 
  Factory, 
  FileText,
  Phone, 
  Mail, 
  CheckCircle,
  ChevronDown,
  UploadCloud,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
  Globe,
  Download,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

export const ExpertisePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Имеет ли акт экспертизы ТПП юридическую силу в суде?",
      answer: "Да, безусловно. Торгово-промышленная палата имеет статус независимой экспертной организации (Закон РФ «О торгово-промышленных палатах»). Наши акты признаются судами, таможенными органами и страховыми компаниями как официальное доказательство."
    },
    {
      question: "Выезжает ли эксперт на место осмотра?",
      answer: "Да, наши эксперты оперативно выезжают на склады, СВХ, железнодорожные станции и производства в Чите и по всему Забайкальскому краю. Также возможен выезд в приграничные зоны."
    },
    {
      question: "Что делать, если товар пришел с браком?",
      answer: "Необходимо приостановить приемку, обеспечить сохранность груза и срочно вызвать эксперта ТПП. Не подписывайте чистые накладные без отметки о вызове эксперта. Мы зафиксируем факт брака, составим акт, который станет основанием для претензии поставщику."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[65vh] flex items-center justify-center">
        {/* ✅ ИСПРАВЛЕНО: Путь /ztppv6/... и opacity-40 */}
        <div className="absolute inset-0 opacity-40">
            <img 
              src="/ztppv6/images/hero-bg.jpg" 
              alt="Expertise Background" 
              className="w-full h-full object-cover"
            />
        </div>
        {/* ✅ ИСПРАВЛЕНО: Градиент via-slate-900/80 */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/50"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center">
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Независимая товарная экспертиза в <span className="text-yellow-400">Забайкальском крае</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Защитите свой бизнес от убытков. Профессиональная приемка товаров, выявление брака и оценка ущерба. Акты ТПП признаются судами и таможней.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToForm}
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                  >
                    Заказать экспертизу
                  </button>
                  <button 
                    onClick={scrollToForm}
                    className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle size={20} />
                    Проконсультироваться
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                   <ClipboardCheck size={300} strokeWidth={1} className="text-slate-600/70 drop-shadow-2xl" />
                   <ClipboardCheck size={300} strokeWidth={1} className="absolute top-0 left-0 text-white/10" />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 2. ВИДЫ ЭКСПЕРТИЗ */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Какие задачи мы решаем</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Приемка по количеству и качеству', 
                desc: 'Проверка соответствия товара условиям контракта, ГОСТам и спецификациям при поступлении на склад.',
                icon: Truck 
              },
              { 
                title: 'Экспертиза по 44-ФЗ', 
                desc: 'Обязательная внешняя экспертиза исполнения контрактов для государственных и муниципальных заказчиков.',
                icon: FileText 
              },
              { 
                title: 'Таможенная экспертиза', 
                desc: 'Идентификация товара для целей таможенного оформления, определение кодов ТН ВЭД, страны происхождения.',
                icon: Globe 
              },
              { 
                title: 'Определение ущерба', 
                desc: 'Фиксация повреждений груза при транспортировке, пожаре или затоплении. Оценка стоимости ущерба.',
                icon: ShieldCheck 
              },
              { 
                title: 'Судебная экспертиза', 
                desc: 'Проведение экспертиз по определению суда или постановлению следователя. Рецензирование заключений.',
                icon: Gavel 
              },
              { 
                title: 'Экспертиза оборудования', 
                desc: 'Оценка технического состояния, комплектности и производительности промышленного оборудования.',
                icon: Factory 
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                   <button onClick={scrollToForm} className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                     Подробнее →
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПОЧЕМУ ТПП */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="text-center px-4 pt-4 md:pt-0">
              <Scale className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-2xl font-extrabold text-slate-900 mb-2">Независимость</div>
              <p className="text-slate-500 text-sm leading-relaxed">Мы не зависим от продавцов, покупателей или госорганов. Наш статус закреплен Федеральным законом.</p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <MapPin className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-2xl font-extrabold text-slate-900 mb-2">Оперативность</div>
              <p className="text-slate-500 text-sm leading-relaxed">Штат экспертов в Чите и представительства в Забайкальске. Выезд на осмотр в день заявки.</p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <Clock className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-2xl font-extrabold text-slate-900 mb-2">Опыт с 1994 года</div>
              <p className="text-slate-500 text-sm leading-relaxed">Более 3000 экспертиз ежегодно. Наши акты проходят любые проверки и суды.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ДОКУМЕНТЫ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для проведения экспертизы</h2>
            <p className="text-slate-500">Минимальный пакет документов для начала работы</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
            {[
              { name: 'Заявка на проведение экспертизы', req: 'По форме Палаты', link: true },
              { name: 'Контракт / Договор поставки', req: 'Копия', link: false },
              { name: 'Товаросопроводительные документы', req: 'Инвойс, накладные, упаковочные листы', link: false },
              { name: 'Сертификаты качества / Паспорта', req: 'При наличии от производителя', link: false },
            ].map((doc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-slate-100 last:border-0 hover:bg-blue-50/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-1 md:mt-0">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{doc.name}</h4>
                    <p className="text-slate-500 text-sm">{doc.req}</p>
                  </div>
                </div>
                
                {doc.link ? (
                  <a href="#" className="mt-4 md:mt-0 flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors whitespace-nowrap bg-blue-50 px-4 py-2 rounded-lg">
                    <Download size={16} className="mr-2" />
                    Скачать бланк
                  </a>
                ) : (
                   <div className="mt-4 md:mt-0 text-blue-600 font-bold text-xl select-none px-6 py-2">—</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA ФОРМА */}
      <section id="order-form" className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Левая колонка */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Закажите экспертизу онлайн</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте заявку, и мы рассчитаем стоимость работ и согласуем время выезда эксперта.
              </p>
              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Выезд эксперта в течение 24 часов</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Официальный акт установленного образца</span>
                </li>
                 <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Бесплатная консультация</span>
                </li>
              </ul>

              {/* Контакты для связи */}
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-400 text-sm mb-3 font-medium uppercase tracking-wider">
                  Нет времени заполнять форму?
                </p>
                <p className="text-slate-300 text-base mb-4">
                  Решим ваш вопрос по телефону прямо сейчас:
                </p>
                <a href="tel:+79243733330" className="block text-3xl md:text-4xl font-extrabold text-white hover:text-yellow-400 transition-colors mb-4">
                  +7 (924) 373-33-30
                </a>
                <a href="mailto:info@zabtpp.ru" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors text-lg font-medium">
                  <Mail size={20} /> info@zabtpp.ru
                </a>
              </div>
            </div>

            {/* Правая колонка: Форма */}
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Название организации</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="ООО 'Пример'" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">ИНН</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="1234567890" />
                  </div>
                   <div>
                    <label className="block text-sm font-bold mb-2">Телефон</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                {/* Select: Вид экспертизы */}
                <div>
                   <label className="block text-sm font-bold mb-2">Вид экспертизы</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer appearance-none text-slate-700">
                       <option>Приемка (Качество/Количество)</option>
                       <option>По 44-ФЗ (Госзакупки)</option>
                       <option>Таможенная экспертиза</option>
                       <option>Оценка ущерба</option>
                       <option>Судебная экспертиза</option>
                       <option>Другое / Нужна консультация</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <ChevronDown size={20} />
                     </div>
                   </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-bold mb-2">Документы (если есть)</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                    <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
                    <span className="text-sm text-slate-500 font-medium">Загрузить контракт или фото</span>
                  </div>
                </div>

                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-4">
                  Отправить заявку
                </button>
                <p className="text-xs text-center text-slate-400 mt-3">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Часто задаваемые вопросы</h2>
          
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

      {/* 7. КОМАНДА */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Эксперты Палаты</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-6 bg-white p-6 rounded-2xl w-full md:w-auto md:min-w-[400px] shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-slate-100">
                 <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-2xl font-bold">Э</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Экспертный отдел</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">Прием заявок</p>
                <div className="flex flex-col gap-1 text-sm text-slate-600">
                  <a href="tel:+73022355599" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Phone size={14}/> +7 (3022) 35-55-99</a>
                  <a href="mailto:expert@ztpp.ru" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail size={14}/> expert@ztpp.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExpertisePage;
