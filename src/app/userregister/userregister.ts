import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './userregister.html',
  styleUrls: ['./userregister.css']
})
export class UserRegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    const payload = { name: this.name, email: this.email, password: this.password };

    this.http.post('http://localhost:5000/api/angular-users/register', payload)
      .subscribe({
        next: (res: any) => {
          alert(res.message);
          this.router.navigate(['/userlogin']); 
        },
        error: (err) => {
          console.error(err);
          alert(err.error?.error || 'Registration failed');
        }
      });
  }
}
