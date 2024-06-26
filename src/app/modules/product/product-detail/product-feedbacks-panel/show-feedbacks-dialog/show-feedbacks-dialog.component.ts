import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingCountingComponent } from '../../star-rating-counting/star-rating-counting.component';

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
  @Input() productName!: string;
  
  
}
