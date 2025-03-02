import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  remove : boolean = true;

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Initial check to set `remove` based on the current route
    this.checkRoute(this.router.url);

    // Subscribe to router events to handle navigation changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects);
      });
  }

  checkRoute(url: string): void {
    // Define routes where the div should be hidden
    const hideDivRoutes = ['/instructor', '/registrationDetails', '/review', '/confirmMessage','/java', '/adf','/dataScience'];

    // Check if the current URL matches any of the hideDivRoutes
    this.remove = !hideDivRoutes.some(route => url.includes(route));
  }
  

  login() {
    this.router.navigate(['/login']);
  }

  instructor() {
    this.router.navigate(['/instructor']);
  }

  view() {
    this.router.navigate(['/registrationDetails']);
  }

  review() {
    this.router.navigate(['/review']);
    
  }

  allCourse() {
    this.router.navigate(['/modalMessage']);
  }

  hire() {
    this.router.navigate(['/test']);
    
  }

  adf() {
    this.router.navigate(['/adf']);
  }

  dataScience() {
    this.router.navigate(['/dataScience']);
  }

  java() {
    this.router.navigate(['/java']);
  }

  images: string[] = [
    '/images/img1.jpg', // Path is relative to the public folder
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
  ];

}
