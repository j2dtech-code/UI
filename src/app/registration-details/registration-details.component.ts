import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-registration-details',
  standalone: false,
  
  templateUrl: './registration-details.component.html',
  styleUrl: './registration-details.component.css'
})
export class RegistrationDetailsComponent {
displayedColumns: string[] = ['id', 'name', 'email', 'status', 'action'];
  dataSource = new MatTableDataSource([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Pending' },
    { id: 2, name: 'David Smith', email: 'david@example.com', status: 'Pending' },
    { id: 3, name: 'Ethan Brown', email: 'ethan@example.com', status: 'Pending' },
    { id: 4, name: 'Sophia Wilson', email: 'sophia@example.com', status: 'Pending' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  approve(row: any) {
    row.status = 'Approved';
  }

  reject(row: any) {
    row.status = 'Rejected';
  }
  

}
