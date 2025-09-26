import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminloginpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminloginpage.html',
  styleUrls: ['./adminloginpage.css']
})
export class AdminLoginPageComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if(this.username === 'vinay@123' && this.password === 'vinay123') {
      this.errorMessage = '';
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
