import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footwear } from './footwear';

describe('Footwear', () => {
  let component: Footwear;
  let fixture: ComponentFixture<Footwear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footwear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footwear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
