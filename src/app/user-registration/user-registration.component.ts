import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { MainServiceService } from '../services/main-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmComponent } from '../message-confirm/message-confirm.component';

@Component({
  selector: 'app-user-registration',
  standalone: false,
  
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  signupForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private signupService: MainServiceService,private router: Router,private dialog: MatDialog) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Ensure passwords match
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { ['mismatch']: true }; // Use bracket notation to avoid TypeScript errors
  }

  // Get form controls safely
  get f(): { [key: string]: any } {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.signupService.registerUser(this.signupForm.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.code === 200) {
          this.successMessage = 'Signup successful!';
          this.openSuccessModal();
        } else if(response.code === 501){
          this.successMessage = 'User Already Exists Please Different Email!';
          this.openFailureModal();
        }
        
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
    
  }

  openFailureModal(): void {
    const dialogRef = this.dialog.open(MessageConfirmComponent, {
          width: '400px',
          disableClose: true,
          data: {message: this.successMessage}
        });
      }

  

  openSuccessModal(): void {
    const dialogRef = this.dialog.open(MessageConfirmComponent, {
          width: '400px',
          disableClose: true,
          data: {message: this.successMessage}
        });
    
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/login']
          );
        });
      }
}