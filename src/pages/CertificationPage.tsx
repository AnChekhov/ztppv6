import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Banknote, 
  Download, 
  CheckCircle2, 
  UploadCloud, 
  Phone, 
  Mail, 
  Globe,
  CheckCircle,
  ChevronDown,
  Check,
  FileCheck,
  MessageCircle
} from 'lucide-react';

export const CertificationPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Функция для скролла к форме
  const scrollToForm = () => {
    const formSection = document.getElementById('order-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Можно ли оформить один сертификат на несколько поставок?",
      answer: "Обычно сертификат выдается на одну партию товара. Однако, в некоторых случаях и для определенных стран возможна выдача периодического сертификата. Рекомендуем уточнить этот момент у наших специалистов под ваш конкретный контракт."
    },
    {
      question: "Что делать, если в производстве используется импортное сырье?",
      answer: "Если в производстве используется импортное сырье, необходимо доказать, что товар подвергся достаточной переработке. Критерии переработки (смена кода ТН ВЭД, правило адвалорной доли и др.) зависят от соглашения со страной экспорта."
    },
    {
      question: "Нужен ли оригинал сертификата или достаточно копии?",
      answer: "Для предоставления в таможенные органы обычно требуется оригинал документа. Копии могут быть использованы для предварительного информирования или внутренних нужд контрагентов, но таможенные преференции предоставляются на основании оригинала."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-16 h-full flex flex-col justify-center">
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Левая колонка */}
              <div className="lg:col-span-7 max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Заказать сертификат происхождения товара в <span className="text-yellow-400">Забайкальской ТПП</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Оформите ключевой документ для экспорта онлайн. Получите льготы и преференции для вашего бизнеса. Гарантия прохождения таможни.
                </p>
                
                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToForm}
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                  >
                    Заказать сертификат
                  </button>
                  <button 
                    onClick={scrollToForm}
                    className="border-2 border-slate-600 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle size={20} />
                    Проконсультироваться
                  </button>
                </div>
              </div>

              {/* Правая колонка */}
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
                <div className="absolute w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                   <FileCheck 
                      size={300} 
                      strokeWidth={1}
                      className="text-slate-600/70 drop-shadow-2xl" 
                   />
                   <FileCheck 
                      size={300} 
                      strokeWidth={1}
                      className="absolute top-0 left-0 text-white/10" 
                   />
                </div>
              </div>

            </div>
        </div>
      </section>

      {/* 2. ТИПЫ СЕРТИФИКАТОВ */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Выберите нужный Вам тип сертификата</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'Общая форма', countries: 'Все остальные страны', purpose: 'Подтверждение страны происхождения для таможенных целей' },
              { type: 'СТ-1', countries: 'Государства-участники СНГ', purpose: 'Получение тарифных преференций (снижение/отмена пошлин)' },
              { type: 'СТ-2', countries: 'Сербия', purpose: 'Получение преференций в рамках соглашения о свободной торговле' },
              { type: 'EAV', countries: 'Вьетнам', purpose: 'Получение преференций в рамках соглашения о свободной торговле' },
              { type: 'Форма "А"', countries: 'Черногория', purpose: 'Получение преференций в рамках Генеральной системы' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xl font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg whitespace-nowrap">{item.type}</span>
                  <Globe className="text-slate-300" size={22} />
                </div>
                <div className="mb-3">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Назначение</div>
                  <div className="font-bold text-slate-800 text-sm">{item.countries}</div>
                </div>
                <div className="mb-0">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Цель</div>
                  <div className="text-sm text-slate-600 leading-snug">{item.purpose}</div>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-900 rounded-2xl p-5 shadow-sm flex flex-col justify-center items-center text-center">
              <h3 className="text-white font-bold text-lg mb-2">Нужна помощь?</h3>
              <p className="text-slate-400 text-xs mb-4">Наши эксперты помогут определить нужный тип сертификата для вашего груза.</p>
              <button onClick={scrollToForm} className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-sm">
                Консультация
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ЦИФРЫ И СРОКИ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="text-center px-4 pt-4 md:pt-0">
              <Banknote className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                от 2288 ₽ <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Стоимость услуги<br/><span className="text-sm">(зависит от вида товара)</span></p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <Clock className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              {/* ✅ ИЗМЕНЕНО: "от 1 дня" -> "за 2 часа" */}
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                за 2 часа <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Срок оформления<br/><span className="text-sm">(после подачи документов)</span></p>
            </div>
            
            <div className="text-center px-4 pt-4 md:pt-0">
              <Calendar className="mx-auto text-blue-600 mb-4 h-10 w-10" />
              <div className="text-4xl font-extrabold text-slate-900 mb-2 relative inline-block">
                12 месяцев <span className="text-slate-400 text-xl absolute -top-1 -right-4">*</span>
              </div>
              <p className="text-slate-500 mt-2">Срок действия<br/><span className="text-sm">(с даты выдачи)</span></p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-left">
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-lg align-middle mr-1">*</span> 
              Стоимость, сроки оформления и период действия сертификата зависят от номенклатуры товара и страны назначения. Точную информацию уточнит специалист Палаты после анализа документов.
            </p>
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
              { name: 'Заявление на выдачу сертификата', req: 'Заполняется по форме, печать организации', link: true },
              { name: 'Копия экспортного контракта', req: 'Заверенная печатью и подписью', link: false },
              { name: 'Копия счета-фактуры (инвойса)', req: 'Заверенная печатью и подписью', link: false },
              { name: 'Письмо от производителя', req: 'Подтверждение производства в РФ с долей сырья', link: true },
              { name: 'Учредительные документы', req: 'Копии ОГРН, ИНН, Устава (для первой подачи)', link: false },
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Закажите сертификат онлайн</h2>
              <p className="text-slate-300 text-lg mb-8">
                Оставьте заявку, и мы подготовим все необходимые документы для получения сертификата происхождения.
              </p>
              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Быстрая проверка документов</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Расчет точной стоимости</span>
                </li>
                 <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 shrink-0" />
                  <span>Помощь в заполнении</span>
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

                <div>
                   <label className="block text-sm font-bold mb-2">Контактное лицо</label>
                   <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Иванов Иван" />
                </div>

                <div>
                   <label className="block text-sm font-bold mb-2">Тип сертификата</label>
                   <div className="relative">
                     <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer appearance-none text-slate-700">
                       <option>Общая форма</option>
                       <option>СТ-1 (СНГ)</option>
                       <option>СТ-2 (Сербия)</option>
                       <option>EAV (Вьетнам)</option>
                       <option>Форма А</option>
                       <option>Не знаю, нужна консультация</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <ChevronDown size={20} />
                     </div>
                   </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-bold mb-2">Прикрепите документы</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors group">
                    <UploadCloud className="text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" size={32} />
                    <span className="text-sm text-slate-500 font-medium">Перетащите файлы сюда или нажмите для загрузки</span>
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
            <div className="flex items-center gap-6 bg-white p-6 rounded-2xl w-full md:w-auto md:min-w-[400px] shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-slate-100">
                 <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white text-2xl font-bold">И</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Иванова Елена</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">Ведущий специалист</p>
                <div className="flex flex-col gap-1 text-sm text-slate-600">
                  <a href="tel:+73022355598" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Phone size={14}/> +7 (3022) 35-55-98</a>
                  <a href="mailto:ivanova.e@ztpp.ru" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail size={14}/> ivanova.e@ztpp.ru</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white p-6 rounded-2xl w-full md:w-auto md:min-w-[400px] shadow-sm hover:shadow-md transition-all">
              <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-slate-100">
                 <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-2xl font-bold">П</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Петров Сергей</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">Эксперт по ВЭД</p>
                <div className="flex flex-col gap-1 text-sm text-slate-600">
                   <a href="tel:+73022355599" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Phone size={14}/> +7 (3022) 35-55-99</a>
                   <a href="mailto:petrov.s@ztpp.ru" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail size={14}/> petrov.s@ztpp.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CertificationPage;
