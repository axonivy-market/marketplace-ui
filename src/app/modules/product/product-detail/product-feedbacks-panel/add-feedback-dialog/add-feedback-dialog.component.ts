import { ChangeDetectorRef, Component, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../../../../../shared/models/feedback.model';
import { SkipLoading } from '../../../../../core/interceptors/api.interceptor';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  providers: [AuthService],
  imports: [FormsModule, NgbModule],
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AddFeedbackDialogComponent {

  @Input() productId!: string;
  @Input() feedback!: Feedback;

  activeModal = inject(NgbActiveModal);

  private authService = inject(AuthService);
  private modalService = inject(NgbModal);

  displayName: string | null = null;
  inMobileMode!: boolean;

  constructor() {
    this.displayName = this.authService.getDisplayName();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.modalService.open(SuccessDialogComponent, { fullscreen: 'md', centered: true, modalDialogClass: 'add-feedback-modal-dialog' });
    // this.submitFeedback(this.productId, this.feedback.rating, this.feedback.content, token!)
    //   .subscribe(
    //     (response) => {
    //       console.log('Review submitted successfully:', response);
    //       this.activeModal.dismiss('Cross click');
    //       var successModal;
          
    //     },
    //     (error) => {
    //       console.error('Error submitting review:', error);
    //       // Handle error as needed
    //     }
    //   );
  }

  // submitFeedback(productId: string, rating: number, content: string, token: string): Observable<any> {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('x-requested-by', 'ivy')
  //     .set('Authorization', `Bearer ${token}`);

  //   const feedback: any = {
  //     productId: productId,
  //     rating: rating,
  //     content: content
  //   };

  //   return this.http.post<any>('api/feedback', feedback, { headers, context: new HttpContext().set(SkipLoading, true) });
  // }
}
