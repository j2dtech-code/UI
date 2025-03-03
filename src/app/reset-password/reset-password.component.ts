import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../services/main-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmComponent } from '../message-confirm/message-confirm.component';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
resetPasswordForm: FormGroup;
  submitted = false;
  successMessage = '';
  email = '';

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private service: MainServiceService
    ,private dialog: MatDialog,private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$')]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  // Get form controls
  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.service.updatePassword(this.email, this.resetPasswordForm.value.password).subscribe(
    );
    this.openSuccessModal();

        // Simulate password reset success
    this.successMessage = 'Your password has been reset successfully! You can now log in with your new password.';
    console.log('New Password:', this.resetPasswordForm.value.password);

  }

  openSuccessModal(): void {
        const dialogRef = this.dialog.open(MessageConfirmComponent, {
          width: '400px',
          disableClose: true,
          data: {message: 'Your password has been reset successfully! You can now log in with your new password.'}
        });
    
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/login'], { 
            queryParams: { email: this.email }
          });
        });
      }
}
