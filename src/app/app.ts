import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,        // ✅ Required for *ngIf, etc.
    HeaderComponent,
    NavbarComponent,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  hideNavbar = false;

  // ✅ Angular signal for your title
  protected readonly title = signal('AngKidsMart');

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Hide navbar on userdashboard routes only
        this.hideNavbar = event.urlAfterRedirects.startsWith('/userdashboard');
      });
  }
}
