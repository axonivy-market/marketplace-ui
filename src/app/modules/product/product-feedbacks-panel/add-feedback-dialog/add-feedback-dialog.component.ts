import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Feedback } from '../../../../shared/models/feedback.model';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss'
})
export class AddFeedbackDialogComponent {
  @Input() feedback: Feedback = {
    userName: '',
    userAvatarUrl: '',
    createdDate: new Date(),
    content: '',
    rating: 0
  };
}
