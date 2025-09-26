import { Component,OnInit } from '@angular/core';
import { ProductItem } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { CartService } from '../../services/cart.service'; 
import { StationaryProductService } from '../../services/stationary.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stationary',
    standalone: true,
    imports: [CommonModule,BrandFooterComponent,RouterModule],
  templateUrl: './stationary.component.html',
  styleUrl: './stationary.component.css'
})
export class StationaryComponent implements OnInit {
  products: ProductItem[] = [];
     selectedProduct: ProductItem | null = null;
     showImageOnly = false;
     quantity = 1;
     loading = true;
      highlightedProductId: string | null = null;

     constructor(
       private cartService: CartService,
       private productService: StationaryProductService,
        private route: ActivatedRoute
   ,  private router: Router   // <-- add this

     ) {}
   
    ngOnInit(): void {
  // Subscribe to route param immediately
  this.route.paramMap.subscribe(params => {
    this.highlightedProductId = params.get('id');
  });

  this.loadProducts();
}

private loadProducts() {
  this.productService.getProducts().subscribe(
    (data: ProductItem[]) => {
      this.products = data;
      this.loading = false;

      // Highlight product if ID exists
      if (this.highlightedProductId) {
        setTimeout(() => {
          const product = this.products.find(p => p._id === this.highlightedProductId);
          if (product) {
            // Scroll to product
            const el = document.getElementById(product._id!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('highlight');
            }

            // Auto open modal for that product
            this.openModal(product);
          }
        }, 300); // wait for DOM to render
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

  // ✅ Add selected product to cart for direct payment
  this.cartService.setSingleCheckout(this.selectedProduct, this.quantity);

  // ✅ Navigate to form payment page
  this.router.navigate(['/formpayment']);
}
}
