import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductItem } from '../models/product.model';
import { GirlsWearProductService } from '../services/Girlwear.service';
@Component({
  selector: 'app-girlswearview-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './girlswearview.html',
  styleUrls: ['./girlswearview.css']
})
export class GirlsWearView implements OnInit {
  products: ProductItem[] = [];
  editingProduct: ProductItem | null = null;

  constructor(private productService: GirlsWearProductService) {}

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
