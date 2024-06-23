import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarRatingCounting } from '../../../shared/models/star-rating-counting.model';
import { StarRatingCountingService } from './star-rating-counting.service';
import { StarRatingHighlightDirective } from './star-rating-highlight.directive';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AddFeedbackDialogComponent } from '../product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating-counting',
  standalone: true,
  imports: [
    StarRatingHighlightDirective,
    StarRatingComponent,
    AddFeedbackDialogComponent,
    DecimalPipe,
    CommonModule
  ],
  providers: [StarRatingCountingService],
  templateUrl: './star-rating-counting.component.html',
  styleUrl: './star-rating-counting.component.scss'
})
export class StarRatingCountingComponent {
  @Input() productId: string = 'abc';
  @Input() productName!: string;
  @Input() platformReview: string = '3.5';
  @Input() isDisplayInDialog: boolean = false;
  @ViewChild('ratingLink', { static: false }) ratingLink!: ElementRef;

  totalComments: number = 0;
  reviewNumber: number = 0;
  starRatingCountings: StarRatingCounting[] = [];
  subscriptions: Subscription[] = [];
  starRatingCountingService = inject(StarRatingCountingService);
  private modalService = inject(NgbModal);

  constructor() {
    this.loadAllStarRatingCountings();
    this.calculateTotalComments();
    this.sortByStar();
    this.reviewNumber = Number.parseFloat(this.platformReview);
  }

  loadAllStarRatingCountings(): void {
    this.subscriptions.push(
      this.starRatingCountingService
        .getAllRatingCommentCountings()
        .subscribe(starRatingCountings => {
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
    let redirectUri = `http://localhost:4200/auth/callback?productId=${this.productName}`;
    let clientId = 'Ov23liUzb36JCQIfEBGn';
    let githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = githubAuthUrl;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  openRateConnectorDialog() {
    const token = this.getTokenFromCookie(); // Implement this method to get token from cookie
    console.log(token);

    const tokenExpiryValid = this.isTokenValid(token); // Implement this method to check token validity
    console.log(tokenExpiryValid);

    if (token && tokenExpiryValid) {
      const modalRef = this.modalService.open(AddFeedbackDialogComponent, {centered: true, modalDialogClass: 'add-feedback-modal-dialog'});
      modalRef.componentInstance.productName = this.productName;
    }
    else {
      this.onClickRateThisConnector();
    }
  }

  getTokenFromCookie(): string {
    const name = 'token' + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  }

  isTokenValid(token: string): boolean {
    if (!token) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return expiry > Date.now();
    } catch (error) {
      console.error('Error parsing JWT token:', error);
      return false;
    }
  }
}
