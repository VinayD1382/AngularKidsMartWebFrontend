import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductItem } from '../../models/product.model';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  cartCount = 0;
  cartItems: ProductItem[] = [];
  showCart = false;
  savedForLater: any[] = [];
  searchQuery: string = "";

  constructor(
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {
    this.cartService.cartCount$.subscribe(count => (this.cartCount = count));
  }

  toggleCart() {
    this.showCart = !this.showCart;
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: ProductItem & { quantity?: number }) {
    const newQty = (item.quantity || 1) + 1;
    this.cartService.updateQuantity(item, newQty);
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(item: ProductItem & { quantity?: number }) {
    if ((item.quantity || 1) > 1) {
      const newQty = (item.quantity || 1) - 1;
      this.cartService.updateQuantity(item, newQty);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.getTotal();
    this.router.navigate(['/cart']);
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }

  saveForLater(item: any) {
    this.removeItem(item);
    this.savedForLater.push(item);
    console.log('Saved for later:', this.savedForLater);
  }

  searchProduct() {
    if (!this.searchQuery.trim()) return;

    this.http
      .get<any>(`http://localhost:5000/api/search/${this.searchQuery}`)
      .subscribe({
        next: product => {
          console.log('Found:', product);

          switch (product.category.toLowerCase()) {
            case 'boyswear':
              this.router.navigate(['/boyswear', product._id]);
              break;
            case 'girlswear':
              this.router.navigate(['/girlwear', product._id]);
              break;
            case 'toys':
              this.router.navigate(['/toys', product._id]);
              break;
            case 'games':
              this.router.navigate(['/games', product._id]);
              break;
            case 'kidsele':
              this.router.navigate(['/kidselectronics', product._id]);
              break;
            case 'stationary':
              this.router.navigate(['/stationary', product._id]);
              break;
            case 'footwear':
              this.router.navigate(['/footwear', product._id]);
              break;
            case 'sale':
              this.router.navigate(['/sale', product._id]);
              break;
            default:
              this.router.navigate(['/']);
          }
        },
        error: () => {
          alert('❌ Product not found');
        }
      });
  }
}
