import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FEEDBACK_SORT_TYPES } from '../../../../../shared/constants/common.constant';

@Component({
  selector: 'app-feedback-filter',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './feedback-filter.component.html',
  styleUrl: './feedback-filter.component.scss'
})
export class FeedbackFilterComponent {
  feedbackSortTypes = FEEDBACK_SORT_TYPES;

  @Output() sortChange = new EventEmitter<string>();

  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.sortChange.emit(selectElement.value);
  }
}
