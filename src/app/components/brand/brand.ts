import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  onSale?: boolean;
}

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.html',
  styleUrls: ['./brand.css']   
})
export class BrandProducts {
  products: Product[] = [
    {
      id: 1,
      name: '',
      imageUrl: 'Brand2.jpg',
      price: 399,
      onSale: true
    },
    {
      id: 2,
      name: '',
      imageUrl:'Brand3.png',
      price: 700,
      onSale: true
    },
    {
      id: 3,
      name: '',
      imageUrl: 'Brand4.jpg',
      price: 99,
      onSale: true
    },
    {
      id: 5,
      name: '',
      imageUrl: 'Brand5.jpg',
      price: 700,
      onSale: true
    },
    {
      id: 6,
      name: '',
      imageUrl: 'Brand6.jpg',
      price: 149,
      onSale: true
    },
    {
      id: 6,
      name: '',
      imageUrl: 'Brand1.png',
      price: 399,
      onSale: true
    },
    {
      id: 7,
      name: '',
      imageUrl: 'brand7.png',
      price: 399,
      onSale: true
    },
    
    
  ];
}
