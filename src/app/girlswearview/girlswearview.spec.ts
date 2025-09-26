import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Girlswearview } from './girlswearview';

describe('Girlswearview', () => {
  let component: Girlswearview;
  let fixture: ComponentFixture<Girlswearview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Girlswearview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Girlswearview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
