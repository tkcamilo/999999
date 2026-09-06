import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { COMPARISON_DATA } from '../data/productData';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Comparativo Real
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Mini ShaverPro® vs. Métodos Tradicionais
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Veja por que mais de 96% dos homens nunca mais voltam para lâminas descartáveis após testar o Mini ShaverPro.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <thead>
              <tr className="bg-slate-900 text-white text-xs sm:text-sm">
                <th className="p-4 sm:p-5 font-bold">Característica</th>
                <th className="p-4 sm:p-5 font-black text-emerald-400 bg-slate-950 border-x border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Mini ShaverPro®</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-medium text-slate-300">Lâmina Descartável</th>
                <th className="p-4 sm:p-5 font-medium text-slate-300">Máquina Trimmer Comum</th>
                <th className="p-4 sm:p-5 font-medium text-slate-300">Cera Quente</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm bg-white">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  
                  {/* Mini ShaverPro Column (Highlighted) */}
                  <td className="p-4 sm:p-5 font-extrabold text-blue-950 bg-blue-50/70 border-x border-blue-200">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.bladepro}</span>
                    </div>
                  </td>

                  {/* Traditional */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.traditional}</span>
                    </div>
                  </td>

                  {/* Clipper */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.clipper}</span>
                    </div>
                  </td>

                  {/* Waxing */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.waxing}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
