import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Globe, FileCheck, Scale, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './components/ui/Button';

// --- КОМПОНЕНТЫ ИНТЕРФЕЙСА ---

// Шапка и Подвал
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      
      {/* HEADER: Light Authority Style */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          
          {/* ЛОГОТИП И НАЗВАНИЕ */}
          <Link to="/" className="flex items-center gap-4 group">
             {/* Используем ТЕМНЫЙ логотип для светлого фона */}
             <img 
               src="images/logo-TPP-indigo.png" 
               alt="ТПП Забайкальского края" 
               className="h-14 w-auto object-contain" 
             />
             <div className="hidden md:flex flex-col justify-center border-l border-slate-300 pl-4 h-10">
               <span className="text-sm font-extrabold text-tpp-dark leading-tight max-w-[200px] uppercase tracking-wide">
                 Торгово-промышленная палата
               </span>
               <span className="text-xs font-semibold text-tpp-secondary">
                 Забайкальского края
               </span>
             </div>
          </Link>
          
          {/* НАВИГАЦИЯ (Десктоп) */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6">
              <Link to="/" className="text-slate-700 hover:text-tpp-secondary font-semibold transition-colors">Услуги</Link>
              <Link to="/membership" className="text-slate-700 hover:text-tpp-secondary font-semibold transition-colors">Членство</Link>
              <Link to="/ved" className="text-slate-700 hover:text-tpp-secondary font-semibold transition-colors">ВЭД и Китай</Link>
              <Link to="/news" className="text-slate-700 hover:text-tpp-secondary font-semibold transition-colors">Пресс-центр</Link>
            </nav>
            
            {/* Блок контактов в шапке */}
            <div className="flex flex-col items-end mr-4">
                <div className="flex items-center gap-2 text-tpp-dark font-bold">
                    <Phone size={16} className="text-tpp-secondary"/>
                    +7 (3022) 12-34-56
                </div>
                <span className="text-xs text-slate-500">пн-пт 9:00 - 18:00</span>
            </div>

            <Button variant="lime" to="/join" className="shadow-lg shadow-lime-200/50">Вступить в палату</Button>
          </div>

          {/* Мобильное меню (Кнопка) */}
          <button className="lg:hidden text-tpp-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Мобильное меню (Выпадашка) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-2xl">
            <Link to="/" className="text-lg font-semibold py-2">Услуги</Link>
            <Link to="/membership" className="text-lg font-semibold py-2">Членство</Link>
            <Link to="/ved" className="text-lg font-semibold py-2">ВЭД и Китай</Link>
            <Button variant="lime" className="w-full justify-center">Вступить в палату</Button>
          </div>
        )}
      </header>

      {/* Основной контент */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer (Оставляем темным для контраста) */}
      <footer className="bg-tpp-dark text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
                <img src="images/logo-TPP-white.png" alt="Logo" className="h-10 w-auto opacity-90" />
                <div className="text-sm font-bold leading-tight text-slate-300">
                    Торгово-промышленная<br/>палата<br/>Забайкальского края
                </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Союз предпринимателей, работающий на благо развития экономики региона с 1994 года.
            </p>
            <div className="flex gap-4">
                {/* Соцсети заглушки */}
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-tpp-secondary cursor-pointer transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.959 12.002c3.578 0 6.666-1.543 8.89-3.96l-1.353-3.235c-1.71 1.93-4.322 3.195-7.537 3.195-3.328 0-6.023-1.348-7.697-3.414l-1.464 2.87c2.277 2.658 5.492 4.544 9.161 4.544zm0 2.06c-5.498 0-9.982-2.903-12.067-7.238l-1.892 3.706c2.81 5.922 8.71 10.032 15.546 10.032 6.305 0 11.83-3.457 14.868-8.662l-1.548-3.704c-2.43 4.567-7.295 7.866-12.907 7.866z"/></svg>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-tpp-secondary cursor-pointer transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Контакты</h4>
            <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                    <div className="min-w-[20px] pt-1"><svg className="w-5 h-5 text-tpp-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                    <span>672000, г. Чита,<br/> ул. Шилова, 100</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone size={18} className="text-tpp-primary" />
                    <span>+7 (3022) 12-34-56</span>
                </li>
                <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-tpp-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>info@zabcct.ru</span>
                </li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 text-white">Навигация</h4>
             <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-tpp-primary transition">Об организации</Link></li>
                <li><Link to="/members" className="hover:text-tpp-primary transition">Реестр членов</Link></li>
                <li><Link to="/committees" className="hover:text-tpp-primary transition">Комитеты</Link></li>
                <li><Link to="/corruption" className="hover:text-tpp-primary transition">Противодействие коррупции</Link></li>
                <li><Link to="/contacts" className="hover:text-tpp-primary transition">Контакты</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 text-white">Услуги</h4>
             <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/services/cert" className="hover:text-tpp-primary transition">Сертификация</Link></li>
                <li><Link to="/services/expert" className="hover:text-tpp-primary transition">Товарная экспертиза</Link></li>
                <li><Link to="/services/valuation" className="hover:text-tpp-primary transition">Оценка собственности</Link></li>
                <li><Link to="/services/translate" className="hover:text-tpp-primary transition">Переводы</Link></li>
                <li><Link to="/services/law" className="hover:text-tpp-primary transition">Юридические услуги</Link></li>
             </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-xs text-slate-500">
            <p>© 2025 Союз «Торгово-промышленная палата Забайкальского края».</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white">Карта сайта</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

// --- СТРАНИЦЫ ---

// Главная страница
const HomePage = () => {
  return (
    <>
      {/* HERO SECTION: Business Focus */}
      <section className="relative bg-tpp-dark text-white min-h-[600px] flex items-center">
        {/* Dark Overlay & Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 pt-10">
          <div>
              <span className="inline-block px-3 py-1 rounded border border-slate-600 bg-slate-800/50 text-slate-300 text-xs font-bold mb-6 uppercase tracking-wider">
                Официальный представитель бизнеса
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Открываем <span className="text-tpp-primary">новые рынки</span> для бизнеса Забайкалья
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Помогаем предпринимателям выходить на рынок Китая, оформляем сертификаты происхождения и защищаем ваши интересы на государственном уровне.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="lime" className="h-14 px-8 text-lg">Получить консультацию <ArrowRight size={20}/></Button>
                <Button variant="outline" className="h-14 px-8 text-lg border-slate-500 text-white hover:bg-white hover:text-slate-900">Стать партнером</Button>
              </div>

              <div className="mt-10 flex gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-tpp-primary rounded-full"></span>Частые запросы:</span>
                  <a href="#" className="hover:text-white underline decoration-slate-600 underline-offset-4">Сертификат СТ-1</a>
                  <a href="#" className="hover:text-white underline decoration-slate-600 underline-offset-4">Поиск партнеров в КНР</a>
                  <a href="#" className="hover:text-white underline decoration-slate-600 underline-offset-4">Экспертиза товаров</a>
              </div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS (Сразу после Hero для авторитета) */}
      <section className="py-12 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                  <div>
                      <div className="text-4xl font-black text-slate-900 mb-1">30+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Лет работы</div>
                  </div>
                  <div>
                      <div className="text-4xl font-black text-slate-900 mb-1">450+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Членов палаты</div>
                  </div>
                  <div>
                      <div className="text-4xl font-black text-slate-900 mb-1">5000+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Экспертиз в год</div>
                  </div>
                  <div>
                      <div className="text-4xl font-black text-slate-900 mb-1">120</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Партнеров в КНР</div>
                  </div>
              </div>
          </div>
      </section>

      {/* KEY SERVICES (Воронка продаж) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Комплексная поддержка вашего бизнеса</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">Мы предоставляем более 40 видов услуг для экспортеров, производителей и предпринимателей региона. Наша экспертиза признана на международном уровне.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: China */}
            <div className="bg-tpp-dark rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe size={100} />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-tpp-primary border border-white/10">
                    <Globe size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">ВЭД и работа с Китаем</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">Поиск надежных партнеров в КНР, организация бизнес-миссий, проверка контрагентов и сопровождение экспортных контрактов под ключ.</p>
                <a href="#" className="inline-flex items-center text-tpp-primary font-bold hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight size={16} className="ml-2"/>
                </a>
            </div>

            {/* Card 2: Certificates */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    <FileCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Сертификация и Экспертиза</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Выдача сертификатов происхождения товаров (СТ-1, форма А), удостоверение документов ВЭД, экспертиза качества и количества товаров.</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight size={16} className="ml-2"/>
                </a>
            </div>

            {/* Card 3: Law */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    <Scale size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Юридическая защита</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Свидетельствование форс-мажора, международный коммерческий арбитраж, медиация и защита интересов бизнеса в органах власти.</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight size={16} className="ml-2"/>
                </a>
            </div>
            
            {/* Дополнительные карточки (маленькие) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-tpp-secondary transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Таможенное консультирование</h4>
               <p className="text-sm text-slate-500 mb-4">Классификация товаров, расчет платежей.</p>
               <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Подробнее <ArrowRight size={14} className="ml-1"/></a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-tpp-secondary transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Обучение и Развитие</h4>
               <p className="text-sm text-slate-500 mb-4">Семинары, тренинги, деловое образование.</p>
               <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Подробнее <ArrowRight size={14} className="ml-1"/></a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-tpp-secondary transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Клубная деятельность</h4>
               <p className="text-sm text-slate-500 mb-4">Закрытые встречи, нетворкинг, GR.</p>
               <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Подробнее <ArrowRight size={14} className="ml-1"/></a>
            </div>

          </div>
          
          <div className="text-center mt-12">
             <Button variant="outline" className="border-slate-300 text-slate-600 hover:border-tpp-secondary hover:text-tpp-secondary">Посмотреть полный каталог услуг</Button>
          </div>
        </div>
      </section>
      
      {/* MEMBERSHIP CTA */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
             <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                 {/* Background decoration */}
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 translate-x-20"></div>
                 
                 <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                     <div>
                         <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Станьте членом Союза «ТТП Забайкальского края»</h2>
                         <p className="text-slate-300 mb-8 text-lg">Присоединяйтесь к сообществу из 450+ успешных компаний. Получите доступ к закрытым мероприятиям, прямой диалог с властью и скидки на услуги палаты.</p>
                         
                         <ul className="space-y-4 mb-10">
                             <li className="flex items-center text-white gap-3">
                                 <CheckCircle2 className="text-tpp-primary" /> Защита и продвижение интересов вашего бизнеса
                             </li>
                             <li className="flex items-center text-white gap-3">
                                 <CheckCircle2 className="text-tpp-primary" /> Скидки до 20% на услуги сертификации и экспертизы
                             </li>
                             <li className="flex items-center text-white gap-3">
                                 <CheckCircle2 className="text-tpp-primary" /> Участие в международных бизнес-миссиях
                             </li>
                         </ul>
                     </div>
                     <div className="flex flex-col gap-4 items-center md:items-start">
                         <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
                             <h3 className="font-bold text-xl mb-2 text-slate-900">Подать заявку онлайн</h3>
                             <p className="text-slate-500 text-sm mb-6">Заполните простую форму, и мы свяжемся с вами.</p>
                             <Button variant="lime" className="w-full justify-center text-lg h-12">Подать заявку</Button>
                             <Button variant="ghost" className="w-full justify-center mt-2">Узнать условия членства</Button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Новости и События</h2>
                    <p className="text-slate-500">Будьте в курсе деловой жизни региона</p>
                </div>
                <a href="#" className="text-blue-600 font-bold hover:text-blue-800 transition hidden md:block">Все новости</a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* News 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
                    <div className="h-48 bg-slate-200 relative">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop" alt="News" className="w-full h-full object-cover"/>
                        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold text-slate-900">Законодательство</span>
                    </div>
                    <div className="p-6">
                        <div className="text-xs text-slate-400 mb-3">24 Окт 2025</div>
                        <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition">Изменения в таможенном кодексе: что нужно знать экспортерам в 2024 году</h3>
                        <a href="#" className="text-sm font-bold text-blue-600 flex items-center mt-4">Читать далее <ArrowRight size={14} className="ml-1"/></a>
                    </div>
                </div>
                
                {/* News 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
                    <div className="h-48 bg-slate-200 relative">
                         <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e3169?q=80&w=2000&auto=format&fit=crop" alt="News" className="w-full h-full object-cover"/>
                        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold text-slate-900">Мероприятия</span>
                    </div>
                    <div className="p-6">
                        <div className="text-xs text-slate-400 mb-3">22 Окт 2025</div>
                        <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition">Итоги бизнес-миссии в Маньчжурию: подписано 5 новых контрактов</h3>
                        <a href="#" className="text-sm font-bold text-blue-600 flex items-center mt-4">Читать далее <ArrowRight size={14} className="ml-1"/></a>
                    </div>
                </div>

                {/* News 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
                    <div className="h-48 bg-slate-200 relative">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" alt="News" className="w-full h-full object-cover"/>
                        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold text-slate-900">Обучение</span>
                    </div>
                    <div className="p-6">
                        <div className="text-xs text-slate-400 mb-3">18 Окт 2025</div>
                        <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-600 transition">Семинар: «Маркировка товаров легкой промышленности». Регистрация открыта</h3>
                        <a href="#" className="text-sm font-bold text-blue-600 flex items-center mt-4">Читать далее <ArrowRight size={14} className="ml-1"/></a>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">Раздел Услуг (В разработке)</h1></div>} />
        <Route path="/news" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">Новости (В разработке)</h1></div>} />
        <Route path="/join" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">Вступление в палату (В разработке)</h1></div>} />
        <Route path="/ved" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">ВЭД (В разработке)</h1></div>} />
        <Route path="/membership" element={<div className="container mx-auto p-10"><h1 className="text-3xl font-bold">Членство (В разработке)</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
