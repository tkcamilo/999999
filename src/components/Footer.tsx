import React from 'react';
import { ShieldCheck, Truck, Lock, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-12 pb-24 sm:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-slate-800 text-white">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm">Frete Grátis para Todo o Brasil</h4>
              <p className="text-slate-400 text-xs mt-0.5">Envio expresso rastreado com código Correios.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm">Garantia Blindada 90 Dias</h4>
              <p className="text-slate-400 text-xs mt-0.5">Satisfação garantida ou seu dinheiro de volta.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm">Compra 100% Segura</h4>
              <p className="text-slate-400 text-xs mt-0.5">PIX (+5% OFF) ou Pagamento na Entrega.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm">Suporte via WhatsApp</h4>
              <p className="text-slate-400 text-xs mt-0.5">Atendimento rápido de segunda a sábado.</p>
            </div>
          </div>
        </div>

        {/* Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                MS
              </div>
              <span className="text-lg font-black text-white">Mini ShaverPro®</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              O barbeador portátil mais potente e compacto do Brasil. Desenvolvido com lâminas rotativas de precisão em liga de aço aeronáutico para barbear rente sem queimar e sem irritar.
            </p>
          </div>

          <div>
            <h4 className="font-black text-white text-sm uppercase tracking-wider mb-3">
              Contato & Atendimento
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>suporte@minishaverpro.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Segunda a Sexta: 09:00 às 18:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-sm uppercase tracking-wider mb-3">
              Links Úteis & Políticas
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#preguntas" className="hover:text-blue-400 transition-colors">Termos e Condições de Uso</a></li>
              <li><a href="#preguntas" className="hover:text-blue-400 transition-colors">Política de Devolução e Reembolso</a></li>
              <li><a href="#preguntas" className="hover:text-blue-400 transition-colors">Política de Privacidade de Dados</a></li>
              <li><a href="#preguntas" className="hover:text-blue-400 transition-colors">Rastreamento de Pedido Correios</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Mini ShaverPro® Brasil. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right">
            CNPJ e marcas registradas protegidas pela Lei de Propriedade Industrial.
          </p>
        </div>

      </div>
    </footer>
  );
};
