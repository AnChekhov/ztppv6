import React from 'react';
import { Scale, MapPin, Clock } from 'lucide-react';

export const ExpertiseBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
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
  );
};
