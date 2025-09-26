import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FootwearProductService {
  private apiUrl = 'http://localhost:5000/api/angular-footwear';

  constructor(private http: HttpClient) {}

addProduct(product: ProductItem): Observable<ProductItem> {
  const payload = {
    ...product,
    oldPrice: product.oldPrice || null,
    onSale: product.onSale ?? true,
    quantity: product.quantity || 1
  };

  return this.http.post<ProductItem>(this.apiUrl, payload);
}

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.apiUrl);
  }
}
