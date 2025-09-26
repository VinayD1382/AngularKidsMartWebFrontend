import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface OrderProduct {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  category?: string;
}

interface AngularOrder {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
  products: OrderProduct[];
  totalAmount: number;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-orderdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderdetails.html',
  styleUrls: ['./orderdetails.css']
})
export class OrderDetailsComponent implements OnInit {
  orders: AngularOrder[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.http.get<AngularOrder[]>('http://localhost:5000/api/angular-orders')
      .subscribe({
        next: (res) => {
          this.orders = res;
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to fetch orders', err);
          this.loading = false;
        }
      });
  }

  updateOrderStatus(orderId: number, status: string) {
    this.http.patch(`http://localhost:5000/api/angular-orders/${orderId}`, { status })
      .subscribe({
        next: () => {
          alert(`Order #${orderId} marked as ${status}`);
          this.fetchOrders(); 
        },
        error: err => console.error('Failed to update order status', err)
      });
  }
}
