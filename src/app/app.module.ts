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
<<<<<<< HEAD
import { TransactionConfirmComponent } from './transaction-confirm/transaction-confirm.component';
import { TransactionSuccessfulComponent } from './transaction-successful/transaction-successful.component';
import { AdminComponent } from './admin/admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewBenificiariesComponent } from './view-benificiaries/view-benificiaries.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ReferenceNumberComponent } from './reference-number/reference-number.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
=======
import { ResetEmailComponent } from './reset-email/reset-email.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
>>>>>>> 05f53bc3b9d6127d94b5c5a9b20ab60da96b4b3d


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
<<<<<<< HEAD
    TransactionConfirmComponent,
    TransactionSuccessfulComponent,
    AdminComponent,
    UserProfileComponent,
    ViewBenificiariesComponent,
    EmailSentComponent,
    ReferenceNumberComponent,
    AdminHomeComponent
=======
    ResetEmailComponent,
    AccountDetailsComponent,
    AccountSummaryComponent,
    SessionExpiredComponent
>>>>>>> 05f53bc3b9d6127d94b5c5a9b20ab60da96b4b3d
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
