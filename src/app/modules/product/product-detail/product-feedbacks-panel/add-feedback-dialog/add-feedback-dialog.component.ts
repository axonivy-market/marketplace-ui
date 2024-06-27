import { ChangeDetectorRef, Component, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../../../../../shared/models/feedback.model';
import { SkipLoading } from '../../../../../core/interceptors/api.interceptor';
import { AuthService } from '../../../../../auth/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProductFeedbackService } from '../product-feedback.service';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  providers: [AuthService, ProductFeedbackService],
  imports: [FormsModule, NgbModule, TranslateModule],
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss'
})
export class AddFeedbackDialogComponent {

  @Input() productId!: string;
  @Input() feedback!: Feedback;

  activeModal = inject(NgbActiveModal);

  private productFeedbackService = inject(ProductFeedbackService);
  private authService = inject(AuthService);
  private modalService = inject(NgbModal);

  displayName: string | null = null;
  inMobileMode!: boolean;

  constructor() {
    this.displayName = this.authService.getDisplayName();
    this.feedback.productId = this.productId;
  }

  ngOnInit(): void {
  }

  onSubmitFeedback(): void {
    this.productFeedbackService.submitFeedback(this.feedback).subscribe(
      (response) => {
        this.activeModal.dismiss('Cross click');
        this.modalService.open(SuccessDialogComponent, { fullscreen: 'md', centered: true, modalDialogClass: 'add-feedback-modal-dialog' });
      },
      (error) => {
        console.error('Error submitting review:', error);
      }
    );
  }
}
