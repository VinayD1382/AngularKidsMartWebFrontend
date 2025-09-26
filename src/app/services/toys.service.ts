import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../models/product.model';

@Injectable({
  providedIn: 'root' 
})
export class ToysProductService {
  private apiUrl = 'https://angularkidsmartwebbackend.onrender.com/api/angular-toys'; 

  constructor(private http: HttpClient) {}

  addProduct(product: ProductItem): Observable<ProductItem> {
    return this.http.post<ProductItem>(this.apiUrl, product);
  }

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.apiUrl);
  }
  
  updateProduct(id: string, product: ProductItem): Observable<ProductItem> {
    return this.http.put<ProductItem>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
