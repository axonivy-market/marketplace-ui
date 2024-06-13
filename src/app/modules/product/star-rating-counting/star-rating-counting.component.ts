import { Component, Input, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarRatingCounting } from '../../../shared/models/star-rating-counting.model';
import { StarRatingCountingService } from './star-rating-counting.service';
import { StarRatingHighlightDirective } from './star-rating-highlight.directive';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-star-rating-counting',
  standalone: true,
  imports: [StarRatingHighlightDirective, StarRatingComponent, DecimalPipe, CommonModule],
  providers: [StarRatingCountingService],
  templateUrl: './star-rating-counting.component.html',
  styleUrl: './star-rating-counting.component.scss'
})
export class StarRatingCountingComponent {
  @Input() productId: string = "abc";
  @Input() platformReview: string = "3.5";
  @Input() isDisplayInDialog: boolean = false;
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

  onClickRateThisConnector(): void {
    let redirectUri = "http://localhost:4200/auth/callback";
    let clientId = '';
    let githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = githubAuthUrl;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
