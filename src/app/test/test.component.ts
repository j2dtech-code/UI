import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../services/main-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Record {
  id: number;
  name: string;
  email: string;
  course: string;
  status: string;
}

@Component({
  selector: 'app-test',
  standalone: false,
  
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent{
  offer = { name: '', email: '', designation: '', amount: null }; // Initialize the offer object

  generateOffer() {
    console.log("Offer Data:", this.offer);
    // Add logic here to generate the offer (e.g., send data to API)
  }
}