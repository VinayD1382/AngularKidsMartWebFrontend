import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boyswear } from './boyswear';

describe('Boyswear', () => {
  let component: Boyswear;
  let fixture: ComponentFixture<Boyswear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boyswear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boyswear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
