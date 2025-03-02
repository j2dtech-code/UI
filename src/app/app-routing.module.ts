import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { InstructorComponent } from './instructor/instructor.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { ReviewComponent } from './review/review.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component';
import { MessageConfirmComponent } from './message-confirm/message-confirm.component';
import { TestComponent } from './test/test.component';
import { ADFComponent } from './courses/adf/adf.component';
import { DataScienceComponent } from './courses/data-science/data-science.component';
import { JavaComponent } from './courses/java/java.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'userRegister', component: UserRegistrationComponent },
  { path: 'instructor', component: InstructorComponent },
  { path: 'registrationDetails', component: RegistrationDetailsComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'confirmMessage', component: ConfirmMessageComponent },
  { path: 'modalMessage', component: MessageConfirmComponent },
  { path: 'adf', component: ADFComponent },
  { path: 'dataScience', component: DataScienceComponent },
  { path: 'java', component: JavaComponent },
  { path: 'test', component: TestComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
