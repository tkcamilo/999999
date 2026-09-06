import React from 'react';
import { Check, Box, ShieldCheck } from 'lucide-react';
import { kitImg } from '../data/productData';

interface KitBreakdownProps {
  onOrderClick: () => void;
}

export const KitBreakdown: React.FC<KitBreakdownProps> = ({ onOrderClick }) => {
  const kitItems = [
    {
      title: 'Mini ShaverPro® Portátil de Alta Potência',
      desc: 'Corpo metálico resistente, motor turbo de 6.600 RPM e bateria interna de lítio recarregável.'
    },
    {
      title: 'Cabo Carregador Rápido USB Tipo-C',
      desc: 'Compatível com qualquer carregador de celular, computador, carro ou powerbank.'
    },
    {
      title: 'Tampa Protetora Anti-Impacto',
      desc: 'Protege as lâminas e micro-redes ao carregar no bolso, mala ou mochila.'
    },
    {
      title: 'Escova de Limpeza Rápida',
      desc: 'Para higienização rápida a seco em poucos segundos após o barbear.'
    },
    {
      title: 'Manual de Instruções e Certificado',
      desc: 'Instruções fáceis em português e garantia oficial de fábrica.'
    }
  ];

  return (
    <section id="kit" className="py-12 sm:py-16 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-100/80 px-3 py-1 rounded-full inline-block mb-3">
            Tudo O Que Você Precisa Em Uma Caixa
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            O Que Vem Incluso No Seu Pedido?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Você recebe o kit completo original pronto para uso imediato direto na sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <img
                src={kitImg}
                alt="Kit Completo Mini ShaverPro"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase flex items-center gap-1.5 border border-white/10">
                <Box className="w-3.5 h-3.5 text-blue-400" />
                Unboxing Oficial
              </div>
            </div>
          </div>

          {/* List of included accessories */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Kit Completo Mini ShaverPro®
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sem mensalidades absurdas com lâminas descartáveis e sem dor. Com o Mini ShaverPro®, você tem uma solução duradoura que cabe no seu bolso.
            </p>

            <div className="space-y-3 pt-2">
              {kitItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer uppercase tracking-wider"
              >
                Garantir Meu Mini ShaverPro
              </button>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantia incondicional de 90 dias</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
