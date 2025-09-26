import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Girlwear } from './girlwear';

describe('Girlwear', () => {
  let component: Girlwear;
  let fixture: ComponentFixture<Girlwear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Girlwear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Girlwear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
