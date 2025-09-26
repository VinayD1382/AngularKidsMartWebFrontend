import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngKidsMart');
}
