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
import { ResetEmailComponent } from './reset-email/reset-email.component';

const routes: Routes = [
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
  {path:"ResetEmail",component:ResetEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
