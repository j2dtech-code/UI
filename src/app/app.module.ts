import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n'; // Choose your locale here
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { InstructorComponent } from './instructor/instructor.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ReviewComponent } from './review/review.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageConfirmComponent } from './message-confirm/message-confirm.component'; 
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { MatCardModule } from '@angular/material/card';
import { TestComponent } from './test/test.component';
import { JavaComponent } from './courses/java/java.component';
import { ADFComponent } from './courses/adf/adf.component';
import { DataScienceComponent } from './courses/data-science/data-science.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { AddReviewComponent } from './add-review/add-review.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserRegistrationComponent,
    InstructorComponent,
    RegistrationDetailsComponent,
    ReviewComponent,
    ForgotPasswordComponent,
    ConfirmMessageComponent,
    MessageConfirmComponent,
    TestComponent,
    JavaComponent,
    ADFComponent,
    DataScienceComponent,
    AddReviewComponent,
    OtpVerificationComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    BrowserAnimationsModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzDividerModule,
    NzTableModule,
    NzCarouselModule,
    NzAvatarModule,
    NzCardModule,
    NzIconModule,
    HttpClientModule,
    NzModalModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    NzDropDownModule,
    MatCardModule,
    NzTypographyModule,
    NzGridModule,
    MatFormFieldModule,
    MatDividerModule,
    SlickCarouselModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
