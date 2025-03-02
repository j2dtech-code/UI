import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  reviews = [
    {
      user: 'John Doe',
      position: 'Software Engineer',
      review: 'Absolutely fantastic experience! The service was top-notch and exceeded my expectations.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: 'Jane Smith',
      position: 'Product Manager',
      review: 'Great quality and super fast delivery. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      user: 'Michael Johnson',
      position: 'Data Scientist',
      review: 'The team was incredibly supportive. A seamless experience from start to finish!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      user: 'Emma Brown',
      position: 'UX Designer',
      review: 'Absolutely love the user experience. Everything was smooth and easy to use!',
      image: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      user: 'John Doe',
      position: 'Software Engineer',
      review: 'Absolutely fantastic experience! The service was top-notch and exceeded my expectations.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: 'Jane Smith',
      position: 'Product Manager',
      review: 'Great quality and super fast delivery. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      user: 'Michael Johnson',
      position: 'Data Scientist',
      review: 'The team was incredibly supportive. A seamless experience from start to finish!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      user: 'Emma Brown',
      position: 'UX Designer',
      review: 'Absolutely love the user experience. Everything was smooth and easy to use!',
      image: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      user: 'John Doe',
      position: 'Software Engineer',
      review: 'Absolutely fantastic experience! The service was top-notch and exceeded my expectations.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: 'Jane Smith',
      position: 'Product Manager',
      review: 'Great quality and super fast delivery. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      user: 'Michael Johnson',
      position: 'Data Scientist',
      review: 'The team was incredibly supportive. A seamless experience from start to finish!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      user: 'Emma Brown',
      position: 'UX Designer',
      review: 'Absolutely love the user experience. Everything was smooth and easy to use!',
      image: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      user: 'John Doe',
      position: 'Software Engineer',
      review: 'Absolutely fantastic experience! The service was top-notch and exceeded my expectations.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      user: 'Jane Smith',
      position: 'Product Manager',
      review: 'Great quality and super fast delivery. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      user: 'Michael Johnson',
      position: 'Data Scientist',
      review: 'The team was incredibly supportive. A seamless experience from start to finish!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      user: 'Emma Brown',
      position: 'UX Designer',
      review: 'Absolutely love the user experience. Everything was smooth and easy to use!',
      image: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  ];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,  // Set to false to hide dots
    arrows: true, // Set to true to show arrows
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
}