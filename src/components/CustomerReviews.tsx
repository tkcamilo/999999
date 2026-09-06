import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, MessageSquarePlus, Filter, X } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/productData';
import { CustomerReview } from '../types';

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(INITIAL_REVIEWS);
  const [selectedFilter, setSelectedFilter] = useState<'all' | '5' | 'verified'>('all');
  const [showModal, setShowModal] = useState(false);

  // Modal form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Handle Likes
  const handleLike = (id: string) => {
    setReviews(prev =>
      prev.map(rev =>
        rev.id === id ? { ...rev, likes: rev.likes + 1 } : rev
      )
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const created: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: newAuthor,
      location: newCity || 'Brasil',
      rating: newRating,
      date: 'Agora mesmo',
      title: newTitle || 'Excelente produto',
      comment: newComment,
      verifiedPurchase: true,
      recommend: true,
      likes: 1
    };

    setReviews([created, ...reviews]);
    setHasSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setHasSubmitted(false);
      setNewAuthor('');
      setNewCity('');
      setNewTitle('');
      setNewComment('');
    }, 1200);
  };

  // Filtered reviews
  const filteredReviews = reviews.filter(rev => {
    if (selectedFilter === '5') return rev.rating === 5;
    if (selectedFilter === 'verified') return rev.verifiedPurchase;
    return true;
  });

  return (
    <section id="opiniones" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest text-blue-700 uppercase bg-blue-100/80 px-3 py-1 rounded-full inline-block mb-3">
            Experiências Reais
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Avaliações de Clientes Verificados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Veja o que dizem homens em todo o Brasil que já trocaram as lâminas descartáveis pelo Mini ShaverPro®.
          </p>
        </div>

        {/* Rating Score Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Score Big */}
            <div className="md:col-span-4 text-center md:border-r md:border-slate-200 md:pr-6">
              <div className="text-5xl font-black text-slate-950 tracking-tight">4.9</div>
              <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Baseado em 3.120 avaliações verificadas no Brasil 🇧🇷
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>99% recomendam este produto</span>
              </div>
            </div>

            {/* Bars */}
            <div className="md:col-span-5 space-y-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-16">5 estrelas</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[94%]"></div>
                </div>
                <span className="w-10 text-right text-slate-400">94%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16">4 estrelas</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[5%]"></div>
                </div>
                <span className="w-10 text-right text-slate-400">5%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16">3 estrelas</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[1%]"></div>
                </div>
                <span className="w-10 text-right text-slate-400">1%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16">2 estrelas</span>
                <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[0%]"></div>
                </div>
                <span className="w-10 text-right text-slate-400">0%</span>
              </div>
            </div>

            {/* CTA to write a review */}
            <div className="md:col-span-3 text-center">
              <button
                onClick={() => setShowModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 text-emerald-400" />
                <span>Avaliar Produto</span>
              </button>
              <p className="text-[11px] text-slate-400 mt-2">
                Compartilhe sua experiência de barbear
              </p>
            </div>

          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-bold">
            <span className="text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'all' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Todas ({reviews.length})
            </button>
            <button
              onClick={() => setSelectedFilter('5')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedFilter === '5' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              5 estrelas ★
            </button>
            <button
              onClick={() => setSelectedFilter('verified')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'verified' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Compras verificadas
            </button>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Exibindo {filteredReviews.length} avaliações
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredReviews.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-extrabold text-sm text-slate-950">
                        {review.name}
                      </span>
                      {review.verifiedPurchase && (
                        <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 mr-0.5 text-emerald-600 inline" /> Compra Verificada
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {review.location} • {review.date}
                    </p>
                  </div>

                  <div className="flex items-center text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Title & Content */}
                <h4 className="font-bold text-sm text-slate-900 mb-1">
                  "{review.title}"
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {review.comment}
                </p>
              </div>

              {/* Likes button */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] text-slate-400">Esta avaliação foi útil?</span>
                <button
                  onClick={() => handleLike(review.id)}
                  className="flex items-center gap-1.5 font-bold hover:text-blue-600 text-slate-600 transition-colors cursor-pointer bg-slate-50 hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Útil ({review.likes})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-slate-950 mb-1">
              Avaliar o Mini ShaverPro®
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Sua opinião ajuda outros homens a cuidarem melhor da barba e pele.
            </p>

            {hasSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-center text-emerald-900 py-8">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2 animate-bounce" />
                <p className="font-extrabold text-base">Muito obrigado pela sua avaliação!</p>
                <p className="text-xs text-emerald-700 mt-1">Sua avaliação foi publicada com sucesso.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nota geral
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-600 ml-2">
                      {newRating} de 5 estrelas
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: André Silva"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Cidade / UF</label>
                    <input
                      type="text"
                      placeholder="Ex: Curitiba / PR"
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Título da avaliação</label>
                  <input
                    type="text"
                    placeholder="Ex: Barbeia muito rente e não machuca nada"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Seu Comentário</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Conte como foi sua experiência com o Mini ShaverPro..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-xl transition-colors cursor-pointer text-sm uppercase tracking-wider"
                >
                  Publicar Avaliação
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
