import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBenificiariesComponent } from './view-benificiaries.component';

describe('ViewBenificiariesComponent', () => {
  let component: ViewBenificiariesComponent;
  let fixture: ComponentFixture<ViewBenificiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBenificiariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBenificiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
