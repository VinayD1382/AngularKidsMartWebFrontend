import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandFooterComponent } from '../brand-footer/brand-footer';

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  onSale: boolean;
  category?: string;
  link?: string;
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, BrandFooterComponent],
  templateUrl: './games.html',
  styleUrls: ['./games.css']  
})
export class Games implements OnInit {
  games: Product[] = [];

  ngOnInit(): void {
    this.games = [
      { id: 1, name: 'Gun Screw', imageUrl: 'Games/o1.png', link: 'https://www.crazygames.com/game/gun-match-screw', price: 0, onSale: true },
      { id: 2, name: 'Drive Mad', imageUrl: 'Games/t2.png', link: 'https://poki.com/en/g/drive-mad', price: 0, onSale: true },
      { id: 2, name: 'Car Stunts Adventure', imageUrl: 'Games/t3.png', link: 'https://poki.com/en/g/car-stunts-adventure', price: 0, onSale: true },
      { id: 2, name: 'Car Parking School', imageUrl: 'Games/f4.png', link: 'https://poki.com/en/g/car-parking-school', price: 0, onSale: true },
      { id: 2, name: 'Capitalist Bus Driver', imageUrl: 'Games/f5.png', link: 'https://poki.com/en/g/capitalist-bus-driver', price: 0, onSale: true },
      { id: 2, name: '3D Moto Simulator', imageUrl: 'Games/s6.png', link: 'https://poki.com/en/g/3d-moto-simulator-2', price: 0, onSale: true },
      { id: 2, name: 'Master Chess', imageUrl: 'Games/s7.png', link: 'https://poki.com/en/g/master-chess', price: 0, onSale: true },
      { id: 2, name: 'Ludo', imageUrl: 'Games/e8.png', link: 'https://poki.com/en/g/ludo-multiplayer', price: 0, onSale: true },
      { id: 2, name: 'Combat Reloaded', imageUrl: 'Games/n9.png', link: 'https://poki.com/en/g/combat-reloaded', price: 0, onSale: true },
      { id: 2, name: 'Scary Teacher 3D', imageUrl: 'Games/t10.png', link: 'https://poki.com/en/g/scary-teacher-3d', price: 0, onSale: true },
      { id: 2, name: 'Crazy Cars', imageUrl: 'Games/e11.png', link: 'https://poki.com/en/g/crazy-cars', price: 0, onSale: true },
      { id: 2, name: 'Stunt Bike ', imageUrl: 'Games/e12.png', link: 'https://poki.com/en/g/stunt-bike-extreme', price: 0, onSale: true },

    ];
  }
}
