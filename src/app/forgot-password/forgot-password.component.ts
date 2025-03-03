import { Component } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageConfirmComponent } from '../message-confirm/message-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: false,

  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  forgotPasswordForm: FormGroup;
    submitted = false;
    successMessage = '';
  
    constructor(private fb: FormBuilder,private service: MainServiceService,private modalService: NzModalService,private dialog: MatDialog
      ,private router: Router
    ) {
      this.forgotPasswordForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
    // Get form controls
    get f(): { [key: string]: any } {
      return this.forgotPasswordForm.controls;
    }
  
    onSubmit() {
      this.submitted = true;
  
      if (this.forgotPasswordForm.invalid) {
        return;
      }
  
      // Simulate sending email
      this.successMessage = 'A password reset link has been sent to your email!';
      console.log(this.forgotPasswordForm.value);
      this.service.sendEmail(this.forgotPasswordForm.value.email).subscribe(
        (res: any) => {
          console.log('Response received:', res);
          if (res.code == 200) {
            // this.router.navigate(['/confirmMessage']);
            this.otp = res.message;
            this.openSuccessModal();
          } else {
            this.successMessage = 'No account found with this email. Please check and try again.'
          }
        }
      );
      this.isOTP = true;
    this.isForgotPassword = false;
    }

  isOTP: boolean = false;
  isChangePassword: boolean = false;
  isForgotPassword: boolean = true;
  otp: string = '';
  email: string = '';
  isVisible = false;

  // sendOTP() {
    
  //   this.service.sendEmail(this.email).subscribe(
  //     (res: any) => {
  //       console.log('Response received:', res);
  //       if (res.code == '200') {
  //         // this.router.navigate(['/confirmMessage']);
  //         this.otp = res.message;
  //       }
  //     }
  //   );


  //   this.isOTP = true;
  //   this.isForgotPassword = false;
  // }

  changePassword() {
    this.isChangePassword = true;
    this.isOTP = false;
  }

  openSuccessModal(): void {
    const dialogRef = this.dialog.open(MessageConfirmComponent, {
      width: '400px',
      disableClose: true,
      data: {message: 'OTP has been sent to your email.'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/otp'], { 
        queryParams: { otp: this.otp, email: this.forgotPasswordForm.value.email }
      });
    });
  }



}
