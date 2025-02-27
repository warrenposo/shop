
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "shoes" | "clothes";
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: "shoes" | "clothes";
}
