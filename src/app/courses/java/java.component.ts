import { Component } from '@angular/core';

@Component({
  selector: 'app-java',
  standalone: false,
  
  templateUrl: './java.component.html',
  styleUrl: './java.component.css'
})
export class JavaComponent {
  modules = [
    {
      name: 'Module 1: Java Fundamentals',
      content: [
        'Introduction to Java and its ecosystem',
        'Installing Java and setting up the development environment',
        'Understanding Java syntax, variables, and data types',
        'Operators and control flow statements (loops, conditions, etc.)'
      ]
    },
    {
      name: 'Module 2: Object-Oriented Programming (OOP) in Java',
      content: [
        'Classes, Objects, and Constructors',
        'Encapsulation, Inheritance, and Polymorphism',
        'Abstraction and Interfaces',
        'Static and Final keywords'
      ]
    },
    {
      name: 'Module 3: Exception Handling and File Handling',
      content: [
        'Handling runtime errors with try-catch-finally',
        'Creating custom exceptions',
        'Reading and writing files using Java I/O'
      ]
    },
    {
      name: 'Module 4: Java Collections Framework',
      content: [
        'Lists, Sets, Maps, and Queues',
        'Working with ArrayList, HashMap, and LinkedList',
        'Sorting and filtering collections',
        'Streams and Lambda expressions'
      ]
    },
    {
      name: 'Module 5: Multithreading and Concurrency',
      content: [
        'Understanding Threads and the Runnable Interface',
        'Synchronization and Thread Safety',
        'Executor Service and Callable interface'
      ]
    },
    {
      name: 'Module 6: Java for Web Development',
      content: [
        'Introduction to Servlets and JSP',
        'Handling HTTP requests and responses',
        'Working with databases using JDBC',
        'Basics of Spring Framework and REST API'
      ]
    },
    {
      name: 'Module 7: Hands-On Projects',
      content: [
        'Building real-world Java applications',
        'Mini-projects based on industry use cases',
        'Debugging and optimizing Java code'
      ]
    }
  ];
}
