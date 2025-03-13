import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../services/main-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmComponent } from '../message-confirm/message-confirm.component';

@Component({
  selector: 'app-instructor',
  standalone: false,
  
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent {
validateForm!: FormGroup;
  
    constructor(private fb: FormBuilder,private router: Router,private service: MainServiceService,
      private route: ActivatedRoute,private dialog: MatDialog
    ) {
      this.validateForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],  // Email validation
        phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  // 10-digit number
        name: ['', Validators.required],  // Required field
        course: ['', Validators.required]  // Required selection
      });
    }

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
  
    
      
    

    submit(): void {
     
        const requestData = this.validateForm.value;
        console.log('Form Data:', requestData);
        this.service.registerInstructor(requestData).subscribe(
          (res) => {
            if(res.code == 200) {
              this.openSuccessModal();
            }
          }
        );
      
    }

    openSuccessModal(): void {
          const dialogRef = this.dialog.open(MessageConfirmComponent, {
            width: '400px',
            disableClose: true,
            data: {message: 'Registration successful! Our team will review your details and get back to you soon.'}
          });
      
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['/home']);
          });
        }
}
