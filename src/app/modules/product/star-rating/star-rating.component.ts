import {
  Component,
  Input
} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  providers: [ProductService],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;
  @Input() totalComments: number = 0;
  @Input() isTotalCommentsVisibility: boolean = true;
  @Input() starFeedbackClassName: string = "star-feedback-default";


  fullStars: number[] = [];
  isHalfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnInit() {
    this.calculateStarRating();
  }

  calculateStarRating() {
    const fullStars = Math.floor(this.rating);
    this.isHalfStar = this.rating % 1 >= 0.1;
    const totalStars = fullStars + (this.isHalfStar ? 1 : 0);

    this.fullStars = Array.from({ length: fullStars });
    this.emptyStars = Array.from({ length: this.maxStars - totalStars });
  }
}
