import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-footer.html',
  styleUrls: ['./brand-footer.css']
})
export class BrandFooterComponent {
  currentYear: number = new Date().getFullYear();

  shopLinks = [
    'Shop All',
    'Boys Wear',
    'Girls Wear',
    'Tablets',
    'Games',
    'FootWear',
    'Sale'
  ];

  customerSupportLinks = [
    'Contact Us',
    'Help Center',
    'About Us',
    'Careers'
  ];

  policyLinks = [
    'Shipping & Returns',
    'Terms & Conditions',
    'Payment Methods',
    'FAQ'
  ];

  paymentLogos = [
    { src: '/Payment/pay8.jpg',alt: 'Visa' },
    { src: '/Payment/pay7.png', alt: 'MasterCard' },
    { src: '/Payment/pay6.jpg', alt: 'American Express' },
    { src: '/Payment/pay5.jpg',alt: 'UnionPay' },
    { src: '/Payment/pay4.jpg', alt: 'JCB' },
    { src: '/Payment/pay2.jpg', alt: 'Discover' },
    { src: '/Payment/pay1.jpg', alt: 'PayPal' }
  ];
}
