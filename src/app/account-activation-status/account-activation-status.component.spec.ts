import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivationStatusComponent } from './account-activation-status.component';

describe('AccountActivationStatusComponent', () => {
  let component: AccountActivationStatusComponent;
  let fixture: ComponentFixture<AccountActivationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountActivationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
