import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toysview } from './toysview';

describe('Toysview', () => {
  let component: Toysview;
  let fixture: ComponentFixture<Toysview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toysview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toysview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
