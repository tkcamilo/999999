import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Check, 
  Truck, 
  Flame, 
  Eye, 
  ChevronRight, 
  Droplets, 
  Sparkles,
  Lock
} from 'lucide-react';
import { 
  PRODUCT_GALLERY, 
  BUNDLE_OPTIONS,
  KIWIFY_CHECKOUT_URLS
} from '../data/productData';
import { BundleOption } from '../types';
import { formatBRL } from '../utils/formatters';
import { playOptionClickSound } from '../utils/audio';

interface ProductHeroProps {
  selectedBundle: BundleOption;
  onSelectBundle: (bundle: BundleOption) => void;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ selectedBundle, onSelectBundle }) => {
  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Calculations
  const baseSubtotal = selectedBundle.salePrice;
  const pixDiscount = baseSubtotal * 0.05;
  const totalAmount = baseSubtotal - pixDiscount;
  const totalRegular = selectedBundle.regularPrice;

  // Handle bundle selection with audio click sound
  const handleSelectBundle = (bundle: BundleOption) => {
    playOptionClickSound();
    onSelectBundle(bundle);
  };

  // Redirect to Kiwify checkout in the same tab
  const handleComprarAgora = () => {
    const checkoutUrl =
      selectedBundle.checkoutUrl ||
      KIWIFY_CHECKOUT_URLS[selectedBundle.units] ||
      'https://pay.kiwify.com.br/iS4g0bJ';
    window.location.href = checkoutUrl;
  };

  return (
    <section className="py-6 sm:py-10 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Social Proof Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <span>Início</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span>Cuidados Pessoais</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Mini ShaverPro® Portátil</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>+24.800 clientes satisfeitos no Brasil 🇧🇷</span>
          </div>
        </div>

        {/* Main Grid: Gallery on Left, Purchase Funnel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ================= LEFT: MEDIA GALLERY ================= */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 group">
              <img
                src={PRODUCT_GALLERY[activeImageIndex].url}
                alt={PRODUCT_GALLERY[activeImageIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-blue-600/95 backdrop-blur-sm text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {PRODUCT_GALLERY[activeImageIndex].badge}
                </span>
                <span className="bg-slate-950/85 backdrop-blur-sm text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-700/60 shadow-md">
                  Lâmina Rotativa Turbo 3D
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 shadow-lg">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {PRODUCT_GALLERY[activeImageIndex].title}
                </p>
                <p className="text-xs text-slate-200 mt-0.5">
                  {PRODUCT_GALLERY[activeImageIndex].caption}
                </p>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {PRODUCT_GALLERY.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx 
                      ? 'border-blue-600 ring-2 ring-blue-600/20 scale-[1.02] shadow-md' 
                      : 'border-slate-200 hover:border-slate-400 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {activeImageIndex === idx && (
                    <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>

            {/* Fast Confidence Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-900">Garantia 90 Dias</p>
                <p className="text-[11px] text-slate-500">Satisfação ou estorno</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-xs">
                <Droplets className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-900">IPX7 Lavável</p>
                <p className="text-[11px] text-slate-500">À prova d'água</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-xs">
                <Truck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-bold text-slate-900">Frete Grátis</p>
                <p className="text-[11px] text-slate-500">Todo o Brasil</p>
              </div>
            </div>

            {/* Testimonial Quote Pill */}
            <div className="bg-blue-50/70 border border-blue-200/70 rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                RM
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-slate-900 ml-1">"Perfeito para o bolso e carro!"</span>
                </div>
                <p className="text-slate-600 italic">
                  "Sensacional! Faço a barba a seco no trânsito antes de entrar no trabalho em 2 minutos. Corta rente e não pinica nada."
                </p>
                <p className="text-[11px] font-semibold text-slate-500 mt-1">
                  — Rodrigo M., São Paulo (Comprador Verificado)
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: PRODUCT INFO & CHECKOUT FUNNEL ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Reviews */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-black text-slate-900">4.9 / 5.0</span>
                <a href="#opiniones" className="text-xs text-blue-700 underline font-semibold hover:text-blue-800">
                  (3.120 avaliações de clientes)
                </a>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                Mini ShaverPro® - Mini Barbeador Elétrico Portátil 3D
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                O barbeador elétrico de bolso mais potente e compacto do mercado. Lâmina rotativa turbo de aço inoxidável, 100% à prova d'água e recarregável via USB. Barbeie em qualquer lugar sem dor, sem cortes e sem irritação.
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                      {formatBRL(selectedBundle.salePrice)}
                    </span>
                    <span className="text-base sm:text-lg text-slate-400 line-through">
                      {formatBRL(selectedBundle.regularPrice)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pague com <span className="text-emerald-400 font-bold">PIX (+5% OFF)</span> ou Cartão com Envio Imediato
                  </p>
                </div>

                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {selectedBundle.discountPercent}% OFF HOJE
                </span>
              </div>

              {/* Scarcity & Social Urgency */}
              <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-semibold text-amber-400">
                    <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                    Alta Procura: Restam apenas 9 unidades com valor promocional
                  </span>
                  <span className="text-slate-400 font-mono">87% vendido</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full w-[87%] transition-all duration-1000"></div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>52 pessoas estão finalizando a compra neste momento</span>
                </div>
              </div>
            </div>

            {/* Key Advantages Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Zero cortes e sem irritação na pele</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>100% À prova d'água (Lave na torneira)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Bateria Tipo-C dura até 60 dias de uso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Cabe na palma da mão ou no bolso</span>
              </div>
            </div>

            {/* ================= STEP 1: BUNDLE SELECTION ================= */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                    1
                  </span>
                  Escolha a sua quantidade promocional:
                </h3>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Frete Grátis
                </span>
              </div>

              <div className="space-y-2.5">
                {BUNDLE_OPTIONS.map(bundle => {
                  const isSelected = selectedBundle.id === bundle.id;
                  return (
                    <div
                      key={bundle.id}
                      onClick={() => handleSelectBundle(bundle)}
                      className={`relative p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'border-blue-600 bg-blue-50/60 shadow-md ring-2 ring-blue-500/20' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {/* Radio & Description */}
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-extrabold text-sm sm:text-base text-slate-950">
                              {bundle.name}
                            </span>
                            {bundle.tag && (
                              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                                bundle.isPopular 
                                  ? 'bg-amber-400 text-slate-950' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {bundle.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {bundle.units > 1 
                              ? `Apenas ${formatBRL(bundle.unitPrice)} por unidade` 
                              : '1x Mini Barbeador com cabo e escova'}
                          </p>
                        </div>
                      </div>

                      {/* Pricing right */}
                      <div className="text-right shrink-0">
                        <span className="block font-black text-base sm:text-lg text-slate-950">
                          {formatBRL(bundle.salePrice)}
                        </span>
                        <span className="block text-xs text-slate-400 line-through">
                          {formatBRL(bundle.regularPrice)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= RESUMO DO PEDIDO & BOTÃO COMPRAR AGORA ================= */}
            <div id="checkout-offer-box" className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-emerald-500 shadow-xl space-y-4">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <h3 className="text-base font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-black">
                    ✓
                  </span>
                  Resumo do Pedido
                </h3>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Frete Grátis Correios
                </span>
              </div>

              {/* Pricing breakdown */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2.5">
                <div className="flex justify-between text-slate-700">
                  <span className="font-semibold">{selectedBundle.name}</span>
                  <span className="font-bold text-slate-900">{formatBRL(selectedBundle.salePrice)}</span>
                </div>

                <div className="flex justify-between text-emerald-700 font-bold bg-emerald-100/50 p-2 rounded-lg">
                  <span>Desconto Especial PIX (5% OFF)</span>
                  <span>-{formatBRL(pixDiscount)}</span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Frete Expresso para Todo Brasil</span>
                  <span className="text-emerald-700 font-black uppercase">GRÁTIS (R$ 0,00)</span>
                </div>

                <div className="border-t border-slate-200 pt-3 mt-2 flex justify-between items-baseline">
                  <div>
                    <span className="font-black text-sm text-slate-950 block">VALOR TOTAL:</span>
                    <span className="text-[11px] text-slate-500">
                      com 5% de desconto especial no PIX
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-600 block">
                      {formatBRL(totalAmount)}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {formatBRL(totalRegular)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulsing High-Converting Action Button */}
              <button
                type="button"
                id="buy-now-button"
                onClick={handleComprarAgora}
                className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:from-emerald-700 active:to-teal-700 text-white font-black text-lg sm:text-xl py-4 sm:py-5 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 flex flex-col items-center justify-center cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <span>COMPRAR AGORA</span>
                </div>
                <span className="text-xs text-emerald-100 font-normal mt-0.5">
                  Clique para concluir seu pedido com segurança
                </span>
              </button>

              {/* Guarantees Badges */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-500 flex-wrap">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantia de 90 dias
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-blue-600" /> Envio Rápido Correios
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-700" /> Compra 100% Segura
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
