import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductItem } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.html',
  imports: [CommonModule],
  styleUrls: ['./cart-page.css']
})
export class CartPageComponent implements OnInit {
  cartItems: (ProductItem & { quantity?: number })[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: ProductItem & { quantity?: number }) {
    item.quantity = (item.quantity || 1) + 1;
  }
  placeorder() {
    this.router.navigate(['/formpayment']);
  }
  decreaseQuantity(item: ProductItem & { quantity?: number }) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: ProductItem) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }

  getDiscount(): number {
    return Math.floor(this.getTotal() * 0.15); 
  }
}
