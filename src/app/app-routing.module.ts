import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { IMPSTransferComponent } from './impstransfer/impstransfer.component';
import { NEFTTransferComponent } from './nefttransfer/nefttransfer.component';
import { RTGSTransferComponent } from './rtgstransfer/rtgstransfer.component';
import { LoginComponent } from './login/login.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { HomeComponent } from './home/home.component';
import { AccountActivationStatusComponent } from './account-activation-status/account-activation-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component'
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { TransactionPasswordComponent } from './transaction-password/transaction-password.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ViewBenificiariesComponent } from './view-benificiaries/view-benificiaries.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ReferenceNumberComponent } from './reference-number/reference-number.component';
import { TransactionConfirmComponent } from './transaction-confirm/transaction-confirm.component';
import {TransactionSuccessfulComponent} from './transaction-successful/transaction-successful.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { Otp1Component } from './otp1/otp1.component';
const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"IMPS",component:IMPSTransferComponent},
  {path:"RTGS",component:RTGSTransferComponent},
  {path:"NEFT",component:NEFTTransferComponent},
  {path:"AddPayee",component:AddPayeeComponent},
  {path:"FundsTransfer",component:FundTransferComponent},
  {path:"Login",component:LoginComponent},
  {path:"OpenAccount",component:OpenAccountComponent},
  {path:"Home",component:HomeComponent},
  {path:"TrackStatus",component:AccountActivationStatusComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"Register",component:RegisterComponent},
  {path:"AccountStatement",component:AccountStatementComponent},
  {path:"ForgotUserID",component:ForgotUserIdComponent},
  {path:"ForgotPassword",component:ForgotPasswordFormComponent},
  {path:"SetNewPassword",component:SetNewPasswordComponent},
  {path:"TransactionPassword",component:TransactionPasswordComponent},
  {path:"ViewBenificiaries",component:ViewBenificiariesComponent},
  {path:"Admin",component:AdminComponent},
  {path:"EmailSent",component:EmailSentComponent},
  {path:"AdminHome",component:AdminHomeComponent},
  {path:"ReferenceNumber",component:ReferenceNumberComponent},
  {path:"TransactionConfirm",component:TransactionConfirmComponent},
  {path:"TransactionSuccess",component:TransactionSuccessfulComponent},
  {path:"UpdateUser",component:UserProfileComponent},
  {path:"ResetEmail",component:ResetEmailComponent},
  {path:"AccountDetails",component:AccountDetailsComponent},
  {path:"AccountSummary",component:AccountSummaryComponent},
  {path:"SessionExpired",component:SessionExpiredComponent},
  {path:"OTP1",component:Otp1Component},
  {path:"TransactionSuccessful",component:TransactionSuccessfulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
