import { Component } from '@angular/core';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss'
})
export class AddFeedbackDialogComponent {

}
