import { Component } from '@angular/core';
import { FEEDBACK_SORT_TYPES } from '../../../../shared/constants/common.constant';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback-filter',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './feedback-filter.component.html',
  styleUrl: './feedback-filter.component.scss'
})
export class FeedbackFilterComponent {
  feedbackSortTypes = FEEDBACK_SORT_TYPES;
}
