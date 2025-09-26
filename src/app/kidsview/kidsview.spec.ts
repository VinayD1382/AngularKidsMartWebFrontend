import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kidsview } from './kidsview';

describe('Kidsview', () => {
  let component: Kidsview;
  let fixture: ComponentFixture<Kidsview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kidsview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kidsview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
