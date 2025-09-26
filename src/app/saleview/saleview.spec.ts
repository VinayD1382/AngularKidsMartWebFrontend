import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saleview } from './saleview';

describe('Saleview', () => {
  let component: Saleview;
  let fixture: ComponentFixture<Saleview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saleview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saleview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
