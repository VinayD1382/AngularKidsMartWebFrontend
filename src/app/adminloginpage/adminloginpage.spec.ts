import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminloginpage } from './adminloginpage';

describe('Adminloginpage', () => {
  let component: Adminloginpage;
  let fixture: ComponentFixture<Adminloginpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminloginpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminloginpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
