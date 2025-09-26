import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kidselectronics } from './kidselectronics';

describe('Kidselectronics', () => {
  let component: Kidselectronics;
  let fixture: ComponentFixture<Kidselectronics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kidselectronics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kidselectronics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
