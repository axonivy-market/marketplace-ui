import { Component } from '@angular/core';
import { ProductFeedbacksPanelComponent } from '../product-feedbacks-panel.component';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { StarRatingCountingComponent } from '../../star-rating-counting/star-rating-counting.component';

@Component({
  selector: 'app-show-feedbacks-dialog',
  standalone: true,
  imports: [ProductFeedbacksPanelComponent, StarRatingCountingComponent],
  templateUrl: './show-feedbacks-dialog.component.html',
  styleUrl: './show-feedbacks-dialog.component.scss'
})
export class ShowFeedbacksDialogComponent {
  
}
