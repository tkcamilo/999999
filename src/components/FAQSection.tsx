import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/productData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="preguntas" className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tudo o que você precisa saber sobre a compra, entrega, garantia e uso do Mini ShaverPro®.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-3"
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-950 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 leading-relaxed bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Box */}
        <div className="mt-10 bg-emerald-50 border border-emerald-300/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-emerald-950">
                Ainda tem alguma dúvida antes de fazer o pedido?
              </h4>
              <p className="text-xs text-emerald-800 mt-0.5">
                Nosso time de atendimento via WhatsApp no Brasil está pronto para te ajudar.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Olá,%20tenho%20uma%20dúvida%20sobre%20o%20Mini%20ShaverPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-colors cursor-pointer shrink-0 uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
