import React from 'react';
import { Button } from './ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            
            {/* 1. ЦЕНТРАЛЬНЫЙ ЗАГОЛОВОК И ОПИСАНИЕ */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Станьте членом Союза <br className="hidden md:block" />
                    «ТПП Забайкальского края»
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                    Присоединяйтесь к сообществу успешных компаний и предпринимателей. 
                    Получите доступ к закрытым мероприятиям, прямой диалог с властью и скидки на услуги палаты.
                </p>
            </div>

            {/* 2. СИММЕТРИЧНЫЕ БЛОКИ (Слева выгоды, Справа действия) */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                
                {/* Левая часть: Список преимуществ (Визуально прижат к центру) */}
                <div className="flex md:justify-end">
                    <ul className="space-y-5">
                        <li className="flex items-center gap-4 text-slate-200 text-lg font-medium">
                            <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
                            Защита интересов вашего бизнеса
                        </li>
                        <li className="flex items-center gap-4 text-slate-200 text-lg font-medium">
                            <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
                            Скидки до 20% на услуги
                        </li>
                        <li className="flex items-center gap-4 text-slate-200 text-lg font-medium">
                            <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0 shadow-[0_0_12px_rgba(250,204,21,0.6)]"></span>
                            Участие в бизнес-миссиях
                        </li>
                    </ul>
                </div>
                
                {/* Правая часть: Кнопки */}
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 mb-2 text-center">
                        <p className="text-slate-400 text-sm mb-1">Хотите узнать подробнее?</p>
                        <p className="text-white font-bold">Получите консультацию по членству</p>
                    </div>
                    
                    <Button variant="lime" className="w-full h-14 text-lg font-bold bg-yellow-400 text-slate-900 hover:bg-yellow-500 hover:scale-[1.02] transition-all shadow-lg shadow-yellow-400/10">
                        Подать заявку онлайн
                    </Button>
                    
                    <Button variant="outline" className="w-full h-14 text-lg border-slate-600 hover:border-white text-slate-300 hover:text-white hover:scale-[1.02] transition-all">
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
