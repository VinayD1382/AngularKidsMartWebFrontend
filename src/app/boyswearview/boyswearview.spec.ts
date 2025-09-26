import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boyswearview } from './boyswearview';

describe('Boyswearview', () => {
  let component: Boyswearview;
  let fixture: ComponentFixture<Boyswearview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boyswearview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boyswearview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
