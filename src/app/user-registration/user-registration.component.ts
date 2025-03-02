import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { MainServiceService } from '../services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: false,
  
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  validateForm!: FormGroup;
  isPopupVisible = false;
  
  constructor(private fb: FormBuilder,private service: MainServiceService,private router: Router) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      userName: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator that sets an error on confirmPassword if the passwords do not match.
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
    if (passwordControl && confirmPasswordControl) {
      // If confirmPassword already has errors from other validators, leave them.
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['notMatching']) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ notMatching: true });
      } else {
        // Remove the notMatching error. (Make sure not to clear other errors if they exist.)
        confirmPasswordControl.setErrors(null);
      }
    }
    return null;
  }

  confirm(): void {
    // Mark all fields as dirty to trigger validation messages.
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const registrationData = { 
        email: this.validateForm.value.email,
        phoneNumber: this.validateForm.value.phoneNumber,
        userName: this.validateForm.value.userName,
        password: this.validateForm.value.password  // Typically you don't pass confirmPassword to the API
      };
      console.log('Registration successful!', this.validateForm.value);
      this.service.registerUser(registrationData);
      // Proceed with your registration logic (e.g., call a service).
    } else {
      console.log('Please fill in all fields correctly.');
    }
  }
}