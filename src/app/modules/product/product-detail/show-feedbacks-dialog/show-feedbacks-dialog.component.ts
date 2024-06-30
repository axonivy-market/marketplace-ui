import { Component, HostListener, Input, ViewEncapsulation, effect, inject, input, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel/product-feedbacks-panel.component';
import { StarRatingCountingComponent } from '../star-rating-counting/star-rating-counting.component';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-show-feedbacks-dialog',
  standalone: true,
  imports: [ProductFeedbacksPanelComponent, StarRatingCountingComponent],
  providers: [AuthService],
  templateUrl: './show-feedbacks-dialog.component.html',
  styleUrl: './show-feedbacks-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ShowFeedbacksDialogComponent {
  activeModal = inject(NgbActiveModal);

  productId!: string;
  productName!: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.activeModal.dismiss();
    }
  }
}
