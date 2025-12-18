import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SeoTextSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Союз «Торгово-промышленная палата Забайкальского края»
          </h2>
          {/* ✅ ИЗМЕНЕНО: Текст сокращен */}
          <p className="text-slate-500 text-lg">
            Ведущее бизнес-объединение региона.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
            <p>
              Мы являемся важным звеном во внешнеэкономической деятельности региона. 
              Благодаря приграничному положению (граница с КНР), наша Палата обладает уникальной экспертизой 
              в вопросах <strong>экспорта и импорта товаров через Китай</strong>.
            </p>
            <p>
              Наши специалисты аккредитованы в системе ТПП РФ. Мы выдаем 
              <strong> сертификаты происхождения товаров</strong> (СТ-1, Общая форма, EAV) для таможни, 
              проводим <strong>независимую товарную экспертизу</strong> (в том числе судебную и по 44-ФЗ), 
              а также защищаем интересы предпринимателей в органах власти.
            </p>
            <p>
              Услугами Забайкальской ТПП пользуются компании не только из Читы, но и из 
              <strong> Москвы, Новосибирска, Иркутска</strong> и других регионов России, которым необходима 
              надежная поддержка на границе и качественная экспертиза грузов.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Почему выбирают нас:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Официальный статус: акты экспертизы признаются судами и ФТС</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Скорость: выдача сертификатов от 2 часов, выезд эксперта в день заявки</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Комплексный подход: от перевода контракта до таможенного оформления</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">Работаем по всей России (дистанционное оформление документов)</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoTextSection;
