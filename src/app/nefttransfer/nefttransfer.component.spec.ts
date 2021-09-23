import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEFTTransferComponent } from './nefttransfer.component';

describe('NEFTTransferComponent', () => {
  let component: NEFTTransferComponent;
  let fixture: ComponentFixture<NEFTTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEFTTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NEFTTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
