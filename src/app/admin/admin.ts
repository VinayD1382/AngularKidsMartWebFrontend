import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../components/footer/footer';
import { BrandFooterComponent } from '../components/brand-footer/brand-footer';
import { ProductItem } from '../models/product.model';
import { HomeProductService } from '../services/Homeproduct.service';
import { BoysWearProductService } from '../services/Boyswear.service';
import { GirlsWearProductService } from '../services/Girlwear.service';
import { FootwearProductService } from '../services/footwear.service';
import { GamesProductService } from '../services/games.service';
import { KidsProductService } from '../services/kids.service';
import { SaleProductService } from '../services/sale.service';
import { StationaryProductService } from '../services/stationary.service';
import { ToysProductService } from '../services/toys.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FooterComponent,
    BrandFooterComponent
  ],
  providers: [
    HomeProductService,
    BoysWearProductService,
    GirlsWearProductService,
    ToysProductService,
    FootwearProductService,
    KidsProductService,
    SaleProductService,
    GamesProductService,
    StationaryProductService
  ],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  product: ProductItem = { name: '', price: 0, imageUrl: '', description: '', category: '' };
  categories = [
    'Home',
    'BoysWear',
    'GirlsWear',
    'Toys',
    'Stationary',
    'KidsElectronic',
    'Footwear',
    'Games',
    'Sale'
  ];
  loading = false;

  serviceMap!: Record<string, { addProduct(product: ProductItem): any }>;

  constructor(
    private router: Router,
    private homeService: HomeProductService,
    private boysService: BoysWearProductService,
    private girlsService: GirlsWearProductService,
    private toysService: ToysProductService,
    private footwearService: FootwearProductService,
    private kidseleService: KidsProductService,
    private saleService: SaleProductService,
    private gameService: GamesProductService,
    private stationaryService: StationaryProductService
  ) {
    this.serviceMap = {
      Home: this.homeService,
      BoysWear: this.boysService,
      GirlsWear: this.girlsService,
      Toys: this.toysService,
      Footwear: this.footwearService,
      KidsElectronic: this.kidseleService,
      Sale: this.saleService,
      Games: this.gameService,
      Stationary: this.stationaryService
    };
  }

  goToHomeViewPro() {
    this.router.navigate(['/homeviewpro']);
  }
   goToElectronicViewPro() {
    this.router.navigate(['/Electronicviewpro']);
  }
  goToBoysWearViewPro() {
    this.router.navigate(['/boyswearviewpro']);
  }
  goToGirlsWearViewPro() {
    this.router.navigate(['/girlswearviewpro']);
  }
   goToSaleViewPro() {
    this.router.navigate(['/saleviewpro']);
  }
  goToStationaryViewPro() {
    this.router.navigate(['/stationayviewpro']);
  }
  goToToysViewPro() {
    this.router.navigate(['/toysviewpro']);
  }
  vieworders() {
    this.router.navigate(['/orderdetails']);
  }
  logout() {
    this.router.navigate(['/']);
  }
  selectCategory(cat: string) {
    this.product.category = cat;  
  }

  onSubmit(form: NgForm) {
    if (!this.product.category) {
      alert('Please select a category');
      return;
    }

    const service = this.serviceMap[this.product.category];

    this.loading = true;
    service.addProduct(this.product).subscribe({
      next: (res: ProductItem) => {
        alert(`✅ Product "${res.name}" added successfully!`);
        form.resetForm();
        this.product = { name: '', price: 0, imageUrl: '', description: '', category: '' };
      },
      error: (err: any) => {
        console.error(err);
        alert('❌ Failed to add product');
      },
      complete: () => (this.loading = false)
    });
  }
}
