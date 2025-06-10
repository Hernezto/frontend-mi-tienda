interface defaultProductProps {
  name: string;
  price: number;
  description: string;
  ingredients: string;
  details: string;
}

interface Product {
  thumb?: string;
  id: number;
  img?: string;
  name: string;
  category: string;
  price: number;
  subtitle: string;
  description: string;
  ingredients: string;
  badge: undefined;
}

interface CartItems {
  product: Product;
  quantity: number;
}

export type { defaultProductProps, Product, CartItems };
