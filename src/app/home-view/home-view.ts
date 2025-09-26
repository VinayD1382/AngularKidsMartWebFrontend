import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeProductService } from '../services/Homeproduct.service'; 
import { ProductItem } from '../models/product.model';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-view.html',
  styleUrls: ['./home-view.css']
})
export class HomeView implements OnInit {
  products: ProductItem[] = [];
  editingProduct: ProductItem | null = null;

  constructor(private productService: HomeProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  startEdit(product: ProductItem) {
    this.editingProduct = { ...product };
  }

  saveEdit() {
    if (this.editingProduct && this.editingProduct._id) {
      this.productService.updateProduct(this.editingProduct._id, this.editingProduct).subscribe(() => {
        this.editingProduct = null;
        this.loadProducts();
      });
    }
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}
