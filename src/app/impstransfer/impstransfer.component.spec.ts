import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMPSTransferComponent } from './impstransfer.component';

describe('IMPSTransferComponent', () => {
  let component: IMPSTransferComponent;
  let fixture: ComponentFixture<IMPSTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMPSTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMPSTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
