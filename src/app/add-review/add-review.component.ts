import { Component } from '@angular/core';

@Component({
  selector: 'app-add-review',
  standalone: false,
  
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {
  reviews = [
    {
      user: 'Alice Johnson',
      rating: 5,
      comment: 'Excellent service and great quality!',
      date: new Date()
    },
    {
      user: 'Bob Smith',
      rating: 4,
      comment: 'Good, but could be improved.',
      date: new Date()
    }
  ];

  newReview = {
    user: '',
    rating: 1,
    comment: ''
  };

  addReview() {
    if (this.newReview.user && this.newReview.rating && this.newReview.comment) {
      this.reviews.push({
        ...this.newReview,
        date: new Date()
      });
      this.newReview = { user: '', rating: 1, comment: '' }; // Reset form
    }
  }
}
