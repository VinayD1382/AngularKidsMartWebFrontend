import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { DashBoardProductService } from '../../services/DashHome.service';
import { ProductItem } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class HomeProducts implements OnInit {
  products: ProductItem[] = [];
  selectedProduct: ProductItem | null = null;
  showImageOnly = false;
  quantity = 1;
  loading = true;
  highlightedProductId: string | null = null;

  constructor(
    private cartService: CartService,
    private productService: DashBoardProductService,
    private route: ActivatedRoute
,  private router: Router 
  ) {}

  ngOnInit(): void {
  this.productService.getProducts().subscribe(
    (data: ProductItem[]) => {
      this.products = data;
      this.loading = false;

      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          const product = this.products.find(p => p._id === id);
          if (product) {
            const el = document.getElementById(product._id!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('highlight');
            }
            this.openModal(product);
          }
        }
      });
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
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  checkout() {
  if (!this.selectedProduct) return;
  this.cartService.setSingleCheckout(this.selectedProduct, this.quantity);
  this.router.navigate(['/formpayment']);
}
 
}
