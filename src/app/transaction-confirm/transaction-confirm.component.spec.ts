import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionConfirmComponent } from './transaction-confirm.component';

describe('TransactionConfirmComponent', () => {
  let component: TransactionConfirmComponent;
  let fixture: ComponentFixture<TransactionConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
