import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otp1Component } from './otp1.component';

describe('Otp1Component', () => {
  let component: Otp1Component;
  let fixture: ComponentFixture<Otp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
