import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer';
import { HeaderComponent } from '../header/header';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { HomeProducts } from '../products/products';
import { BrandProducts } from '../brand/brand';
import { BrandFooterComponent } from '../brand-footer/brand-footer';
import { Awards } from '../awards/awards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    HomeProducts,
    BrandProducts,
    BrandFooterComponent,
    Awards
  ],
 templateUrl: './home.html',
styleUrls: ['./home.css']

})
export class HomeComponent {
  isChatOpen = false;

  openChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
