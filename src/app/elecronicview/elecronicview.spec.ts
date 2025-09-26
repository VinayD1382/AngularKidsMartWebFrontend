import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elecronicview } from './elecronicview';

describe('Elecronicview', () => {
  let component: Elecronicview;
  let fixture: ComponentFixture<Elecronicview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elecronicview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elecronicview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
