export interface BundleOption {
  id: string;
  name: string;
  units: number;
  regularPrice: number;
  salePrice: number;
  discountPercent: number;
  tag?: string;
  isPopular?: boolean;
  savings: number;
  unitPrice: number;
  checkoutUrl?: string;
}

export interface UpsellItem {
  id: string;
  title: string;
  subtitle: string;
  regularPrice: number;
  salePrice: number;
  image: string;
  badge: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  recommend: boolean;
  userAvatar?: string;
  reviewImage?: string;
  likes: number;
}

export interface OrderDetails {
  id: string;
  timestamp: string;
  customerName: string;
  phone: string;
  email?: string;
  cep: string;
  state: string;
  city: string;
  address: string;
  neighborhood: string;
  complement?: string;
  notes?: string;
  bundle: BundleOption;
  hasUpsell: boolean;
  upsellItem?: UpsellItem;
  totalAmount: number;
  paymentMethod: 'pix' | 'contra_entrega';
  status: 'recebido' | 'confirmado' | 'separacao' | 'em_transito';
  estimatedDelivery: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'envios' | 'producto' | 'garantia' | 'pagos';
}
