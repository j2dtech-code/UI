import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { MainServiceService } from '../../services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adf',
  standalone: false,

  templateUrl: './adf.component.html',
  styleUrl: './adf.component.css'
})
export class ADFComponent {
  constructor(private dialog: MatDialog,private service: MainServiceService,private router: Router) {}
    modules = [
      {
        name: 'Module 1: Introduction to Azure Data Factory',
        content: [
          'Overview of ADF and its architecture',
          'Understanding data integration and ETL concepts',
          'Setting up ADF and exploring the interface',
          'Creating and managing linked services and datasets'
        ]
      },
      {
        name: 'Module 2: Building Data Pipelines',
        content: [
          'Creating and configuring ADF pipelines',
          'Working with activities: Copy, Lookup, ForEach, and Execute Pipeline',
          'Data flow concepts and transformations',
          'Monitoring and debugging pipelines'
        ]
      },
      {
        name: 'Module 3: Data Movement and Transformation',
        content: [
          'Moving data between on-premises and cloud sources',
          'Data transformation using Mapping Data Flows',
          'Handling incremental and full data loads',
          'Working with Azure Data Lake, SQL, and Blob Storage'
        ]
      },
      {
        name: 'Module 4: Triggers and Automation',
        content: [
          'Scheduling pipelines with time-based and event-based triggers',
          'Automating workflows using parameters and expressions',
          'Using metadata-driven pipelines for dynamic ETL'
        ]
      },
      {
        name: 'Module 5: Security and Performance Optimization',
        content: [
          'Managing access with Role-Based Access Control (RBAC)',
          'Encrypting and securing data in ADF',
          'Optimizing pipeline performance and cost management',
          'Monitoring and logging with Azure Monitor'
        ]
      },
      {
        name: 'Module 6: Real-World Use Cases and Integration',
        content: [
          'Integrating ADF with Azure Synapse, Databricks, and Logic Apps',
          'Handling complex ETL workflows and real-time data processing',
          'Building end-to-end data pipelines for business intelligence'
        ]
      },
      {
        name: 'Module 7: Hands-On Projects',
        content: [
          'Building real-world ADF projects',
          'Implementing dynamic pipelines for scalable ETL',
          'Debugging, troubleshooting, and optimizing ADF solutions'
        ]
      }
    ];
  
    expandedModule: number | null = null;
  
    toggleModule(index: number): void {
      this.expandedModule = this.expandedModule === index ? null : index;
    }
  
    enroll() {
      this.openPopup();
    }
  
    openPopup() {
      const dialogRef = this.dialog.open(PopUpComponent, {
        width: '400px',
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
         this.enrollData(result);
        }
      });
    }

     enrollData(data:any) {
      this.service.enroll(data.name, data.phone).subscribe(
        (res) => {
          if(res.code == 200) {
            this.router.navigate(['/home']);
          } 
        }
      );
    }
     }


