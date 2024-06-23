import { ChangeDetectorRef, Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Feedback } from '../../../../shared/models/feedback.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtService } from '../../../../shared/services/jwt.service';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor() { }

  ngOnInit(): void {
    this.username = this.jwtService.getCustomFieldFromToken('name');
    
    if (!this.username) {
      this.username = this.jwtService.getCustomFieldFromToken('username');
    }
    this.fetchFeedbackData().subscribe(() => {
      console.log('Next operations after fetching feedback data');
    });
  }

  fetchFeedbackData() {
    const headers = new HttpHeaders().set('x-requested-by', 'ivy');
    const userId = this.jwtService.getUserIdFromToken();
    
    let params = new HttpParams().set('productId', this.productId);
    if (userId) {
      params = params.set('userId', userId);
    }

    return this.http.get<Feedback>('api/feedback', { headers, params })
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
          this.modalService.open(SuccessDialogComponent, { centered: true, modalDialogClass: 'add-feedback-modal-dialog' });
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

    return this.http.post<any>('api/feedback', feedback, { headers });
  }
}
