import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductItem } from '../models/product.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-payment',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './formpayment.html',
  styleUrls: ['./formpayment.css']
})
export class FormPaymentComponent implements OnInit {
   name = '';
  email = '';
  phone = '';
  address = '';
  cartItems: ProductItem[] = [];
  totalAmount = 0;
  discount = 0;
  platformFee = 5;
  finalAmount = 0;

  constructor(private cartService: CartService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    
    this.discount = Math.floor(this.totalAmount * 0.15);
    this.finalAmount = this.totalAmount - this.discount + this.platformFee;
  }

  placeOrder() {
    if (!this.name || !this.email || !this.phone || !this.address) {
      alert('Please fill all details!');
      return;
    }

    const orderPayload = {
  name: this.name,
  email: this.email,
  phone: this.phone,
  address: this.address,
  paymentMethod: 'COD',
  totalAmount: this.totalAmount,
  products: this.cartItems.map(item => ({
    productId: item._id ? parseInt(item._id, 16) : 0, 
    name: item.name,
    price: item.price,
    quantity: item.quantity || 1,
    imageUrl: item.imageUrl,
    category: item.category
  }))
};


    this.http.post('https://angularkidsmartwebbackend.onrender.com/api/angular-orders', orderPayload)
      .subscribe({
        next: (res: any) => {
          alert('✅ Thank you! Your order will be delivered in 5-7 days.');
          this.cartService.clearCart();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to place order');
        }
      });
  }
}
