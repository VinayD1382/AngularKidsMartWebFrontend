import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone:true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent   implements OnInit {
  images: string[] = [
    '/Hero10.png',
     '/HeroD1.png',
     '/HeroD2.png',
    '/HeroD3.png',
    '/HeroD4.png',
    '/HeroD5.png',
    
  ];

  currentIndex: number = 0;
  currentImage: string = this.images[0];

  ngOnInit(): void {
    this.images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 2000);
  }
}
