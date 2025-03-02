import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-message',
  standalone: false,
  
  templateUrl: './confirm-message.component.html',
  styleUrl: './confirm-message.component.css'
})
export class ConfirmMessageComponent {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }
  

}
