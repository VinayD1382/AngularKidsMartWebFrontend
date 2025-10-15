import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductItem } from '../models/product.model';
import { BoysWearProductService } from '../services/Boyswear.service';

@Component({
  selector: 'app-boyswearview-view',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './boyswearview.html',
  styleUrls: ['./boyswearview.css']
})
export class BoysWearView implements OnInit {
  products: ProductItem[] = [];
  editingProduct: ProductItem | null = null;
  newProduct: ProductItem = { name: '', price: 0, imageUrl: '', description: '', category: 'BoysWear' };
  loading = false;

  constructor(private productService: BoysWearProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => this.products = data,
      error: err => console.error('Failed to load products', err)
    });
  }

  addProduct(form: NgForm) {
    if (!this.newProduct.name || !this.newProduct.price) {
      alert('Name and Price are required');
      return;
    }  

    this.loading = true;
    this.productService.addProduct(this.newProduct).subscribe({
      next: product => {
        this.products.push(product);
        form.resetForm({ category: 'BoysWear' });
        this.newProduct = { name: '', price: 0, imageUrl: '', description: '', category: 'BoysWear' };
        this.loading = false;
      },
      error: err => {
        console.error(err);
        alert('Failed to add product');
        this.loading = false;
      }
    });
  }

  startEdit(product: ProductItem) {
    this.editingProduct = { ...product };
  }

  saveEdit() {
    if (this.editingProduct && this.editingProduct._id) {
      this.productService.updateProduct(this.editingProduct._id, this.editingProduct).subscribe({
        next: () => {
          this.editingProduct = null;
          this.loadProducts();
        },
        error: err => console.error('Failed to update product', err)
      });
    }
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => this.loadProducts(),
        error: err => console.error('Failed to delete product', err)
      });
    }
  }
}
