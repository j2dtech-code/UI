import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  standalone: false,
  
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent {
validateForm!: FormGroup;
  
    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  
    constructor(private fb: FormBuilder) {}

    experts = [
      {
        name: 'Bryan Campbell',
        title: 'President, 7 C’s Consulting',
        description: 'Simplilearn provides a structured and thorough education curriculum...',
        image: 'assets/bryan-campbell.jpg',
        linkedin: 'https://www.linkedin.com/in/bryancampbell',
      },
      // Add more experts here
    ];
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        name: [null, [Validators.required]],
        password: [null, [Validators.required]],
        email: [null, [Validators.required]],
        phoneNumber: [null, [Validators.required]]
      });
    }
}
