import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userloginpage } from './userloginpage';

describe('Userloginpage', () => {
  let component: Userloginpage;
  let fixture: ComponentFixture<Userloginpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userloginpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userloginpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
