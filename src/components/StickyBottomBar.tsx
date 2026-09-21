import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';
import { BundleOption } from '../types';
import { formatBRL } from '../utils/formatters';

interface StickyBottomBarProps {
  selectedBundle: BundleOption;
  onOrderClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ selectedBundle, onOrderClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once scrolled down 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 text-white py-3 px-4 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Product & Price details */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-xs font-black text-white">{selectedBundle.name}</p>
            <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <Truck className="w-3 h-3" /> Frete Grátis para todo o Brasil
            </p>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-black text-emerald-400">
              {formatBRL(selectedBundle.salePrice)}
            </span>
            <span className="text-xs text-slate-400 line-through ml-2">
              {formatBRL(selectedBundle.regularPrice)}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOrderClick}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg transition-all cursor-pointer uppercase tracking-wider shrink-0"
        >
          <Truck className="w-4 h-4" />
          <span>Comprar Agora</span>
        </button>
      </div>
    </div>
  );
};
