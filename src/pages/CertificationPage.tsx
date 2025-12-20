// ... (начало файла без изменений) ...

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* ... (Hero и другие секции) ... */}

      {/* 5. CTA ФОРМА */}
      {/* ✅ ИСПРАВЛЕНО: Добавлен div-обертка с pt-24 для компенсации высоты шапки */}
      <div id="order-form" className="pt-24">
        <section className="py-20 bg-slate-900 text-white">
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
                  {/* ... (код формы без изменений) ... */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ... (остальной код страницы) ... */}
    </div>
  );
};
