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
  validateForm!: FormGroup;
  isForgotPassword: boolean = false;
  isOtp: boolean = false;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,private router: Router,private service: MainServiceService) {}


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });

    this.validateForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((...args) => console.log(...args));
  }

  forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  generateOtp() {
   this.isOtp = true;
  }

  login() {
    const email = this.validateForm.get('email')?.value;
    const password = this.validateForm.get('password')?.value;
    this.service.login(email, password).subscribe(
      (res) => {
        if(res.code == '200') {
          this.router.navigate(['/home']);
        }
      }
    );
  }
  
}
