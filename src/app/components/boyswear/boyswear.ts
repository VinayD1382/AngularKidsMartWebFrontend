// src/app/components/boyswear/boyswear.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 
import { BoysWearProductService } from '../../services/Boyswear.service';
import { ProductItem } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-boyswear',
  standalone: true,
  imports: [CommonModule, BrandFooterComponent],
  templateUrl: './boyswear.html',
  styleUrls: ['./boyswear.css'],
})
export class Boyswear implements OnInit {
  products: ProductItem[] = [];
  selectedProduct: ProductItem | null = null;
  showImageOnly = false;
  quantity = 1;
  loading = true;
  highlightedProductId: string | null = null;

  constructor(
    private cartService: CartService,
    private productService: BoysWearProductService,
    private route: ActivatedRoute
    ,  private router: Router  

  ) {}

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    this.highlightedProductId = params.get('id');

    if (this.highlightedProductId) {
      // Fetch only the specific product if ID exists
      this.productService.getProductById(this.highlightedProductId).subscribe(
        (product: ProductItem) => {
          this.products = [product]; // Show only this product or merge with all products
          this.loading = false;

          // Open modal for this product
          this.openModal(product);

          // Scroll into view if element exists
          setTimeout(() => {
            const el = document.getElementById(product._id!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('highlight');
            }
          }, 300);
        },
        (err: any) => {
          console.error('Error fetching product by ID:', err);
          this.loading = false;
        }
      );
    } else {
      // Load all products normally
      this.loadProducts();
    }
  });
}



private loadProducts() {
  this.productService.getProducts().subscribe(
    (data: ProductItem[]) => {
      this.products = data;
      this.loading = false;

      if (this.highlightedProductId) {
        setTimeout(() => {
          const product = this.products.find(p => p._id === this.highlightedProductId);
          if (product) {
            const el = document.getElementById(product._id!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('highlight');
            }

            this.openModal(product);
          }
        }, 300); 
      }
    },
    err => {
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
  this.cartService.setSingleCheckout(this.selectedProduct, this.quantity);
  this.router.navigate(['/formpayment']);
}
}
