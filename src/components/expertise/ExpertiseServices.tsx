import React from 'react';
import { Truck, FileText, Globe, ShieldCheck, Gavel, Factory } from 'lucide-react';

export const ExpertiseServices: React.FC = () => {
  const services = [
    { 
      title: 'Приемка по количеству и качеству', 
      desc: 'Проверка соответствия товара условиям контракта, ГОСТам и спецификациям при поступлении на склад.',
      icon: Truck 
    },
    { 
      title: 'Экспертиза по 44-ФЗ', 
      desc: 'Обязательная внешняя экспертиза исполнения контрактов для государственных и муниципальных заказчиков.',
      icon: FileText 
    },
    { 
      title: 'Таможенная экспертиза', 
      desc: 'Идентификация товара для целей таможенного оформления, определение кодов ТН ВЭД, страны происхождения.',
      icon: Globe 
    },
    { 
      title: 'Определение ущерба', 
      desc: 'Фиксация повреждений груза при транспортировке, пожаре или затоплении. Оценка стоимости ущерба.',
      icon: ShieldCheck 
    },
    { 
      title: 'Судебная экспертиза', 
      desc: 'Проведение экспертиз по определению суда или постановлению следователя. Рецензирование заключений.',
      icon: Gavel 
    },
    { 
      title: 'Экспертиза оборудования', 
      desc: 'Оценка технического состояния, комплектности и производительности промышленного оборудования.',
      icon: Factory 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Какие задачи мы решаем</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                  <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">Подробнее →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
