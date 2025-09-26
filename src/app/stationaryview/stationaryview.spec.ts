import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stationaryview } from './stationaryview';

describe('Stationaryview', () => {
  let component: Stationaryview;
  let fixture: ComponentFixture<Stationaryview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stationaryview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stationaryview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
