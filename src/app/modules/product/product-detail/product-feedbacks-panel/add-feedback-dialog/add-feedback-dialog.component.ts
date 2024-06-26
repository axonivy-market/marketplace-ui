import { ChangeDetectorRef, Component, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../../../../../shared/models/feedback.model';
import { JwtService } from '../../../../../shared/services/jwt.service';
import { SkipLoading } from '../../../../../core/interceptors/api.interceptor';

@Component({
  selector: 'app-add-feedback-dialog',
  standalone: true,
  providers: [JwtService],
  imports: [FormsModule, NgbModule],
  templateUrl: './add-feedback-dialog.component.html',
  styleUrl: './add-feedback-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AddFeedbackDialogComponent {
  @Input() productId: string = '6674a23283c3194d33fb8da2';
  @Input() productName!: string;
  inMobileMode!: boolean;

  jwtService = inject(JwtService);
  http = inject(HttpClient);
  cd = inject(ChangeDetectorRef);
  feedback = {
    content: '',
    rating: 0
  } as unknown as Feedback;
  username!: string | null;
  activeModal = inject(NgbActiveModal);
  private modalService = inject(NgbModal);
  private route = inject(ActivatedRoute);
  closeResult = '';

  constructor() { }

  ngOnInit(): void {
    this.username = this.jwtService.getCustomFieldFromToken('name');
    
    if (!this.username) {
      this.username = this.jwtService.getCustomFieldFromToken('username');
    }
    this.fetchFeedbackData().subscribe(() => {
      console.log('Next operations after fetching feedback data');
    });
    this.checkMediaSize();
  }

  fetchFeedbackData() {
    const headers = new HttpHeaders().set('x-requested-by', 'ivy');
    const userId = this.jwtService.getUserIdFromToken();
    
    let params = new HttpParams().set('productId', this.productId);
    if (userId) {
      params = params.set('userId', userId);
    }

    return this.http.get<Feedback>('api/feedback', { headers, params, context: new HttpContext().set(SkipLoading, true) })
      .pipe(
        catchError(error => {
          if (error.status === 404) {
            return of(null); // Return a default feedback object with an error property
          } else {
            return of(null); // Handle other errors if needed
          }
        }),
        switchMap(response => {
          if (response) {
            console.log('Response data:', response);
            this.feedback = response;
            if (!this.feedback.username) {
              this.username = this.feedback.username!;
            }
            console.log('Feedback data:', this.feedback);
          } else {
            console.log('No feedback found for the given user and product');
          }
          this.cd.detectChanges();
          return of(null); // Return a new observable to continue the chain
        })
      );
  }

  onSubmit(): void {
    // Assume you have a method to get the JWT token from your authentication service
    const token = this.jwtService.getTokenFromCookie('token');
    
    this.submitFeedback(this.productId, this.feedback.rating, this.feedback.content, token!)
      .subscribe(
        (response) => {
          console.log('Review submitted successfully:', response);
          this.activeModal.dismiss('Cross click');
          var successModal;
          if (this.inMobileMode) {
            successModal = this.modalService.open(SuccessDialogComponent, { fullscreen: true });
          }
          else {
            successModal = this.modalService.open(SuccessDialogComponent, { centered: true, modalDialogClass: 'add-feedback-modal-dialog' });
          }
          
          successModal.componentInstance.username = this.username;
          successModal.result.then(
            (result) => {
              window.location.reload();
            },
            (reason) => {
              window.location.reload();
            }
          );
        },
        (error) => {
          console.error('Error submitting review:', error);
          // Handle error as needed
        }
      );
  }

  submitFeedback(productId: string, rating: number, content: string, token: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-requested-by', 'ivy')
      .set('Authorization', `Bearer ${token}`);

    const feedback: any = {
      productId: productId,
      rating: rating,
      content: content
    };

    return this.http.post<any>('api/feedback', feedback, { headers, context: new HttpContext().set(SkipLoading, true) });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMediaSize();
  }

  private checkMediaSize() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.inMobileMode = true;
      
    } else {
      this.inMobileMode = false;
    }
  }
}
