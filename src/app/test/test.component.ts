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
export class TestComponent implements OnInit{
  records: Record[] = [];
  displayedRecords: Record[] = [];
  currentPage: number = 1;
  recordsPerPage: number = 5;
  Math = Math; // Enable Math functions in template

  ngOnInit() {
    this.records = [
      { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Data Science', status: 'Pending' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Java', status: 'Pending' },
      { id: 3, name: 'Michael Johnson', email: 'michael@example.com', course: 'ADF', status: 'Pending' },
      { id: 4, name: 'Emily Davis', email: 'emily@example.com', course: 'Data Science', status: 'Pending' },
      { id: 5, name: 'Chris Brown', email: 'chris@example.com', course: 'Java', status: 'Pending' },
      { id: 6, name: 'Sophia Wilson', email: 'sophia@example.com', course: 'ADF', status: 'Pending' }
    ];
    this.updatePagination();
  }

  updateStatus(id: number, newStatus: string) {
    const record = this.records.find(item => item.id === id);
    if (record) {
      record.status = newStatus;
    }
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    this.displayedRecords = this.records.slice(startIndex, startIndex + this.recordsPerPage);
  }

  changePage(page: number) {
    if (page > 0 && page <= Math.ceil(this.records.length / this.recordsPerPage)) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
}