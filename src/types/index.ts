export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: string[];
}

export interface Package {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error';
}
