import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarRatingCountingService } from './star-rating-counting.service';
import { StarRatingHighlightDirective } from './star-rating-highlight.directive';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from '../../../../shared/components/star-rating/star-rating.component';
import { StarRatingCounting } from '../../../../shared/models/star-rating-counting.model';
import { AddFeedbackDialogComponent } from '../product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component';
import { SuccessDialogComponent } from '../product-feedbacks-panel/add-feedback-dialog/success-dialog/success-dialog.component';

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
export class StarRatingCountingComponent implements OnInit {
  @Input() productId: string = '667109f11666e1352a072f8a';
  @Input() productName!: string;
  @Input() platformReview: string = '3.5';
  @Input() isDisplayInDialog: boolean = false;
  @ViewChild('ratingLink', { static: false }) ratingLink!: ElementRef;
  @Output() openAddFeedbacDialogEvent = new EventEmitter();

  totalComments: number = 0;
  reviewNumber: number = 0;
  starRatingCountings: StarRatingCounting[] = [];
  subscriptions: Subscription[] = [];
  starRatingCountingService = inject(StarRatingCountingService);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.loadAllStarRatingCountings();
  }

  loadAllStarRatingCountings(): void {
    this.subscriptions.push(
      this.starRatingCountingService
        .getAllRatingCommentCounting(this.productId)
        .subscribe(starRatingCountings => {
          this.starRatingCountings = starRatingCountings;
          this.calculateTotalComments();
          this.calculateReviewNumber();
          this.sortByStar();
        })
    );
  }

  calculateTotalComments(): void {
    this.starRatingCountings.forEach(starRating => {
      this.totalComments = this.totalComments + starRating.commentNumber;
    });
  }

  calculateReviewNumber(): void {
    this.starRatingCountings.forEach(starRating => {
      this.reviewNumber += starRating.starRating * starRating.percent / 100;
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
    // const token = this.getTokenFromCookie(); // Implement this method to get token from cookie
    // console.log(token);

    // const tokenExpiryValid = this.isTokenValid(token); // Implement this method to check token validity
    // console.log(tokenExpiryValid);

    // if (token && tokenExpiryValid) {
    //   this.openAddFeedbacDialogEvent.emit();
      
    //   var modalRef;
    //   const mediaQuery = window.matchMedia('(max-width: 767px)');
    //   if (mediaQuery.matches) {
    //     modalRef = this.modalService.open(AddFeedbackDialogComponent, {fullscreen: true});
    //   }
    //   else {
    //     modalRef = this.modalService.open(AddFeedbackDialogComponent, {centered: true, modalDialogClass: 'add-feedback-modal-dialog'});
    //   }
    //   modalRef.componentInstance.productName = this.productName;
    // }
    // else {
    //   this.onClickRateThisConnector();
    // }
    this.modalService.open(AddFeedbackDialogComponent, { fullscreen: 'md', centered: true, modalDialogClass: 'add-feedback-modal-dialog' });
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
