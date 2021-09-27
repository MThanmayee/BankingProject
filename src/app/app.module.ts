import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { IMPSTransferComponent } from './impstransfer/impstransfer.component';
import { NEFTTransferComponent } from './nefttransfer/nefttransfer.component';
import { RTGSTransferComponent } from './rtgstransfer/rtgstransfer.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { RegisterComponent } from './register/register.component';
import { TransactionPasswordComponent } from './transaction-password/transaction-password.component';
import { AccountActivationStatusComponent } from './account-activation-status/account-activation-status.component';
import { LoginComponent } from './login/login.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { HomeComponent } from './home/home.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPayeeComponent,
    FundTransferComponent,
    IMPSTransferComponent,
    NEFTTransferComponent,
    RTGSTransferComponent,
    ForgotUserIdComponent,
    ForgotPasswordFormComponent,
    SetNewPasswordComponent,
    RegisterComponent,
    TransactionPasswordComponent,
    AccountActivationStatusComponent,
    LoginComponent,
    OpenAccountComponent,
    HomeComponent,
    ResetEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
