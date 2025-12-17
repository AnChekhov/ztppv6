import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const ExpertiseFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Имеет ли акт экспертизы ТПП юридическую силу в суде?",
      answer: "Да, безусловно. Торгово-промышленная палата имеет статус независимой экспертной организации (Закон РФ «О торгово-промышленных палатах»). Наши акты признаются судами, таможенными органами и страховыми компаниями как официальное доказательство."
    },
    {
      question: "Выезжает ли эксперт на место осмотра?",
      answer: "Да, наши эксперты оперативно выезжают на склады, СВХ, железнодорожные станции и производства в Чите и по всему Забайкальскому краю. Также возможен выезд в приграничные зоны."
    },
    {
      question: "Что делать, если товар пришел с браком?",
      answer: "Необходимо приостановить приемку, обеспечить сохранность груза и срочно вызвать эксперта ТПП. Не подписывайте чистые накладные без отметки о вызове эксперта. Мы зафиксируем факт брака, составим акт, который станет основанием для претензии поставщику."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Часто задаваемые вопросы</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 last:border-0">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} 
                  size={24} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
