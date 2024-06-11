import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject
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
export class StarRatingComponent implements OnChanges {
  @Input() rating: string = '0';
  @Input() maxStars: number = 5;

  fullStars: number[] = [];
  isHalfStar: boolean = false;
  emptyStars: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rating']) {
      this.calculateStarRating();
    }
  }

  calculateStarRating() {
    const ratingNumber = parseFloat(this.rating);
    const fullStars = Math.floor(ratingNumber);
    this.isHalfStar = ratingNumber % 1 >= 0.5;
    const totalStars = fullStars + (this.isHalfStar ? 1 : 0);

    this.fullStars = Array.from({ length: fullStars });
    this.emptyStars = Array.from({ length: this.maxStars - totalStars });
  }
}
