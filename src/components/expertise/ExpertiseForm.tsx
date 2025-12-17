import React from 'react';
import { CheckCircle2, ChevronDown, UploadCloud } from 'lucide-react';

export const ExpertiseForm: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Закажите экспертизу онлайн</h2>
            <p className="text-slate-300 text-lg mb-8">
              Оставьте заявку, и мы рассчитаем стоимость работ и согласуем время выезда эксперта.
            </p>
            <ul className="space-y-4 mb-8 text-slate-300">
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
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Название организации</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="ООО 'Пример'" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Контактное лицо</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Имя" />
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
  );
};
