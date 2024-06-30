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
import { AppModalService } from '../../../../../shared/services/app-modal.service';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  providers: [AuthService, ProductFeedbackService, AppModalService],
  imports: [FormsModule, NgbModule, TranslateModule],
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss'
})
export class AddFeedbackDialogComponent {

  activeModal = inject(NgbActiveModal);
  private productFeedbackService = inject(ProductFeedbackService);
  private authService = inject(AuthService);
  private appModalService = inject(AppModalService);

  productId!: string;
  productName!: string;
  displayName: string = '';
  feedback: Feedback = {
    content: '',
    rating: 0
  };

  ngOnInit() {
    const displayName = this.authService.getDisplayName();
    if (displayName) {
      this.displayName = displayName;
    }
    this.feedback.productId = this.productId;
  }

  onSubmitFeedback(): void {
    this.productFeedbackService.submitFeedback(this.feedback).subscribe(
      () => {
        this.activeModal.close();
        this.appModalService.openSuccessDialog();
      },
      (error) => {
        console.error('Error submitting review:', error);
      }
    );
  }
}
