import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adf',
  standalone: false,

  templateUrl: './adf.component.html',
  styleUrl: './adf.component.css'
})
export class ADFComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]]
    });
  }

  enrollNow() {
    alert('Thank you for enrolling! You will receive more details shortly.');
  } 

  

}
