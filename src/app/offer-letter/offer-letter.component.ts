import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-offer-letter',
  standalone: false,
  
  templateUrl: './offer-letter.component.html',
  styleUrl: './offer-letter.component.css'
})
export class OfferLetterComponent {
  offer = { name: '', email: '', designation: '', amount: null }; // Initialize the offer object

 constructor(private fb: FormBuilder,private router: Router,private service: MainServiceService) {

 }

  requestBody = {
  name: this.offer.name,
  email: this.offer.email,
  designation: this.offer.designation,
  amount: this.offer.amount
};
  generateOffer() {
    console.log("Offer Data:", this.offer);
    this.service.generateOffer(this.requestBody).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.offer.name}_Offer_Letter.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error generating offer:', error);
        alert('Failed to generate offer.');
      }
    );
    
  }
}
