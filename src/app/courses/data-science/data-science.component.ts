import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-data-science',
  standalone: false,
  
  templateUrl: './data-science.component.html',
  styleUrl: './data-science.component.css'
})
export class DataScienceComponent {
constructor(private dialog: MatDialog) {}
 modules = [
  {
    name: 'Module 1: Introduction to Data Science',
    content: [
      'Overview of Data Science and its applications',
      'Understanding AI, Machine Learning, and Big Data',
      'Setting up the Python environment for data science',
      'Introduction to key libraries: Pandas, NumPy, Matplotlib'
    ]
  },
  {
    name: 'Module 2: Data Wrangling and Visualization',
    content: [
      'Data collection, cleaning, and preprocessing',
      'Handling missing values and feature engineering',
      'Exploratory Data Analysis (EDA) using Pandas and Seaborn',
      'Data visualization techniques for insights'
    ]
  },
  {
    name: 'Module 3: Machine Learning Fundamentals',
    content: [
      'Supervised vs Unsupervised Learning',
      'Regression models: Linear, Multiple, and Logistic Regression',
      'Classification algorithms: Decision Trees, Random Forest, SVM',
      'Model evaluation techniques: Confusion Matrix, Precision-Recall, ROC'
    ]
  },
  {
    name: 'Module 4: Deep Learning and Neural Networks',
    content: [
      'Introduction to Neural Networks and Deep Learning',
      'Building models using TensorFlow and Keras',
      'Convolutional Neural Networks (CNN) for image processing',
      'Natural Language Processing (NLP) fundamentals'
    ]
  },
  {
    name: 'Module 5: Big Data and Advanced Analytics',
    content: [
      'Working with large datasets using Apache Spark',
      'Big Data processing in Hadoop and PySpark',
      'Deploying ML models in production',
      'Data pipelines and cloud-based analytics (AWS, Azure, GCP)'
    ]
  },
  {
    name: 'Module 6: Industry Applications and Case Studies',
    content: [
      'Data Science in healthcare, finance, and e-commerce',
      'Building recommendation systems',
      'Fraud detection using machine learning',
      'Time-series forecasting and anomaly detection'
    ]
  },
  {
    name: 'Module 7: Hands-On Projects',
    content: [
      'End-to-end data science project implementation',
      'Building ML models with real-world datasets',
      'Hyperparameter tuning and model optimization',
      'Deploying models using Flask and Streamlit'
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
          console.log('User Data:', result);
        }
      });
    }
}
