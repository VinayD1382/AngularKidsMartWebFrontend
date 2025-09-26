import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service';
import { FootwearProductService } from '../../services/footwear.service';

@Component({
  selector: 'app-footwear',
  standalone: true,
  imports: [CommonModule, BrandFooterComponent],
  templateUrl: './footwear.html',
  styleUrls: ['./footwear.css']
})
export class Footwear implements OnInit {
  products: ProductItem[] = [];
     selectedProduct: ProductItem | null = null;
     showImageOnly = false;
     quantity = 1;
     loading = true;
   
     constructor(
       private cartService: CartService,
       private productService: FootwearProductService
     ) {}
   
     ngOnInit(): void {
       this.loadProducts();
     }
   
     private loadProducts() {
       this.productService.getProducts().subscribe(
         (data: ProductItem[]) => {
           this.products = data;
           this.loading = false;
         },
         (err) => {
           console.error('Error fetching products:', err);
           this.loading = false;
         }
       );
     }
   
     addToCart(product: ProductItem) {
       this.cartService.addToCart(product);
       alert(`${product.name} added to cart`);
     }
   
     openModal(product: ProductItem, imageOnly: boolean = false) {
       this.selectedProduct = product;
       this.showImageOnly = imageOnly;
       this.quantity = 1;
     }
   
     closeModal() {
       this.selectedProduct = null;
       this.showImageOnly = false;
     }
   
     increaseQty() {
       this.quantity++;
     }
   
     decreaseQty() {
       if (this.quantity > 1) this.quantity--;
     }
   
     checkout() {
       if (!this.selectedProduct) return;
   
       alert(
         `Checkout: ${this.selectedProduct.name} x${this.quantity} = Rs.${this.selectedProduct.price * this.quantity}`
       );
       this.closeModal();
     }
}
