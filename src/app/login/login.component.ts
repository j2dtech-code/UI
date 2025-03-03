import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder,private router: Router,private service: MainServiceService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Get form controls
  get f(): { [key: string]: any } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // Simulate login success
    this.successMessage = 'Login successful!';
    console.log(this.loginForm.value);
      const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.service.login(email, password).subscribe(
      (res) => {
        if(res.code == 200) {
          this.router.navigate(['/home']);
        } else {
          this.successMessage = 'UserName or Password Incorrect'
        }
      }
    );
  }


  forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  generateOtp() {
  //  this.isOtp = true;
  }

  // login() {
  //   const email = this.validateForm.get('email')?.value;
  //   const password = this.validateForm.get('password')?.value;
  //   this.service.login(email, password).subscribe(
  //     (res) => {
  //       if(res.code == '200') {
  //         this.router.navigate(['/home']);
  //       }
  //     }
  //   );
  // }
  
}
