import { BundleOption, UpsellItem, CustomerReview, FAQ } from '../types';

// Images of the Mini Shaver
import heroImg from '../assets/images/mini_shaver_water_1788715802227.jpg';
import bladeImg from '../assets/images/mini_shaver_blade_1788715820225.jpg';
import faceImg from '../assets/images/mini_shaver_person_1788715835452.jpg';
import kitImg from '../assets/images/mini_shaver_kit_box_1788715847753.jpg';

export { heroImg, bladeImg, faceImg, kitImg };

export const PRODUCT_INFO = {
  name: 'Mini ShaverPro®',
  headline: 'Barbeie e Depile em Segundos sem Irritação',
  subheadline: 'O mini barbeador elétrico de bolso com lâmina rotativa turbo 3D de precisão. 100% à prova d\'água, corte rente e suave que não machuca nem queima a pele. Cabe na palma da mão!',
  rating: 4.9,
  reviewsCount: 3120,
  soldCount: '24.850+',
  guaranteeDays: 90,
  deliveryDays: 'Prazo médio de 3 a 7 dias úteis',
  whatsappSupport: '+55 11 98765-4321',
};

export const PRODUCT_GALLERY = [
  {
    id: 'hero',
    title: 'Mini ShaverPro® 100% À Prova D\'Água',
    caption: 'Acabamento premium azul e cromado, resistente à água e lavável na torneira',
    url: heroImg,
    badge: '100% LAVÁVEL'
  },
  {
    id: 'blade',
    title: 'Lâmina Turbo & Malha Favo de Mel',
    caption: 'Lâminas rotativas de precisão sob cúpula protetora que corta sem encostar na pele',
    url: bladeImg,
    badge: 'ZERO IRRITAÇÃO'
  },
  {
    id: 'face',
    title: 'Design Ultracompacto de Bolso',
    caption: 'Encaixa perfeitamente na mão e desliza com suavidade no contorno do rosto e pescoço',
    url: faceImg,
    badge: 'PELE LISA'
  },
  {
    id: 'kit',
    title: 'Kit Completo com Acessórios',
    caption: 'Inclui Mini Barbeador, tampa protetora, cabo USB de carregamento rápido e escova de limpeza',
    url: kitImg,
    badge: 'KIT COMPLETO'
  }
];

export const KIWIFY_CHECKOUT_URLS: Record<number, string> = {
  1: 'https://pay.kiwify.com.br/0BO4fdJ',
  2: 'https://pay.kiwify.com.br/iS4g0bJ',
  3: 'https://pay.kiwify.com.br/4Exrtne',
};

export const BUNDLE_OPTIONS: BundleOption[] = [
  {
    id: 'bundle-1',
    name: '1x Mini ShaverPro®',
    units: 1,
    regularPrice: 139.90,
    salePrice: 67.90,
    discountPercent: 51,
    savings: 72.00,
    unitPrice: 67.90,
    tag: 'INDIVIDUAL',
    checkoutUrl: 'https://pay.kiwify.com.br/0BO4fdJ'
  },
  {
    id: 'bundle-2',
    name: '2x Mini ShaverPro® (1 para você + 1 de presente)',
    units: 2,
    regularPrice: 279.80,
    salePrice: 109.90,
    discountPercent: 61,
    savings: 169.90,
    unitPrice: 54.95,
    tag: 'MAIS VENDIDO 🔥',
    isPopular: true,
    checkoutUrl: 'https://pay.kiwify.com.br/iS4g0bJ'
  },
  {
    id: 'bundle-3',
    name: '3x Mini ShaverPro® (Super Combo Família)',
    units: 3,
    regularPrice: 419.70,
    salePrice: 147.90,
    discountPercent: 65,
    savings: 271.80,
    unitPrice: 49.30,
    tag: 'MELHOR VALOR ⭐',
    checkoutUrl: 'https://pay.kiwify.com.br/4Exrtne'
  }
];

export const UPSELL_PRODUCT: UpsellItem = {
  id: 'upsell-refill-blade',
  title: 'Lâmina Turbo Extra de Reposição (Aço Inox Cirúrgico)',
  subtitle: 'Garanta 1 lâmina reserva original para prolongar a vida útil do seu barbeador por anos.',
  regularPrice: 49.90,
  salePrice: 19.90,
  image: bladeImg,
  badge: '60% OFF NO CHECKOUT'
};

export const BRAZILIAN_STATES: { [uf: string]: string[] } = {
  'SP': ['São Paulo', 'Campinas', 'Guarulhos', 'São Bernardo do Campo', 'Santo André', 'Osasco', 'Sorocaba', 'Ribeirão Preto', 'Santos', 'São José dos Campos'],
  'RJ': ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói', 'Belford Roxo', 'Campos dos Goytacazes', 'Petrópolis'],
  'MG': ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba'],
  'PR': ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'São José dos Pinhais', 'Foz do Iguaçu'],
  'RS': ['Porto Alegre', 'Caxias do Sul', 'Canoas', 'Pelotas', 'Santa Maria', 'Gravataí', 'Novo Hamburgo'],
  'SC': ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Chapecó', 'Itajaí', 'Criciúma', 'Balneário Camboriú'],
  'BA': ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro', 'Itabuna', 'Lauro de Freitas'],
  'GO': ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia', 'Águas Lindas de Goiás'],
  'PE': ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina', 'Paulista', 'Cabo de Santo Agostinho'],
  'CE': ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral', 'Crato', 'Itapipoca'],
  'DF': ['Brasília', 'Taguatinga', 'Ceilândia', 'Águas Claras', 'Samambaia', 'Guará'],
  'ES': ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Cachoeiro de Itapemirim', 'Linhares'],
  'MT': ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Tangará da Serra'],
  'MS': ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã'],
  'PA': ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Parauapebas', 'Castanhal'],
  'AM': ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari'],
  'MA': ['São Luís', 'Imperatriz', 'São José de Ribamar', 'Timon', 'Caxias'],
  'PB': ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux'],
  'RN': ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Ceará-Mirim'],
  'AL': ['Maceió', 'Arapiraca', 'Rio Largo', 'Palmeira dos Índios'],
  'PI': ['Teresina', 'Parnaíba', 'Picos', 'Piripiri'],
  'SE': ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana'],
  'RO': ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena'],
  'TO': ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional'],
  'AC': ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'],
  'AP': ['Macapá', 'Santana', 'Laranjal do Jari'],
  'RR': ['Boa Vista', 'Rorainópolis', 'Caracaraí']
};

export const FEATURES_LIST = [
  {
    title: 'Zero Cortes e Sem Irritação',
    description: 'Malha de proteção 3D ultrafina (0.1mm) que isola a lâmina do contato abrasivo com a pele. Adeus bolinhas vermelhas e pelos encravados!',
    icon: 'ShieldCheck'
  },
  {
    title: '100% Lavável e À Prova D\'Água (IPX7)',
    description: 'Use na pele seca, com espuma de barbear ou debaixo do chuveiro. Para limpar, basta passar a cabeça de corte direto na água corrente.',
    icon: 'Droplets'
  },
  {
    title: 'Tamanho de Bolso Ultracompacto',
    description: 'Menor que a palma da mão! Perfeito para levar no bolso, mochila, carro ou viagens. Esteja sempre alinhado onde estiver.',
    icon: 'Pocket'
  },
  {
    title: 'Motor Turbo de Alta Rotação (6600 RPM)',
    description: 'Potência surpreendente com rotação estável mesmo com pouca carga, impedindo que os pelos sejam puxados ou fiquem presos.',
    icon: 'Zap'
  },
  {
    title: 'Bateria USB Tipo-C de Longa Duração',
    description: 'Carga rápida de 30 minutos garante até 60 dias de uso normal diário. Compatível com carregador de celular, notebook ou powerbank.',
    icon: 'BatteryCharging'
  },
  {
    title: 'Garantia Incondicional de 90 Dias',
    description: 'Garantia total de satisfação. Se você não amar a facilidade e o corte sem dor, devolvemos seu dinheiro sem burocracia.',
    icon: 'Award'
  }
];

export const BODY_ZONES = [
  {
    id: 'beard',
    name: 'Barba e Bigode',
    highlight: 'Corte rente diário sem foliculite',
    description: 'Raspa rente ao contorno do rosto, queixo e bigode sem arder nem causar aquela queimação chata de gilete tradicional.',
    tag: 'Uso Diário'
  },
  {
    id: 'neck',
    name: 'Pescoço e Nuca',
    highlight: 'Fim dos pontinhos vermelhos',
    description: 'A pele do pescoço é ultrafina e sensível. A malha protetora circular desliza suavemente sem puxar nem beliscar.',
    tag: 'Pele Sensível'
  },
  {
    id: 'intimate',
    name: 'Virilha e Regiões Íntimas',
    highlight: '100% Seguro sem perigo de cortes',
    description: 'As lâminas rotativas ficam protegidas sob o domo de aço perfurado, permitindo depilar áreas delicadas com total tranquilidade.',
    tag: 'Máxima Segurança'
  },
  {
    id: 'body',
    name: 'Peito, Braços e Axilas',
    highlight: 'Rápido, prático e higiênico',
    description: 'Perfeito para aparar ou tirar pelos corporais rapidamente antes de sair de casa ou durante o banho.',
    tag: 'Corpo Todo'
  },
  {
    id: 'travel',
    name: 'Retoques Rápidos de Viagem',
    highlight: 'Esteja pronto em qualquer lugar',
    description: 'Faça um retoque no carro antes de uma reunião importante, encontro ou festa em menos de 2 minutos.',
    tag: 'Praticidade'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Irritação e queimadura na pele',
    bladepro: 'ZERO irritação (Malha protetora 3D)',
    traditional: 'Muito alta (corta e arranha)',
    clipper: 'Frequente por causa do atrito',
    waxing: 'Dor intensa e inflamação'
  },
  {
    feature: 'Praticidade e portabilidade',
    bladepro: 'Cabe no bolso da calça (70g)',
    traditional: 'Precisa de espuma e pia',
    clipper: 'Grande, pesada e cheia de fios',
    waxing: 'Só dá para fazer em salão'
  },
  {
    feature: 'Resistência à água',
    bladepro: '100% Lavável debaixo da torneira',
    traditional: 'Enferruja e perde o corte',
    clipper: 'Não pode molhar (estraga o motor)',
    waxing: 'Não se aplica'
  },
  {
    feature: 'Economia com lâminas descartáveis',
    bladepro: 'Lâminas autoafiáveis de longa duração',
    traditional: 'Gasta R$ 40 a R$ 60 todo mês em refil',
    clipper: 'Precisa afiar ou lubrificar',
    waxing: 'Gasto contínuo elevado'
  },
  {
    feature: 'Tempo necessário para barbear',
    bladepro: '1 a 3 minutos sem sujeira',
    traditional: '10 a 15 minutos com espuma',
    clipper: '8 a 12 minutos e muita bagunça',
    waxing: 'Mais de 30 minutos dolorosos'
  }
];

export const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Rodrigo Medeiros',
    location: 'São Paulo, SP',
    rating: 5,
    date: 'Há 2 dias',
    title: 'Surpreendeu demais pelo tamanho e potência!',
    comment: 'Comprei meio desconfiado pelo tamanho, mas me surpreendeu de verdade! Corta super rente, não puxa nenhum fio e não deixa o pescoço todo vermelho igual a gilete comum deixava. Deixo dentro da minha mochila de trabalho e quebra um galho surreal.',
    verifiedPurchase: true,
    recommend: true,
    likes: 38
  },
  {
    id: 'rev-2',
    name: 'Lucas Cavalcanti',
    location: 'Belo Horizonte, MG',
    rating: 5,
    date: 'Há 4 dias',
    title: 'Peguei o combo de 2 unidades e valeu muito a pena',
    comment: 'Peguei a promoção de 2 barbeadores, dei um pro meu pai e fiquei com o outro. Chegou em 4 dias aqui em BH pelos Correios com código de rastreio. Bateria dura semanas e lava facinho debaixo da torneira. Produto top!',
    verifiedPurchase: true,
    recommend: true,
    likes: 27
  },
  {
    id: 'rev-3',
    name: 'Guilherme Siqueira',
    location: 'Curitiba, PR',
    rating: 5,
    date: 'Há 1 semana',
    title: 'Uso no banho todo dia, zero ardor',
    comment: 'Minha pele sempre foi muito sensível com lâmina normal, ficava cheia de bolinhas no pescoço. Esse aparelhinho azul é muito prático e macio. Dá pra fazer a barba até a seco sem sentir puxar nada. Recomendo com certeza.',
    verifiedPurchase: true,
    recommend: true,
    likes: 54
  },
  {
    id: 'rev-4',
    name: 'Marcos Vinícius Santos',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    date: 'Há 1 semana',
    title: 'Excelente acabamento e bateria nota 10',
    comment: 'Achei o design metálico lindo, parece um item de luxo. A lâmina é de aço de verdade e gira muito rápido. Já usei umas 8 vezes e a bateria nem deu sinal de descarregar. Vale cada centavo.',
    verifiedPurchase: true,
    recommend: true,
    likes: 19
  },
  {
    id: 'rev-5',
    name: 'Felipe Alencar',
    location: 'Campinas, SP',
    rating: 4,
    date: 'Há 2 semanas',
    title: 'Muito prático para o dia a dia',
    comment: 'Muito leve e silencioso. Para quem precisa estar com a barba alinhada todo dia no serviço sem perder tempo com espuma, é a melhor invenção. Chegou bem embalado na caixinha.',
    verifiedPurchase: true,
    recommend: true,
    likes: 15
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o envio e o frete?',
    answer: 'O Frete é Grátis para todo o Brasil nesta promoção! Após a confirmação do pedido, enviamos o código de rastreamento no seu WhatsApp e e-mail para acompanhar cada etapa da entrega até a sua casa.',
    category: 'envios'
  },
  {
    id: 'faq-2',
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Aceitamos PIX (com desconto especial de 5% e aprovação imediata) e Pagamento ao Receber na Entrega com total segurança e comodidade.',
    category: 'pagos'
  },
  {
    id: 'faq-3',
    question: 'Realmente não puxa os fios e não irrita a pele?',
    answer: 'Sim! O Mini ShaverPro® possui motor de 6600 RPM de rotação contínua e lâmina rotativa turbo protegida por uma rede de malha favo de mel de 0.1mm. Os pelos entram com precisão e são cortados na base sem encostar a lâmina bruta na pele, evitando cortes e foliculite.',
    category: 'producto'
  },
  {
    id: 'faq-4',
    question: 'Pode molhar ou lavar debaixo da torneira?',
    answer: 'Sim, ele possui certificação IPX7 100% à prova d\'água! Você pode usá-lo tanto a seco quanto com espuma no chuveiro. Para higienizar, basta desrosquear a cabeça de corte e enxaguar em água corrente.',
    category: 'producto'
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo dura a bateria e como recarrega?',
    answer: 'A bateria interna de lítio recarrega via cabo USB Tipo-C (incluso). Uma carga rápida de apenas 30 minutos oferece até 60 dias de uso para barbear diário. Você pode carregar no carregador de celular, no carro ou no computador.',
    category: 'producto'
  },
  {
    id: 'faq-6',
    question: 'Qual é a garantia do produto?',
    answer: 'Oferecemos Garantia Total de 90 dias contra qualquer defeito de fabricação, além da garantia de satisfação de 7 dias prevista pelo Código de Defesa do Consumidor. Se não ficar satisfeito, devolvemos seu dinheiro sem burocracia.',
    category: 'garantia'
  }
];

