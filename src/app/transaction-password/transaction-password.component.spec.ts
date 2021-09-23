import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPasswordComponent } from './transaction-password.component';

describe('TransactionPasswordComponent', () => {
  let component: TransactionPasswordComponent;
  let fixture: ComponentFixture<TransactionPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
