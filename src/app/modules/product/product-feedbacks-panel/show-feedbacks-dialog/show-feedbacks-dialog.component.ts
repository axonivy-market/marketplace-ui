import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel.component';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { StarRatingCountingComponent } from '../../star-rating-counting/star-rating-counting.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-feedbacks-dialog',
  standalone: true,
  imports: [ProductFeedbacksPanelComponent, StarRatingCountingComponent],
  templateUrl: './show-feedbacks-dialog.component.html',
  styleUrl: './show-feedbacks-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ShowFeedbacksDialogComponent {
  activeModal = inject(NgbActiveModal);
}
