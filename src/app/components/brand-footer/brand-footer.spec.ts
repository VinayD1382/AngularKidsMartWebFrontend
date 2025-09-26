import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFooter } from './brand-footer';

describe('BrandFooter', () => {
  let component: BrandFooter;
  let fixture: ComponentFixture<BrandFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
