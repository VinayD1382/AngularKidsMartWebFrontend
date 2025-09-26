import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './userloginpage.html',
  styleUrls: ['./userloginpage.css']
})
export class UserLoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    const payload = { email: this.email, password: this.password };

    this.http.post('http://localhost:5000/api/angular-users/login', payload)
      .subscribe({
        next: (res: any) => {
          alert(res.message);
          localStorage.setItem('userEmail', this.email);
          this.router.navigate(['/userdashboard']);
        },
        error: (err) => {
          console.error(err);
          alert(err.error?.error || 'Login failed');
        }
      });
  }
}
