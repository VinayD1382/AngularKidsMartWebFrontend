import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface OrderProduct {
  name: string;
  category: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface AngularOrder {
  id: number;
  email: string;
  products: OrderProduct[];
  totalAmount: number;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userdashboard.html',
  styleUrls: ['./userdashboard.css']
})
export class UserDashboardComponent implements OnInit {
  userEmail = localStorage.getItem('userEmail') || ''; // store email after login
  orders: AngularOrder[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.userEmail) {
      this.fetchUserOrders();
    } else {
      this.loading = false;
      alert("No user logged in!");
    }
  }

  fetchUserOrders() {
this.http.get<AngularOrder[]>(`http://localhost:5000/api/angular-orders/user-orders/${this.userEmail}`)
      .subscribe({
        next: (res) => {
          this.orders = res;
          this.loading = false;
        },
        error: (err) => {
          console.error("Failed to fetch orders", err);
          this.loading = false;
        }
      });
  }
}
