import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section id="contact-form" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
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
                    {/* Ссылки теперь ведут на конкретный блок формы на странице членства */}
                    <Link to="/membership#order-form" className="block group">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 mb-4 text-center transition-all group-hover:border-yellow-400/30 group-hover:bg-slate-800">
                            <p className="text-slate-400 text-sm mb-2">Хотите узнать подробнее?</p>
                            <p className="text-white font-bold text-xl group-hover:text-yellow-400 transition-colors">Получите консультацию по членству</p>
                        </div>
                    </Link>

                    <Link to="/membership#order-form" className="w-full">
                        <Button variant="lime" className="w-full h-14 text-lg font-bold bg-yellow-400 text-slate-900 hover:bg-yellow-500 shadow-lg shadow-yellow-400/10">
                            Подать заявку онлайн
                        </Button>
                    </Link>

                    <Link to="/membership#order-form" className="w-full">
                        <Button variant="outline" className="w-full h-14 text-lg border-slate-600 hover:border-white text-slate-300 hover:text-white transition-all">
                            Узнать условия членства
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
