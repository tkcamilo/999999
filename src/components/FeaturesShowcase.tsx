import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  Zap, 
  Sliders, 
  Award, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle,
  Scissors
} from 'lucide-react';
import { BODY_ZONES, FEATURES_LIST } from '../data/productData';

export const FeaturesShowcase: React.FC = () => {
  const [activeZone, setActiveZone] = useState(BODY_ZONES[0].id);

  const selectedZoneData = BODY_ZONES.find(z => z.id === activeZone) || BODY_ZONES[0];

  return (
    <section id="tecnologia" className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            Engenharia de Barbear 4D TurboSafe™
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Por Que Milhares de Homens Não Usam Mais Lâminas Tradicionais?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            As lâminas descartáveis raspam a camada protetora da pele, causando microcortes, queimação, pelos encravados e foliculite. O Mini ShaverPro® apara o pelo na raiz com microrede sem agredir a pele.
          </p>
        </div>

        {/* Visual Problem vs Solution Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Bad: Traditional */}
          <div className="bg-rose-50/60 border-2 border-rose-200 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-sm uppercase mb-3">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span>Gilettes e Lâminas Tradicionais</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-rose-950 mb-3">
              Por que sua pele queima e arde após barbear?
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Atrito direto do metal afiado arrancando células superficiais da pele.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Beliscões, cortes sangrando em rugas, queixo, pescoço e partes íntimas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Pelos encravados dolorosos, foliculite e manchas vermelhas por dias.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Gasto contínuo absurdo com recargas de lâmina que enferrujam rápido.</span>
              </li>
            </ul>
          </div>

          {/* Good: Mini ShaverPro */}
          <div className="bg-blue-50/70 border-2 border-blue-400 rounded-2xl p-6 relative overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 text-blue-800 font-extrabold text-sm uppercase mb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>A Tecnologia do Mini ShaverPro®</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-3">
              Corte milimétrico ultra suave sem beliscar a pele
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Micro-rede flexível de precisão:</strong> guia o pelo até a lâmina interna giratória sem tocar na derme.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Motor de 6600 RPM de alta velocidade:</strong> corta sem puxões mesmo em barbas grossas e cerradas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Tamanho compacto de bolso:</strong> cabe na palma da mão, leve para a academia, escritório ou viagens.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-black">✓</span>
                <span><strong>Bateria recarregável via USB Tipo-C:</strong> 1 carga rápida rende até semanas de barbear diário.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Body Zones Selector */}
        <div id="beneficios" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Versatilidade Completa
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-1">
              Um Aparelho Versátil Para Toda Sua Rotina
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Clique na área abaixo para entender o desempenho do Mini ShaverPro®:
            </p>
          </div>

          {/* Zones Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {BODY_ZONES.map((zone) => {
              const isActive = activeZone === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>{zone.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Zone Details Card */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-black uppercase px-3 py-1 rounded-full">
                {selectedZoneData.tag}
              </span>
              <span className="text-amber-400 font-bold text-xs">
                ⭐ {selectedZoneData.highlight}
              </span>
            </div>

            <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
              {selectedZoneData.name} com Mini ShaverPro®
            </h4>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedZoneData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-700 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sem necessidade de espuma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>A prova de respingos d'água</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pronto em 2 a 3 minutos</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_LIST.map((feat, i) => (
            <div 
              key={i} 
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-md transition-all group hover:border-blue-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                {i === 0 && <ShieldCheck className="w-6 h-6" />}
                {i === 1 && <Droplets className="w-6 h-6" />}
                {i === 2 && <UserCheck className="w-6 h-6" />}
                {i === 3 && <Zap className="w-6 h-6" />}
                {i === 4 && <Sliders className="w-6 h-6" />}
                {i === 5 && <Award className="w-6 h-6" />}
              </div>
              <h3 className="font-extrabold text-base text-slate-950 mb-2">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

