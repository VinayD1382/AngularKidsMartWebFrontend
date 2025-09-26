import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../models/product.model';



@Injectable({
  providedIn: 'root' 
})
export class KidsProductService {
  private apiUrl = 'http://localhost:5000/api/angular-kidsele'; 

  constructor(private http: HttpClient) {}

  addProduct(product: ProductItem): Observable<ProductItem> {
    return this.http.post<ProductItem>(this.apiUrl, product);
  }

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.apiUrl);
  }
}
