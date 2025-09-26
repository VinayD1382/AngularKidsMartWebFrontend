import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { Product } from '../components/products/products';
import { ProductItem } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ProductItem[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartCount.next(this.cartItems.length);
      }
    }
  }

  private saveCart() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    this.cartCount.next(this.cartItems.length);
  }

  

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.removeItem('cart');
    }
    this.cartCount.next(0);
  }
  addToCart(product: ProductItem) {
  const existing = this.cartItems.find(p => p.name === product.name);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    this.cartItems.push({ ...product, quantity: 1 });
  }
  this.saveCart();
}

updateQuantity(product: ProductItem, quantity: number) {
  const item = this.cartItems.find(p => p.name === product.name);
  if (item) {
    item.quantity = quantity;
    this.saveCart();
  }
}

removeFromCart(product: ProductItem) {
  this.cartItems = this.cartItems.filter(p => p.name !== product.name);
  this.saveCart();
}
setSingleCheckout(product: ProductItem, quantity: number = 1) {
    this.cartItems = [{ ...product, quantity }];
    this.saveCart();
  }
}
