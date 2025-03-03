import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageConfirmComponent } from '../message-confirm/message-confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-verification',
  standalone: false,
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css'
})
export class OtpVerificationComponent implements AfterViewInit{
otp: string[] = ['', '', '', '', '', ''];
  errorMessage = '';
  successMessage = '';
  receivedOtp: string = '';
  email = '';

  @ViewChildren('otpInputs') otpInputs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Auto-focus first input on page load
    setTimeout(() => {
      this.otpInputs.first.nativeElement.focus();
    }, 100);
  }

  

  constructor(private route: ActivatedRoute,private dialog: MatDialog,private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.receivedOtp = params['otp']; // Get OTP from query params
      this.email = params['email'];
      console.log('Received OTP:', this.receivedOtp);
    });
  }

  // Move to next input on typing
  moveToNext(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    // Allow only numbers
    if (!/^\d$/.test(value)) {
      inputElement.value = '';
      return;
    }

    // Move to next input if not last field
    if (value.length === 1 && index < 5) {
      this.otpInputs.toArray()[index + 1]?.nativeElement.focus();
    }
  }

  // Move to previous input on backspace
  moveToPrev(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && index > 0 && !this.otp[index]) {
      this.otpInputs.toArray()[index - 1]?.nativeElement.focus();
    }
  }

  // Handle OTP Submission
  onSubmit() {
    const enteredOtp = this.otp.join('');

    if (enteredOtp.length !== 6) {
      this.errorMessage = 'Please enter a valid 6-digit OTP.';
      return;
    }

    if (enteredOtp === this.receivedOtp) {
      this.successMessage = 'OTP Verified Successfully!';
      this.openSuccessModal();
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Incorrect OTP. Please try again.';
      this.clearOtpFields();
    }
  }

  // Clear OTP Fields on incorrect OTP
  clearOtpFields() {
    this.otp = ['', '', '', '', '', ''];
    setTimeout(() => {
      this.otpInputs.first.nativeElement.focus();
    }, 100);
  }

  // Simulate OTP Resend
  resendOtp() {
    alert('A new OTP has been sent to your registered email/phone.');
  }

  openSuccessModal(): void {
      const dialogRef = this.dialog.open(MessageConfirmComponent, {
        width: '400px',
        disableClose: true,
        data: {message: 'OTP Verified Successfully.'}
      });
  
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/resetPassword'], { 
          queryParams: { email: this.email }
        });
      });
    }
}
