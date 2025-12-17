import React from 'react';
import { Check, Download } from 'lucide-react';

export const ExpertiseDocuments: React.FC = () => {
  const documents = [
    { name: 'Заявка на проведение экспертизы', req: 'По форме Палаты', link: true },
    { name: 'Контракт / Договор поставки', req: 'Копия', link: false },
    { name: 'Товаросопроводительные документы', req: 'Инвойс, накладные, упаковочные листы', link: false },
    { name: 'Сертификаты качества / Паспорта', req: 'При наличии от производителя', link: false },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Документы для проведения экспертизы</h2>
          <p className="text-slate-500">Минимальный пакет документов для начала работы</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
          {documents.map((doc, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-slate-100 last:border-0 hover:bg-blue-50/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-1 md:mt-0">
                  <Check size={20} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{doc.name}</h4>
                  <p className="text-slate-500 text-sm">{doc.req}</p>
                </div>
              </div>
              
              {doc.link ? (
                <a href="#" className="mt-4 md:mt-0 flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors whitespace-nowrap bg-blue-50 px-4 py-2 rounded-lg">
                  <Download size={16} className="mr-2" />
                  Скачать бланк
                </a>
              ) : (
                  <div className="mt-4 md:mt-0 text-blue-600 font-bold text-xl select-none px-6 py-2">—</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
