import React from 'react';
import { Button } from './ui/Button';

const CallToAction: React.FC = () => {
  return (
    /* ✅ ИЗМЕНЕНО: Добавлен id="contact-form" */
    <section id="contact-form" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Декоративный фон */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                        Станьте членом Союза <br/>
                        «ТПП Забайкальского края»
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Присоединяйтесь к сообществу успешных компаний и предпринимателей. 
                        Получите доступ к закрытым мероприятиям, прямой диалог с властью и скидки на услуги палаты.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            Защита и продвижение интересов вашего бизнеса
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            Скидки до 20% на услуги сертификации и экспертизы
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            Участие в международных бизнес-миссиях
                        </li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 mb-4 text-center">
                        <p className="text-slate-400 text-sm mb-2">Хотите узнать подробнее?</p>
                        <p className="text-white font-bold text-xl">Получите консультацию по членству</p>
                    </div>
                    <Button variant="lime" className="w-full h-14 text-lg font-bold bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                        Подать заявку онлайн
                    </Button>
                    <Button variant="outline" className="w-full h-14 text-lg border-slate-600 hover:border-white text-slate-300 hover:text-white">
                        Узнать условия членства
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
