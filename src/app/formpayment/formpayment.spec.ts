import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpayment } from './formpayment';

describe('Formpayment', () => {
  let component: Formpayment;
  let fixture: ComponentFixture<Formpayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formpayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formpayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
