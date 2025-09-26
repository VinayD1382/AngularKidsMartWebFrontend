// src/app/models/product.model.ts
/*
export interface ProductItem {
  id?: number;           // optional, backend generates it
  name: string;
  price: number;
  imageUrl: string;
  description?: string;  // optional
  category: string;
  oldPrice?: number;
  onSale?: boolean;
  quantity?: number;
}
*/
export interface ProductItem {
  _id?: string;          
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category: string;
  oldPrice?: number;
  onSale?: boolean;
  quantity?: number;
}
