import { Component, Input, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarRatingCounting } from '../../../shared/models/star-rating-counting.model';
import { StarRatingCountingService } from './star-rating-counting.service';
import { StarRatingHighlightDirective } from './star-rating-highlight.directive';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-star-rating-counting',
  standalone: true,
  imports: [StarRatingHighlightDirective, StarRatingComponent, DecimalPipe],
  providers: [StarRatingCountingService],
  templateUrl: './star-rating-counting.component.html',
  styleUrl: './star-rating-counting.component.scss'
})
export class StarRatingCountingComponent {
  @Input() productId: string = "abc";
  @Input() platformReview: string = "4.2";
  totalComments: number = 0;
  reviewNumber: number = 0;
  starRatingCountings: StarRatingCounting[] = [];
  subscriptions: Subscription[] = [];
  starRatingCountingService = inject(StarRatingCountingService);

  constructor() {
    this.loadAllStarRatingCountings();
    this.calculateTotalComments();
    this.sortByStar();
    this.reviewNumber = Number.parseFloat(this.platformReview);
  }

  loadAllStarRatingCountings(): void {
    this.subscriptions.push(
      this.starRatingCountingService.getAllRatingCommentCountings()
        .subscribe((starRatingCountings) => {
          this.starRatingCountings = starRatingCountings;
        })
    );
  }

  calculateTotalComments(): void {
    this.starRatingCountings.forEach(starRating => {
      this.totalComments = this.totalComments + starRating.commentNumber;
    });
  }

  sortByStar(): void {
    this.starRatingCountings.sort((a, b) => b.starRating - a.starRating);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
