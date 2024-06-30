import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StarRatingCountingService } from './star-rating-counting.service';
import { StarRatingHighlightDirective } from './star-rating-highlight.directive';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from '../../../../shared/components/star-rating/star-rating.component';
import { StarRatingCounting } from '../../../../shared/models/star-rating-counting.model';
import { AddFeedbackDialogComponent } from '../product-feedbacks-panel/add-feedback-dialog/add-feedback-dialog.component';
import { Feedback } from '../../../../shared/models/feedback.model';
import { ProductService } from '../../product.service';
import { ProductFeedbackService } from '../product-feedbacks-panel/product-feedback.service';
import { AuthService } from '../../../../auth/auth.service';

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
  providers: [StarRatingCountingService, ProductFeedbackService],
  templateUrl: './star-rating-counting.component.html',
  styleUrl: './star-rating-counting.component.scss'
})
export class StarRatingCountingComponent implements OnInit {
  @Input() productId!: string;
  @Input() productName!: string;
  @Input() platformReview: string = '3.5';
  @Input() isDisplayInDialog: boolean = false;
  @Output() openAddFeedbacDialogEvent = new EventEmitter();
  @Output() updateFeedback = new EventEmitter<Feedback>();

  totalComments: number = 0;
  reviewNumber: number = 0;
  starRatingCountings: StarRatingCounting[] = [];
  subscriptions: Subscription[] = [];
  starRatingCountingService = inject(StarRatingCountingService);
  feedback: Feedback = {
    productId: this.productId,
    rating: 0,
    content: ''
  };
  private modalService = inject(NgbModal);
  private productFeedbackService = inject(ProductFeedbackService);

  authService = inject(AuthService);

  ngOnInit(): void {
    this.loadUserFeedback();
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
      this.reviewNumber += (starRating.starRating * starRating.percent) / 100;
    });
  }

  sortByStar(): void {
    this.starRatingCountings.sort((a, b) => b.starRating - a.starRating);
  }

  onClickRateThisConnector(): void {
    this.authService.redirectToGitHub('approval-decision-utils');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  openRateConnectorDialog() {
    const token = this.authService.getToken(); // Implement this method to get token from cookie

    // const tokenExpiryValid = this.isTokenValid(token); // Implement this method to check token validity

    if (token) {
      this.openAddFeedbacDialogEvent.emit();
      console.log(token);

      const addFeedbackModal = this.modalService.open(
        AddFeedbackDialogComponent,
        {
          fullscreen: 'md',
          centered: true,
          modalDialogClass: 'add-feedback-modal-dialog'
        }
      );
      addFeedbackModal.componentInstance.feedback = this.feedback;
      addFeedbackModal.componentInstance.productId = this.productId;
      addFeedbackModal.componentInstance.productName = this.productName;
      addFeedbackModal.result.then(() => {
        this.updateFeedback.emit();
      });
    } else {
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

  loadUserFeedback() {
    this.productFeedbackService
      .findProductFeedbackOfUser(this.productId)
      .subscribe(
        feedback => {
          this.feedback = feedback;
        },
        error => {
          // this.feedback = {productId: this.productId};
        }
      );
  }
}
