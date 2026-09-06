import React, { useState, useEffect } from 'react';
import { Truck, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  // 15-minute persistent countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 14,
    seconds: 39,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigits = (num: number) => num.toString().padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-gray-100">
      {/* Top Urgent Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs sm:text-sm py-2 px-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center">
          <div className="flex items-center justify-center gap-2 w-full md:w-auto font-semibold">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 text-[11px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              ⚡ Oferta Relâmpago
            </span>
            <span className="hidden sm:inline">50% DE DESCONTO + FRETE GRÁTIS PARA TODO O BRASIL 🇧🇷</span>
            <span className="sm:hidden">50% OFF + FRETE GRÁTIS P/ TODO O BRASIL 🇧🇷</span>
          </div>

          <div className="flex items-center justify-center gap-3 w-full md:w-auto font-medium text-xs text-blue-100">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>A oferta expira em:</span>
              <span className="font-mono font-bold text-white bg-black/30 px-1.5 py-0.5 rounded text-[11px]">
                {formatDigits(timeLeft.minutes)}:{formatDigits(timeLeft.seconds)}
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 border-l border-blue-600/60 pl-3">
              <Truck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Envio com Rastreio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-md border border-blue-500/30">
                S<span className="text-amber-300">P</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors">
                    ShaverPro<span className="text-blue-600 text-sm align-super font-bold">®</span>
                  </span>
                  <span className="inline-flex items-center text-[10px] font-bold bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded-full border border-blue-200">
                    <CheckCircle2 className="w-3 h-3 mr-0.5 text-blue-600 inline" /> Original
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-0.5">
                  Mini Barbeador Elétrico Portátil
                </span>
              </div>
            </a>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#beneficios" className="hover:text-blue-600 transition-colors">
              Benefícios
            </a>
            <a href="#tecnologia" className="hover:text-blue-600 transition-colors">
              Lâmina Turbo 3D
            </a>
            <a href="#kit" className="hover:text-blue-600 transition-colors">
              O Que Vem na Caixa
            </a>
            <a href="#opiniones" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              Avaliações
              <span className="text-xs bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded-full font-bold">4.9 ★</span>
            </a>
            <a href="#preguntas" className="hover:text-blue-600 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/5511987654321?text=Olá,%20tenho%20uma%20dúvida%20sobre%20o%20Mini%20ShaverPro`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-700 font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
              title="Atendimento WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              id="header-cta-button"
              onClick={onOrderClick}
              className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:from-emerald-700 active:to-teal-700 text-white text-xs sm:text-sm font-black px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
            >
              <Truck className="w-4 h-4" />
              <span>Garantir com Frete Grátis</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
