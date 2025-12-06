import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    // Фон секции - Dark Slate 900
    <section className="bg-slate-900 pt-20 pb-24 relative overflow-hidden">
        
      {/* Декоративные пятна на фоне */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Белая карточка */}
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Станьте членом Союза <br/>«ТПП Забайкальского края»
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Присоединяйтесь к сообществу из 450+ успешных компаний. Получите доступ к закрытым мероприятиям, прямой диалог с властью и скидки на услуги палаты.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700 font-medium">Защита и продвижение интересов вашего бизнеса</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700 font-medium">Скидки до 20% на услуги сертификации и экспертизы</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700 font-medium">Участие в международных бизнес-миссиях</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[320px]">
            {/* Кнопка Лайм */}
            <button className="bg-tpp-primary hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg text-center text-lg transition-all transform hover:-translate-y-1">
              Подать заявку онлайн
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-lg text-center text-lg transition-colors">
              Узнать условия членства
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
