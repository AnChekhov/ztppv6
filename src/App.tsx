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
      
      {/* HEADER: Исправленная структура по UI/UX аудиту */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-24 flex items-center justify-between">
          
          {/* 1. ЛОГОТИП И НАЗВАНИЕ (Выровнено, возвращен "СОЮЗ") */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
             <img 
               src="images/logo-TPP-indigo.png" 
               alt="ТПП Забайкальского края" 
               className="h-14 w-auto object-contain" 
             />
             <div className="hidden md:flex flex-col justify-center border-l border-slate-300 pl-4 h-12">
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">
                 Союз
               </span>
               <span className="text-sm font-extrabold text-tpp-dark leading-tight max-w-[220px] uppercase">
                 Торгово-промышленная палата <br/>
                 <span className="text-tpp-secondary">Забайкальского края</span>
               </span>
             </div>
          </Link>
          
          {/* 2. НАВИГАЦИЯ (Центральный блок) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-700">
              <Link to="/" className="hover:text-tpp-secondary transition-colors">Услуги</Link>
              <Link to="/membership" className="hover:text-tpp-secondary transition-colors">Членство</Link>
              <Link to="/ved" className="hover:text-tpp-secondary transition-colors">ВЭД и Китай</Link>
              <Link to="/news" className="hover:text-tpp-secondary transition-colors">Пресс-центр</Link>
          </nav>
            
          {/* 3. КОНТАКТЫ И КНОПКА (Правый блок) */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Блок контактов: Иконка слева, текст выровнен */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-tpp-secondary shrink-0">
                    <Phone size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-extrabold text-slate-900 leading-none mb-1">+7 (3022) 12-34-56</span>
                    <span className="text-xs font-medium text-slate-500">пн-пт 9:00 - 18:00</span>
                </div>
            </div>

            {/* Кнопка: Прямоугольная (!rounded-lg) */}
            <Button variant="lime" to="/join" className="!rounded-lg shadow-md px-6 py-2.5 text-sm">
                Вступить в палату
            </Button>
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
            <Button variant="lime" className="w-full justify-center !rounded-lg">Вступить в палату</Button>
          </div>
        )}
      </header>

      {/* Основной контент */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-tpp-dark text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-12">
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
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 text-white">Навигация</h4>
             <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-tpp-primary transition">Об организации</Link></li>
                <li><Link to="/members" className="hover:text-tpp-primary transition">Реестр членов</Link></li>
                <li><Link to="/committees" className="hover:text-tpp-primary transition">Комитеты</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 text-white">Услуги</h4>
             <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/services/cert" className="hover:text-tpp-primary transition">Сертификация</Link></li>
                <li><Link to="/services/expert" className="hover:text-tpp-primary transition">Товарная экспертиза</Link></li>
                <li><Link to="/services/law" className="hover:text-tpp-primary transition">Юридические услуги</Link></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-xs text-slate-500">
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
      {/* HERO SECTION: Строгие формы кнопок (!rounded-lg) */}
      <section className="relative bg-tpp-dark text-white min-h-[600px] flex items-center justify-center">
        
        {/* Darker Overlay & Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
             <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        {/* Контент по центру */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <span className="inline-block px-4 py-1.5 rounded-md border border-slate-600 bg-slate-800/50 text-slate-300 text-xs font-bold mb-8 uppercase tracking-wider backdrop-blur-sm">
            Официальный представитель бизнеса
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Укрепляем позиции Вашего бизнеса. <br className="hidden md:block"/>
            <span className="text-tpp-primary">Гарантируем поддержку.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Помогаем предпринимателям выходить на рынок Китая, оформляем сертификаты происхождения и защищаем ваши интересы на государственном уровне.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            {/* Кнопки - Прямоугольные со скруглением (!rounded-lg) */}
            <Button variant="lime" className="h-14 px-8 text-lg !rounded-lg shadow-[0_0_30px_rgba(216,251,83,0.3)]">
               Получить консультацию <ArrowRight size={20} className="ml-2"/>
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg !rounded-lg border-slate-500 text-white hover:bg-white hover:text-slate-900 hover:border-white">
               Стать партнером
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="font-semibold text-slate-500">Популярное:</span>
              <a href="#" className="hover:text-tpp-primary transition-colors border-b border-transparent hover:border-tpp-primary">Сертификат СТ-1</a>
              <a href="#" className="hover:text-tpp-primary transition-colors border-b border-transparent hover:border-tpp-primary">Поиск партнеров в КНР</a>
              <a href="#" className="hover:text-tpp-primary transition-colors border-b border-transparent hover:border-tpp-primary">Экспертиза товаров</a>
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
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

      {/* KEY SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Комплексная поддержка вашего бизнеса</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">Мы предоставляем более 40 видов услуг для экспортеров, производителей и предпринимателей региона. Наша экспертиза признана на международном уровне.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: China */}
            <div className="bg-tpp-dark rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe size={100} />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-tpp-primary border border-white/10">
                    <Globe size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">ВЭД и работа с Китаем</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">Поиск надежных партнеров в КНР, организация бизнес-миссий, проверка контрагентов и сопровождение экспортных контрактов под ключ.</p>
                <a href="#" className="inline-flex items-center text-tpp-primary font-bold hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight size={16} className="ml-2"/>
                </a>
            </div>

            {/* Card 2: Certificates */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    <FileCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Сертификация и Экспертиза</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Выдача сертификатов происхождения товаров (СТ-1, форма А), удостоверение документов ВЭД, экспертиза качества и количества товаров.</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight size={16} className="ml-2"/>
                </a>
            </div>

            {/* Card 3: Law */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    <Scale size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Юридическая защита</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Свидетельствование форс-мажора, международный коммерческий арбитраж, медиация и защита интересов бизнеса в органах власти.</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight size={16} className="ml-2"/>
                </a>
            </div>
            
            {/* Дополнительные карточки */}
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:border-tpp-secondary transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Таможенное консультирование</h4>
               <p className="text-sm text-slate-500 mb-4">Классификация товаров, расчет платежей.</p>
               <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Подробнее <ArrowRight size={14} className="ml-1"/></a>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:border-tpp-secondary transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Обучение и Развитие</h4>
               <p className="text-sm text-slate-500 mb-4">Семинары, тренинги, деловое образование.</p>
               <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Подробнее <ArrowRight size={14} className="ml-1"/></a>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:border-tpp-secondary transition-colors">
               <h4 className="font-bold text-slate-900 mb-2">Клубная деятельность</h4>
               <p className="text-sm text-slate-500 mb-4">Закрытые встречи, нетворкинг, GR.</p>
               <a href="#" className="text-sm font-bold text-blue-600 flex items-center">Подробнее <ArrowRight size={14} className="ml-1"/></a>
            </div>

          </div>
          
          <div className="text-center mt-12">
             <Button variant="outline" className="!rounded-lg border-slate-300 text-slate-600 hover:border-tpp-secondary hover:text-tpp-secondary px-8">Посмотреть полный каталог услуг</Button>
          </div>
        </div>
      </section>
      
      {/* MEMBERSHIP CTA */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-6 md:px-8">
             <div className="bg-slate-900 rounded-2xl p-10 md:p-16 relative overflow-hidden">
                 {/* Background decoration */}
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 translate-x-20"></div>
                 
                 <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                     <div>
                         <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Станьте членом Союза «ТПП Забайкальского края»</h2>
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
                         <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
                             <h3 className="font-bold text-xl mb-2 text-slate-900">Подать заявку онлайн</h3>
                             <p className="text-slate-500 text-sm mb-6">Заполните простую форму, и мы свяжемся с вами.</p>
                             <Button variant="lime" className="w-full justify-center text-lg h-12 !rounded-lg">Подать заявку</Button>
                             <Button variant="ghost" className="w-full justify-center mt-2 !rounded-lg">Узнать условия членства</Button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
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
        <Route path="/services" element={<div className="max-w-7xl mx-auto p-10"><h1 className="text-3xl font-bold">Раздел Услуг (В разработке)</h1></div>} />
        <Route path="/news" element={<div className="max-w-7xl mx-auto p-10"><h1 className="text-3xl font-bold">Новости (В разработке)</h1></div>} />
        <Route path="/join" element={<div className="max-w-7xl mx-auto p-10"><h1 className="text-3xl font-bold">Вступление в палату (В разработке)</h1></div>} />
        <Route path="/ved" element={<div className="max-w-7xl mx-auto p-10"><h1 className="text-3xl font-bold">ВЭД (В разработке)</h1></div>} />
        <Route path="/membership" element={<div className="max-w-7xl mx-auto p-10"><h1 className="text-3xl font-bold">Членство (В разработке)</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
