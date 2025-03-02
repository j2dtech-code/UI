import { Component } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageConfirmComponent } from '../message-confirm/message-confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  standalone: false,

  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  isOTP: boolean = false;
  isChangePassword: boolean = false;
  isForgotPassword: boolean = true;
  otp: string = '';
  email: string = '';
  isVisible = false;
  constructor(private service: MainServiceService,private modalService: NzModalService,private dialog: MatDialog) { }

  sendOTP() {
    this.openSuccessModal();
    this.service.sendEmail(this.email).subscribe(
      (res: any) => {
        console.log('Response received:', res);
        if (res.code == '200') {
          // this.router.navigate(['/confirmMessage']);
          this.otp = res.message;
        }
      }
    );


    this.isOTP = true;
    this.isForgotPassword = false;
  }

  changePassword() {
    this.isChangePassword = true;
    this.isOTP = false;
  }

  openSuccessModal(): void {
    this.dialog.open(MessageConfirmComponent, {
      width: '400px',
      disableClose: true
    });
  }



}
