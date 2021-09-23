import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTGSTransferComponent } from './rtgstransfer.component';

describe('RTGSTransferComponent', () => {
  let component: RTGSTransferComponent;
  let fixture: ComponentFixture<RTGSTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTGSTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTGSTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
