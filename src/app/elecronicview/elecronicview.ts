import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElectronicProductService } from '../services/Electronic.service';
import { ProductItem } from '../models/product.model';

@Component({
  selector: 'app-electronic-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './elecronicview.html',
  styleUrls: ['./elecronicview.css']
})
export class ElectronicView implements OnInit {
  products: ProductItem[] = [];
  editingProduct: ProductItem | null = null;

  constructor(private productService: ElectronicProductService) {}

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
